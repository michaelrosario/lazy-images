// Your code goes here


(function( $ ) {

	/*
		Author: Michael Rosario
	*/
 
    $.fn.lazyImages = function() {

    	var currentContainer = this;

        // Set pixelRatio to 1 if the browser doesn't offer it up.
        var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;

    	function lazyImageLoad() {

    		currentContainer.each(function(index){
	
    			var currentClass = $(this);
	
    		  	if ($(window).scrollTop()+$(window).height() >= currentClass.offset().top + currentClass.height()/9.5 && currentClass.hasClass("loaded")) {
					currentClass
						.addClass("loaded")
						.find(".lazy-image")
						.addClass(".lazy-loaded")
						.each(function(){
    		      		
    		       			var img = $(this).attr('data-image') || '';
                            var style = $(this).attr('data-style') || '';
                            
                            if (pixelRatio > 1 || ($(window).width() <= 768 && $(window).width() > 311)) {
                
                                var retinaImg = $(this).attr('data-retina') || '';
                                if(retinaImg){ img = retinaImg; }

                            }

    		        		var alt = $(this).attr('data-alt') || "image "+index;
    		        		var className = $(this).attr('data-class') || "lazy-image-"+index;
    		        		if(img){
                                $(this).hide();
                                if(style){ $(this).attr("style",style); }
                                $(this).html("<img class='"+className+"' alt='"+alt+"' src='"+img+"'/>").fadeIn();
                            }
    	
    		    	});
    		 	}
    		});

    	}

    	lazyImageLoad();
 
    	$(window).scroll(function(){ 

    		lazyImageLoad();
    		
    	});

	}
}( jQuery ));
