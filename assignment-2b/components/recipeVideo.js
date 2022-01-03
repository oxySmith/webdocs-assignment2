var template = document.createElement('template')
template.innerHTML= `
    <style>
        .recipe{
            width: 75%;
            margin-bottom: 5rem;
        }
        .container {
            position: relative;
            overflow: hidden;
            width: 100%;
            padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
        }
    
        .responsive-iframe {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
        }
    </style>
    <div class="recipe">
        <h2></h2>
        <div class="container">
            <iframe class="responsive-iframe" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
        </div>
    </div>
    
`

class RecipeVideo extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h2').innerText = this.getAttribute('header');
        this.shadowRoot.querySelector('.responsive-iframe').src = `https://www.youtube.com/embed/${this.getAttribute('id')}`;
    }
}

window.customElements.define('recipe-video', RecipeVideo)