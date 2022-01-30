var template = document.createElement('template')
template.innerHTML= `
    <link rel="stylesheet" href="styles/main.css">
    <nav aria-label="Breadcrumb" class="breadcrumb">
        <ul class="breadcrumb_list">
            <li class="breadcrumb_list_item"><a id="breadcrumb-1" href="#"></a></li>
            <li class="breadcrumb_list_item" id="breadcrumb-2"></li>
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
    {
        name: "Write Us",
        route: "writeus.html"
    },
    {
        name: "Terms and Condtions",
        route: "terms.html"
    },
    {
        name: "Delivery",
        route: "delivery.html"
    },
    {
        name: "Recipes",
        route: "recipes.html"
    },
    {
        name: "About Us",
        route: "about.html"
    },
    {
        name: "About Us",
        route: "about.html"
    },
    {
        name: "Avocado",
        route: "avocado.html"
    },
    {
        name: "Salmon",
        route: "salmon.html"
    },
    {
        name: "Organic Milk",
        route: "milk.html"
    },
    {
        name: "Apple",
        route: "apple.html"
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
        console.log(document.referrer, document)
        console.log()
        const referrerPage = this.getRoute(document.referrer);
        const currentPage = this.getRoute(window.location.href);
        if(referrerPage &&  currentPage.name !== referrerPage.name){
            this.shadowRoot.getElementById('breadcrumb-1').innerText = referrerPage.name
            this.shadowRoot.getElementById('breadcrumb-1').href = referrerPage.route

            this.shadowRoot.getElementById('breadcrumb-2').innerText = currentPage.name
            // this.shadowRoot.getElementById('breadcrumb-2').href = "contact.html"
        }else{
            this.shadowRoot.querySelector('.breadcrumb_list').style.display= 'none';
        }
    }

    getRoute(link){
        return routes.find((route) => link.includes(route.route))
    }

}

window.customElements.define('app-crumbs', Breadcrumbs)