var template = document.createElement('template')
template.innerHTML= `
    <link rel="stylesheet" href="styles/main.css">
    <section class="product_section">
            <div class="product_detail">
            <img id="image" src="" />
            <div class="info">
                <h2 id="name"></h2>
                <h3 id="price"></h3>
                <div>Product description:<span id="description"></span></div>
                <div>Origin:<span id="origin"></p></div>
                <div>Brand:<span id="brand"></p></div>
                <div>Stock:<span id="stock"></span></div>
                <div></div><a class="back" href="products.html">< back to shop</a></div>
            </div>
        </div>
    </section>
    
`
var products=[
    {
        id:0001,
        name:"Avocado",
        price:1.5,
        unit:"pc",
        description:"Organic avocado hass. Ripe.",
        origin:"Peru",
        brand:"Sunny Farm",
        stock:60,
        src: "avocado.jpg"
    },
    {
        id:0002,
        name:"Salmon",
        price:16.5,
        unit:"kg",
        description:"Raw  salmon. 69% water, 20% protein, 6% fat.",
        origin:"Brandenburg",
        brand:"Sea Farm",
        stock:15,
        src: "salmon.jpg"
    },
    {
        id:0003,
        name:"Organic Milk",
        price:1.99,
        unit:"L",
        description:"3.8% fat",
        origin:"Cottbus",
        brand:"Bauers",
        stock:50,
        src: "milk.jpg"
    }, 
    {
        id:0004,
        name:"Apple",
        price:1.2,
        unit:"kg",
        description:"Pink lady",
        origin:"Cottbus",
        brand:"Bauers",
        stock:105,
        src: "apple.jpg"
    },       
]

class ProductDetail extends HTMLElement {
    
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        
        this.loadPage()
    }

    loadPage(){
        //get page id   
        let link =  window.location.href;
        //find the id in lit 
        link = link.split('/');
        let page = link[link.length - 1].split(".")[0];
        const product = products.find(p => p.id == page);
        
        Object.keys(product).map((key) => {
            if(this.shadowRoot.getElementById(key)){
                this.shadowRoot.getElementById(key).innerText = product[key]
                if(key == "price"){
                    this.shadowRoot.getElementById(key).innerHTML = "&#8364;" + product["price"] + "/" + product["unit"]
                }
                if(key == "name"){
                    document.title = product["name"]
                }
            }
            if(key == "src"){
                this.shadowRoot.getElementById("image").src = "images/" + product["src"]
            }
            
        })


    }
    
}

window.customElements.define('product-detail', ProductDetail)