var template = document.createElement('template')
template.innerHTML= `
    <style>
        .breadcrumb ul {
            display: flex;
            list-style: none;
            margin-block-start: 0;
            margin-block-end: 0;
            padding-inline-start: 0;
            margin-bottom: 1rem;
        }
            
        .breadcrumb li::before {
            content: ">";
            margin-right: 0.2rem;
            margin-left: 0.2rem;
        }
            
        .breadcrumb li:first-child::before {
            content: "";
        }

        a{
            text-decoration: none;
            font-weight: 600;
        }
    </style>
    <nav aria-label="Breadcrumb" class="breadcrumb">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="products.html">Products</a></li>
            <li id="product"></li>
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