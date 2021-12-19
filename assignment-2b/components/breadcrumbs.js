var template = document.createElement('template')
template.innerHTML= `
    <style>
    /* Style the list */
    ul.breadcrumb {
      padding: 10px 16px;
      list-style: none;
      background-color: #eee;
    }
    
    /* Display list items side by side */
    ul.breadcrumb li {
      display: inline;
      font-size: 18px;
    }
    
    /* Add a slash symbol (/) before/behind each list item */
    ul.breadcrumb li+li:before {
      padding: 8px;
      color: black;
      content: "/\00a0";
    }
    
    /* Add a color to all links inside the list */
    ul.breadcrumb li a {
      color: #0275d8;
      text-decoration: none;
    }
    
    /* Add a color on mouse-over */
    ul.breadcrumb li a:hover {
      color: #01447e;
      text-decoration: underline;
    }
    </style>
    <ul class="breadcrumb">
        <li><a href="index.html">Home</a></li>
        <li><a href="products.html">Products</a></li>
        <li id="product"></li>
    </ul>
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

window.customElements.define('breadcrumbs', Breadcrumbs)