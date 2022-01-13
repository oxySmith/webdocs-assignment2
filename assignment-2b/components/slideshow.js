var template = document.createElement('template')
template.innerHTML= `
    <link rel="stylesheet" href="styles/main.css">
    <!-- Slideshow container -->
    <div class="slideshow-container">
    
      <!-- Full-width images with number and caption text -->
      <div class="mySlides fade">
        <div class="numbertext">1 / 3</div>
        <img src="images/apple.jpg" style="width:100%">
      </div>
    
      <div class="mySlides fade">
        <div class="numbertext">2 / 3</div>
       <img src="images/eggs.jpg" style="width:100%">
      </div>
    
      <div class="mySlides fade">
        <div class="numbertext">3 / 3</div>
        <img src="images/cake.jpg" style="width:100%">
      </div>
    
      <!-- Next and previous buttons -->
      <a class="prev">&#10094;</a>
      <a class="next">&#10095;</a>
    </div>
    <br>
    
    <!-- The dots/circles -->
    <div style="text-align:center">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
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
        var slides = this.shadowRoot.querySelectorAll(".mySlides");
        var dots = this.shadowRoot.querySelectorAll(".dot");
        console.log(slides)
        if (n > slides.length) {this.slideIndex = 1}
        if (n < 1) {this.slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.slideIndex-1].style.display = "block";
        dots[this.slideIndex-1].className += " active";
    }
    connectedCallback(){
        this.shadowRoot.querySelector('.prev').addEventListener('click', () => this.plusSlides(-1))
        this.shadowRoot.querySelector('.next').addEventListener('click', () => this.plusSlides(1))
    }
    disconnectedCallback(){
        this.shadowRoot.querySelector('#toggle-info').removeEventListener
    }
}

window.customElements.define('about-slideshow', Slideshow)