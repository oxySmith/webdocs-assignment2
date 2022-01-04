var template = document.createElement('template')
template.innerHTML= `
    <style>
        * {box-sizing:border-box}

        /* Slideshow container */
        .slideshow-container {
          max-width: 500px;
          position: relative;
          margin: auto;
        }
        
        /* Hide the images by default */
        .mySlides {
          display: none;
        }
        
        /* Next & previous buttons */
        .prev, .next {
          cursor: pointer;
          position: absolute;
          top: 50%;
          width: auto;
          margin-top: -22px;
          padding: 16px;
          color: white;
          font-weight: bold;
          font-size: 18px;
          transition: 0.6s ease;
          border-radius: 0 3px 3px 0;
          user-select: none;
        }
        
        /* Position the "next button" to the right */
        .next {
          right: 0;
          border-radius: 3px 0 0 3px;
        }
        
        /* On hover, add a black background color with a little bit see-through */
        .prev:hover, .next:hover {
          background-color: rgba(0,0,0,0.8);
        }
        
        /* Caption text */
        .text {
          color: #f2f2f2;
          font-size: 15px;
          padding: 8px 12px;
          position: absolute;
          bottom: 8px;
          width: 100%;
          text-align: center;
        }
        
        /* Number text (1/3 etc) */
        .numbertext {
          color: #f2f2f2;
          font-size: 12px;
          padding: 8px 12px;
          position: absolute;
          top: 0;
        }
        
        /* The dots/bullets/indicators */
        .dot {
          cursor: pointer;
          height: 15px;
          width: 15px;
          margin: 0 2px;
          background-color: #bbb;
          border-radius: 50%;
          display: inline-block;
          transition: background-color 0.6s ease;
        }
        
        .active, .dot:hover {
          background-color: #717171;
        }
        
        /* Fading animation */
        .fade {
          -webkit-animation-name: fade;
          -webkit-animation-duration: 1.5s;
          animation-name: fade;
          animation-duration: 1.5s;
        }
        
        @-webkit-keyframes fade {
          from {opacity: .4}
          to {opacity: 1}
        }
        
        @keyframes fade {
          from {opacity: .4}
          to {opacity: 1}
        }
    </style>
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
      <span class="dot" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
      <span class="dot" onclick="currentSlide(3)"></span>
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