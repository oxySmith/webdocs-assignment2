var template = document.createElement('template')
template.innerHTML= `
    <link rel="stylesheet" href="styles/main.css">

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
        this.showInfo=true;
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