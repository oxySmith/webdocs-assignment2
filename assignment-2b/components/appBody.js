var template = document.createElement('template')
template.innerHTML= `
    <link rel="stylesheet" href="styles/all.css">
    <div class="app-body">
        <slot />
    </div>
`

class AppBody extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('app-body', AppBody)