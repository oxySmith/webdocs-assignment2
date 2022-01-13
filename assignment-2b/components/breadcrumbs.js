var template = document.createElement('template')
template.innerHTML= `
    <link rel="stylesheet" href="styles/all.css">
    <nav aria-label="Breadcrumb" class="breadcrumb">
        <ul class="breadcrumb_list">
            <li class="breadcrumb_list_item"><a href="index.html">Home</a></li>
            <li class="breadcrumb_list_item"><a href="products.html">Products</a></li>
            <li class="breadcrumb_list_item" id="product"></li>
        </ul>
    </nav>
    
`

class Breadcrumbs extends HTMLElement {
    constructor(){
        super();
        this.showInfo=true;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.getElementById('product').innerText = this.getAttribute('product-name');
    }

}

window.customElements.define('app-crumbs', Breadcrumbs)