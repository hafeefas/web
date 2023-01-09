//Loads Header into html file using <main-header></main-header>
class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Justworks Market</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Technology</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                <a href="http://127.0.0.1:5000/post"><button type="button" class="btn btn-primary">Post Product</button></a>
                </li>
                </ul>
            </div>
        </nav>
        `;
    }
}
customElements.define('main-header', Header);

//Loads Footer into html file using <main-footer></main-footer>
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `    
        <footer>            
            {*footer code goes here *}         
        </footer>     
        `;
    }
}
customElements.define('main-footer', Footer);