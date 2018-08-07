(function( $ ) {

	/*
		Author: Michael Rosario
	*/
 
    $.fn.lazyImages = function() {

    	var currentContainer = this;

    	function lazyImageLoad() {

    		currentContainer.each(function(index){
	
    			var currentClass = $(this);
	
    		  	if ($(window).scrollTop()+$(window).height() >= currentClass.offset().top + currentClass.height()/2.5 ) {
    		    	currentClass.find(".lazy-image").each(function(){
    		      		if($.trim($(this).html())==''){
    		       			var img = $(this).attr('data-image');
    		        		var alt = $(this).attr('data-alt');
    		        		var className = $(this).attr('data-class');
    		        		$(this).hide().html("<img class='"+className+"' alt='"+alt+"' src='"+img+"'/>").fadeIn();
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
