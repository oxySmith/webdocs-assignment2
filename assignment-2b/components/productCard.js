var template = document.createElement('template')
template.innerHTML= `
    <style>
        .card{
            position:relative;
            width: 14.5rem;
            margin: 0.5rem;
            padding: 0.5rem;
            background-color: #f1f1f1;
            border-radius: 0.2rem;
            cursor: pointer;
        }
        .card img{
            width: 10rem;
            padding: 1rem 2.3rem;
        }
        .card .container{
            display: flex;
            justify-content: space-between;
            padding: 0.3rem;
        }
        .card_discount{
            position: absolute;
            top: 13%;
            right: 11%;
            padding: 0.5rem;
            border-radius: 1.2rem;
            font-weight: 900;
            background-color: yellow;
            border-style: solid;
            border-color: #000;
        }
        .card_price{
            font-weight: 600;
        }
        .card_name{
            font-weight: 600;
            text-decoration: none;
        }
    </style>
    <div class="card">
        <div class="card_discount"></div>
        <img class="card_image" src="" alt="Food image">
        <div class="container">
            <a class="card_name" href="#"></a>
            <span class="card_price">&#8364;1,50</span>
        </div>
    </div>
`

class ProductCard extends HTMLElement {
    constructor(){
        super();
        this.showInfo=true;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('.card_name').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('.card_price').innerHTML = "&#8364;" + this.getAttribute('price') + "/" + this.getAttribute('unit');
        this.shadowRoot.querySelector('.card_image').src =`images/${this.getAttribute('name').toLowerCase()}.jpg`;

        this.shadowRoot.querySelector('.card_name').href = this.getAttribute('link') ? this.getAttribute('link') : "#";
        
        if(this.getAttribute('discount')){
            this.shadowRoot.querySelector('.card_discount').innerText = this.getAttribute('discount');
        }else{
            this.shadowRoot.querySelector('.card_discount').style.display= 'none';
        }
        
    }

    onCardClick(){
        window.location.href = this.getAttribute('link') ? this.getAttribute('link') : "#";
    }

    connectedCallback(){
        this.shadowRoot.querySelectorAll(".card").forEach((el)=>{
            el.addEventListener('click', () => this.onCardClick())
        })
    }
    disconnectedCallback(){
        this.shadowRoot.querySelectorAll(".card").forEach((el)=>{
            el.removeEventListener()
        })
    }
}

window.customElements.define('product-card', ProductCard)