var template = document.createElement('template')
template.innerHTML= `
    <style>
        .app-body{
            padding: 3rem 2rem;
        }
    </style>
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