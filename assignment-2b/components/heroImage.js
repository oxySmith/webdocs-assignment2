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
        padding: 1rem 6rem;
        border-radius: 0.4rem;
        color: #ffff;
        font-weight: 600;
        background-color: #f38d3f;
        cursor: pointer;
      }
    </style>
    <div class="hero-image">
        <div class="hero-text">
            <h1></h1>
            <p></p>
            <a class="hero-btn"></a>
        </div>
    </div>
`

class HeroImage extends HTMLElement {
    constructor(){
        super();
        this.showInfo=true;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h1').innerText = this.getAttribute('header');
        this.shadowRoot.querySelector('p').innerText = this.getAttribute('text');
        this.shadowRoot.querySelector('.hero-btn').innerText = this.getAttribute('btn-text');
        this.shadowRoot.querySelector(".hero-image").style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(images/${this.getAttribute('bg')}.jpeg)`;
    }
}

window.customElements.define('hero-image', HeroImage)