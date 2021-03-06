

var template = document.createElement('template')
template.innerHTML= `
    <link rel="stylesheet" href="styles/main.css" />
    <header class="header">
        <a href="index.html" class="header_logo" tabindex="-1">
            <img class="header_logo_img" height="100" width="500" src="images/logo/white.png" alt="logo" />
            <span class="header_logo_text">
                Cottbus Delivery
            </span>
            
        </a>
        <nav class="header_links">
            <a tabindex="0" class="header_link home" href="index.html">Home</a>
            <a class="header_link about" href="about.html">About </a>
            <a class="header_link discounts" href="discounts.html">Discounts </a>
            <a class="header_link products" href="products.html">Products </a>
            <a class="header_link delivery" href="delivery.html">Delivery </a>
            <a class="header_link recipes" href="recipes.html">Recipes </a>
            <a class="header_link contact" href="contact.html">Contact us</a>
        </nav>

        <div id="mobile-nav-btn" class="header_btn">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </header>

    <div id="myNav" class="overlay">

        <a href="index.html" id="closebtn">&times;</a>
        <nav class="overlay-content">
            <a class="header_link home" href="index.html">Home</a>
            <a class="header_link about" href="about.html">About </a>
            <a class="header_link discounts" href="discounts.html">Discounts </a>
            <a class="header_link products" href="products.html">Products </a>
            <a class="header_link delivery" href="delivery.html">Delivery </a>
            <a class="header_link recipes" href="recipes.html">Recipes </a>
            <a class="header_link contact" href="contact.html">Contact us</a>
        </nav>

    </div>
`

class AppHeader extends HTMLElement {
    constructor(){
        super();
        
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.active();
    }

    active(){
        let link =  window.location.href;
        link = link.split("/")
        let navClass = link[link.length - 1].split(".")[0];
        if(!navClass.includes('000')){
            navClass = navClass === "index" ? ".home" : "." + navClass;
            this.shadowRoot.querySelectorAll(navClass).forEach((el)=>{
                el.classList.add("header_link--active");
            })
        }
        
    }

    noScroll() {
        window.scrollTo(0, 0);
      }

    openNav() {
        this.shadowRoot.getElementById("myNav").style.width = "100%";
        window.addEventListener('scroll', this.noScroll);
    }

    closeNav() {
        this.shadowRoot.getElementById("myNav").style.width = "0%";
        window.removeEventListener('scroll', this.noScroll);
    }
    connectedCallback(){
        this.shadowRoot.getElementById("mobile-nav-btn").addEventListener('click', () => this.openNav())
        this.shadowRoot.getElementById("closebtn").addEventListener('click', () => this.closeNav())
    }
    disconnectedCallback(){
        this.shadowRoot.querySelector('#mobile-nav-btn').removeEventListener()
        this.shadowRoot.querySelector('#closebtn').removeEventListener()
    }
}

window.customElements.define('app-header', AppHeader)