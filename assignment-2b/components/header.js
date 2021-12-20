

var template = document.createElement('template')
template.innerHTML= `
    <style>
    header{
        background-color: #f38d3f;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0rem 1rem;

    }
    header .logo{
        display: flex;
        align-items: center;
        font-size: 2rem;
        color: #000;
        font-weight: 600;
        text-decoration: none;
    }

    .header_logo{
        height: 7rem;
        width: 7rem;
    }
    .header_links{
        flex-basis: 57%;
        display: flex;
        justify-content: space-evenly;
    }
    .header_link{
        color: #fff;
        text-decoration: none;
        font-weight: 600;
    }
    .header_link.active{
        text-decoration: underline;
        color: #ffffe0;
    }
    .header_link:hover{
        color: #ffffe0
    }
    .header_link span{
        color: #000;
    
    }
    .header_btn{
        display:none;
    }
    .bar {
        width: 35px;
        height: 3px;
        background-color: #f1f1f1;
        margin: 6px 0;
    }
      
    @media screen and (max-width: 892px) {
        .header_links{
            display:none;
        }
        .header_btn{
            display:block;
        }
    }
    @media screen and (max-width: 600px) {
        .logo_text{
            display:none;
        }
        
    }
   
    .overlay {
        height: 100%;
        width: 0;
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        background-color: rgb(0,0,0); /* Black fallback color */
        background-color: #f38d3fd9; /* Black w/opacity */
        overflow-x: hidden; /* Disable horizontal scroll */
        transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
    }

    /* Position the content inside the overlay */
    .overlay-content {
        position: relative;
        top: 25%; /* 25% from the top */
        width: 100%; /* 100% width */
        text-align: center; /* Centered text/links */
    }

    /* The navigation links inside the overlay */
    .overlay a {
        padding: 8px;
        text-decoration: none;
        font-size: 36px;
        color: #ffffff;
        display: block; /* Display block instead of inline */
        transition: 0.3s; /* Transition effects on hover (color) */
    }

    /* When you mouse over the navigation links, change their color */
    .overlay a:hover, .overlay a:focus {
        color: #f1f1f1;
    }

    /* Position the close button (top right corner) */
    .overlay .closebtn {
        position: absolute;
        top: 20px;
        right: 45px;
        font-size: 60px;
    }

    /* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
    @media screen and (max-height: 450px) {
    .overlay a {font-size: 20px}
    .overlay .closebtn {
        font-size: 40px;
        top: 15px;
        right: 35px;
    }
    }
    </style>
    <header class="header">
        <a href="#default" class="logo">
            <img class="header_logo" src="images/logo/white.png" />
            <span class="logo_text">
                Cottbus Delivery
            </span>
            
        </a>
        <div class="header_links">
            <a class="header_link" id="home" href="index.html">Home</a>
            <a class="header_link" id="about"  href="about.html">About </a>
            <a class="header_link" id="discounts" href="discounts.html">Discounts </a>
            <a class="header_link" id="products" href="products.html">Products </a>
            <a class="header_link" id="delivery" href="delivery.html">Delivery </a>
            <a class="header_link" id="recipes" href="receipes.html">Recipes </a>
            <a class="header_link" id="contact" href="contact.html">Contact us</a>
        </div>

        <div id="mobile-nav-btn" class="header_btn">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </header>

    <div id="myNav" class="overlay">

        <a href="javascript:void(0)" id="closebtn" onclick="closeNav()">&times;</a>
        <div class="overlay-content">
            <a class="header_link" id="home" href="index.html">Home</a>
            <a class="header_link" id="about"  href="about.html">About </a>
            <a class="header_link" id="discounts" href="discounts.html">Discounts </a>
            <a class="header_link" id="products" href="products.html">Products </a>
            <a class="header_link" id="delivery" href="delivery.html">Delivery </a>
            <a class="header_link" id="recipes" href="receipes.html">Recipes </a>
            <a class="header_link" id="contact" href="contact.html">Contact us</a>
        </div>

    </div>
`

class AppHeader extends HTMLElement {
    constructor(){
        super();
        this.showInfo=true;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.active();
        // this.setImages();
    }

    active(){
        const link =  window.location.href;

        if(link.includes("index.html")){
            this.shadowRoot.getElementById("home").classList.add("active");
        }
        if(link.includes("about.html")){
            this.shadowRoot.getElementById("about").classList.add("active");
        }
        if(link.includes("discounts.html")){
            this.shadowRoot.getElementById("discounts").classList.add("active");
        }
        if(link.includes("products.html")){
            this.shadowRoot.getElementById("products").classList.add("active");
        }
        if(link.includes("delivery.html")){
            this.shadowRoot.getElementById("delivery").classList.add("active");
        }
        if(link.includes("recipes.html")){
            this.shadowRoot.getElementById("recipes").classList.add("active");
        }
        if(link.includes("contact.html")){
            this.shadowRoot.getElementById("contact").classList.add("active");
        }
    }

    // setImages(){
    //     const link =  window.location.href;
    //     if(link.includes("/products/")){
    //         console.log()
    //         const imagePath = this.shadowRoot.querySelector('.header_logo').src;
            
    //         this.shadowRoot.querySelector('.header_logo').src = imagePath.replace("/products/", "/");
    //     }
    // }
    toggleInfo(){
        this.showInfo = !this.showInfo;

        const info = this.shadowRoot.querySelector('.info');
        const toggleBtn = this.shadowRoot.querySelector('#toggle-info')

        if(this.showInfo){
            info.style.display = 'block';
            toggleBtn.innerText = 'Hide Info';
        }else{
            info.style.display = 'none';
            toggleBtn.innerText = 'Show Info';
        }
    }
    openNav() {
        this.shadowRoot.getElementById("myNav").style.width = "100%";
    }

    closeNav() {
        this.shadowRoot.getElementById("myNav").style.width = "0%";
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