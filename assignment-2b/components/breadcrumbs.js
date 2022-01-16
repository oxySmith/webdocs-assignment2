var template = document.createElement('template')
template.innerHTML= `
    <link rel="stylesheet" href="styles/main.css">
    <nav aria-label="Breadcrumb" class="breadcrumb">
        <ul class="breadcrumb_list">
            <li class="breadcrumb_list_item"><a id="breadcrumb-1" href="index.html">Home</a></li>
            <li class="breadcrumb_list_item"><a id="breadcrumb-2" href="products.html">Products</a></li>
            <li class="breadcrumb_list_item" id="breadcrumb-3"></li>
        </ul>
    </nav>
    
`

const routes = [
    {
        name: "Home",
        route: "index.html"
    },
    {
        name: "Products",
        route: "products.html"
    },
    {
        name: "Contact Us",
        route: "contact.html"
    },

]

class Breadcrumbs extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        

        this.onMount();
    }

    onMount(){
        switch (this.getAttribute('page-name')) {
            case "Write Us":
                this.shadowRoot.getElementById('breadcrumb-1').innerText = "Home"
                this.shadowRoot.getElementById('breadcrumb-1').href = "index.html"

                this.shadowRoot.getElementById('breadcrumb-2').innerText = "Contact Us"
                this.shadowRoot.getElementById('breadcrumb-2').href = "contact.html"

                this.shadowRoot.getElementById('breadcrumb-3').innerText = this.getAttribute('page-name');
                break;
            default:
                this.shadowRoot.getElementById('breadcrumb-1').innerText = "Home"
                this.shadowRoot.getElementById('breadcrumb-1').href = "index.html"

                this.shadowRoot.getElementById('breadcrumb-2').innerText = "Products"
                this.shadowRoot.getElementById('breadcrumb-2').href = "products.html"

                this.shadowRoot.getElementById('breadcrumb-3').innerText = this.getAttribute('page-name');
                break;
        }
    }

}

window.customElements.define('app-crumbs', Breadcrumbs)