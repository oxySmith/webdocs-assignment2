var template = document.createElement('template')
template.innerHTML= `
    <link rel="stylesheet" href="styles/main.css" />
    <!-- Slideshow container -->
    <div class="slideshow-container">
    
      <!-- Full-width images with number and caption text -->
      <div class="slideshow fade">
        <img src="images/apple.jpg" class="slideshow_img" width="200" height="400" alt="apple"/>
      </div>
    
      <div class="slideshow fade">
       <img src="images/eggs.jpg" class="slideshow_img" width="200" height="400" alt="eggs"/>
      </div>
    
      <div class="slideshow fade">
        <img src="images/cake.jpg" class="slideshow_img" width="200" height="400" alt="cake"/>
      </div>
      <!-- The dots/circles -->
      <div class="slideshow_control">
          <a class="slideshow_prev">&#10094;</a>
          <div class="slideshow_indicators">
              <span class="slideshow_dot"></span>
              <span class="slideshow_dot"></span>
              <span class="slideshow_dot"></span>
          </div>
          <a class="slideshow_next">&#10095;</a>
      </div>
    </div>
    <br>
    
    
    
`

class Slideshow extends HTMLElement {
    constructor(){
        super();
        this.slideIndex =1;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.showSlides(this.slideIndex)
    }

    // Next/previous controls
    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

// Thumbnail image controls
    currentSlide(n) {
        this.showSlides(this.slideIndex = n);
    }

    showSlides(n) {
        var i;
        var slides = this.shadowRoot.querySelectorAll(".slideshow");
        var dots = this.shadowRoot.querySelectorAll(".slideshow_dot");
        if (n > slides.length) {this.slideIndex = 1}
        if (n < 1) {this.slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" slideshow--active", "");
        }
        slides[this.slideIndex-1].style.display = "block";
        dots[this.slideIndex-1].className += " slideshow--active";
    }
    connectedCallback(){
        this.shadowRoot.querySelector('.slideshow_prev').addEventListener('click', () => this.plusSlides(-1))
        this.shadowRoot.querySelector('.slideshow_next').addEventListener('click', () => this.plusSlides(1))
    }
    disconnectedCallback(){
        this.shadowRoot.querySelector('.slideshow_prev').removeEventListener;
        this.shadowRoot.querySelector('.slideshow_next').removeEventListener;
    }
}

window.customElements.define('about-slideshow', Slideshow)