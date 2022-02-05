var template = document.createElement('template')
template.innerHTML= `
    <link rel="stylesheet" href="styles/main.css" />
    <footer>
       <div class="footer_top_section">
            <div class="footer_info_container">
                <div class="footer_info">
                    <img id="footer_logo" class="footer_img" height="32" width="45" alt="logo" src="images/logo/yellow.jpeg" />
                    <span>Cottbus Delivery</span>
                </div>
                <div class="footer_social">
                    <img id="insta" class="class="footer_social_insta" height="25" width="25" alt="insta" src="images/instagram.svg" />
                    <img id="face" class="class="footer_social_face" height="25" width="25" alt="facebook" src="images/facebook.svg" />
                </div>
            </div>
            <div class="footer_work">
                <span>Do you want to work with us ? Join our team!</span>
                <a tabindex="-1" href="mailto:career@cottbus.delivery">career@cottbus.delivery</a>
            </div>
       </div>
       <div class="footer_bottom">
            <span>2021 Cottbus Delivery GmbH. All rights reserved <a href="terms.html">Terms and Conditions</a></span>
       </div> 
    </footer>
`

class AppFooter extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('app-footer', AppFooter)