var template = document.createElement('template')
template.innerHTML= `
    <link rel="stylesheet" href="styles/main.css">
    <div class="recipe">
        <h2></h2>
        <div class="recipe_container">
            <iframe title="" allowfullscreen="true" class="recipe_embed" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
        </div>
    </div>
    
`

class RecipeVideo extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h2').innerText = this.getAttribute('header');
        this.shadowRoot.querySelector('.recipe_embed').src = `https://www.youtube.com/embed/${this.getAttribute('id')}`;
        this.shadowRoot.querySelector('.recipe_embed').title = this.getAttribute('header');
    }
}

window.customElements.define('recipe-video', RecipeVideo)