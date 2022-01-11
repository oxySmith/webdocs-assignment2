var template = document.createElement('template')
template.innerHTML= `
    <style>
        .hero-image {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        height: 25rem;
        margin: 2rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 100%;
      }
      .hero-text {
        text-align: center;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.5rem;
      }
      .hero-btn{
        border-radius: 0.4rem;
        color: #ffff;
        font-weight: 600;
        background-color: #f38d3f;
        cursor: pointer;
        text-decoration: none;
        width: 10rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-content: unsafe;
        align-items: center;
      }
    </style>
    <div class="hero-image">
        <div class="hero-text">
            <h1></h1>
            <p></p>
            <a class="hero-btn" href="#"></a>
        </div>
    </div>
`

class HeroImage extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h1').innerText = this.getAttribute('header');
        this.shadowRoot.querySelector('p').innerText = this.getAttribute('text');
        this.shadowRoot.querySelector('.hero-btn').innerText = this.getAttribute('btn-text');
        this.shadowRoot.querySelector('.hero-btn').href = this.getAttribute('btn-link');
        this.shadowRoot.querySelector(".hero-image").style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(images/${this.getAttribute('bg')}.jpeg)`;
    }
}

window.customElements.define('hero-image', HeroImage)