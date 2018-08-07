# lazy-images

Lazy load images using jQuery.

*Parameters:*
- *class* : required and must be "lazy-image"
- *data-class* : optional, you can provide your own class
- *data-image* : the URL of the image
- *data-alt* : optional, the Alt text for the image

Add a *noscript* tag in case the browser has JavaScript disabled.


Example Code:
-----------------------

    <div class="container-name">
  
      <span 
        class="lazy-image" 
        data-class="your-class" 
        data-image="/path-to/image.jpg" 
        data-alt="This is the alt parameter of the image">
     </span>
 
      <noscript>
        <img class="your-class" src="/path-to/image.jpg" alt="This is the alt parameter of the image" />
      </noscript>

    </div>
    
    <script>
      $(document).ready(function(){
        $(".container-name").lazyImages(); 
      });
    </script>

