var template = document.createElement('template')
template.innerHTML= `
    <style>
        footer{
            padding: 3rem 2rem;
            font-weight:300;
            background-color: #f1f1f1;
        }
        .footer_info{
            display: flex;
            align-items: center;
        }
        .footer_info span{
            margin-left: 1rem;
            font-weight: 600;
        }
        .footer_img{
            height: 3rem;
            border-radius: 0.3rem;
        }
        .footer_social{
            display: flex;
            height: 2rem;
            margin-top: 1rem;
        }
        .footer_social img{
            cursor: pointer;
            border-radius: 0.3rem;
            margin-right: 0.5rem;
        }
        .footer_top_section{
            display: flex;
            justify-content: space-between;
        }
        .footer_work{
            display: flex;
            flex-direction: column; 
        }
        .footer_work a{
            text-decoration: none;
        }
        .footer_info_container{
            
        }
        .footer_bottom{
            margin-top:2rem;
        }
        .footer_bottom a{
            margin-right:0.5rem;
        }
        @media screen and (max-width: 450px) {
            .footer_top_section{
                flex-direction: column;
            }
            .footer_work{
                margin-top:1rem;
            }
        }
        
    </style>
    <footer>
       <div class="footer_top_section">
            <div class="footer_info_container">
                <div class="footer_info">
                    <img id="footer_logo" class="footer_img" src="images/logo/yellow.jpeg" />
                    <span>Cottbus Delivery</span>
                </div>
                <div class="footer_social">
                    <img id="insta" class="class="footer_social_insta" src="images/instagram.svg" />
                    <img id="face" class="class="footer_social_face" src="images/facebook.svg" />
                </div>
            </div>
            <div class="footer_work">
                <span>Do you want to work with us ? Join our team!</span>
                <a href="mailto:">career@cottbus.delivery</a>
            </div>
       </div>
       <div class="footer_bottom">
            <span>2021 Cottbus Delivery GmbH. All rights reserved <a href="#">Terms and Conditions</a><a href="credits.html"> Credits</a></span>
       </div> 
    </footer>
`

class AppFooter extends HTMLElement {
    constructor(){
        super();
        this.showInfo=true;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // this.setImages();
    }

    // setImages(){
    //     const link =  window.location.href;
    //     if(link.includes("/products/")){
    //         const images = ["footer_logo","insta","face"]
    //         images.map((image) => {
    //             const imagePath = this.shadowRoot.getElementById(image).src;
    //             this.shadowRoot.getElementById(image).src = imagePath.replace("/products/", "/");
    //         })
    //     }
    // }
}

window.customElements.define('app-footer', AppFooter)