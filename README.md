# lazy-images

Lazy load images using jQuery.

*Parameters:*
- *class* : required and must be "lazy-image"
- *data-class* : optional, you can provide your own class
- *data-image* : the URL of the image
- *data-retina* : optional, the URL of the 2x image
- *data-alt* : optional, the Alt text for the image
- *data-style* : optional, this adds inline css to your lazy-image object

Add a *noscript* tag in case the browser has JavaScript disabled.


Example Code:
-----------------------

    <div class="container-name">
      
      <!-- Simple Example -->
      <span 
        class="lazy-image" 
        data-class="your-class" 
        data-style="border: 1px solid #000"
        data-image="/path-to/image.jpg" 
        data-retina="/path-to/image@2x.jpg"
        data-alt="This is the alt parameter of the image">
      </span>
 
      <noscript>
        <img class="your-class" src="/path-to/image.jpg" alt="This is the alt parameter of the image" />
      </noscript>

    </div>
    
    <div class="container-name">
      
      <!-- Link Example -->
      <a 
        href="https://www.elementoinc.com"
        class="lazy-image" 
        data-class="your-class" 
        data-image="/path-to/image.jpg" 
        data-retina="/path-to/image@2x.jpg"
        data-alt="This is the alt parameter of the image">
      </a>
 
      <noscript>
        <a href="https://www.elementoinc.com">
            <img class="your-class" src="/path-to/image.jpg" alt="This is the alt parameter of the image" />
        </a>
      </noscript>

    </div>
    
    <div class="container-name">
      
      <!-- Multiple Images Example -->
      <span
        class="lazy-image" 
        data-class="your-class" 
        data-image="/path-to/image-01.jpg"
        data-retina="/path-to/image@2x.jpg"
        data-alt="This is the alt parameter of the image 1">
      </span>
      <span
        class="lazy-image" 
        data-class="your-class" 
        data-image="/path-to/image-02.jpg"
        data-retina="/path-to/image@2x.jpg"
        data-alt="This is the alt parameter of the image 2">
      </span>
 
      <noscript>
        <img class="your-class" src="/path-to/image-01.jpg" alt="This is the alt parameter of the image 1" />
        <img class="your-class" src="/path-to/image-02.jpg" alt="This is the alt parameter of the image 2" />
      </noscript>

    </div>
    
    <script>
      $(document).ready(function(){
        $(".container-name").lazyImages(); 
      });
    </script>


NOTES:
- The wrapper gets a class "loaded" when the lazy-images are in view
- Each lazy loaded image gets a class "lazy-loaded" 