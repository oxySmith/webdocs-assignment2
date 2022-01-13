var template = document.createElement('template')
template.innerHTML= `
    <link rel="stylesheet" href="styles/main.css">
    <div class="card">
        <div class="card_discount"></div>
        <img class="card_image" width="250" height="150" src="" alt="Food image"/>
        <div class="card_container">
            <a class="card_name" href="#"></a>
            <span class="card_price">&#8364;1,50</span>
        </div>
    </div>
`

class ProductCard extends HTMLElement {
    constructor(){
        super();
        
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