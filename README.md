# lazy-images

Lazy load images using jQuery 

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

