document.querySelector("header").innerHTML = `
<div class="logo">
            <img src="img/logo_esmalte.png" alt="Logo do site">
        </div>

        <nav class="menu-container">
            <div class="menu-subcontainer">
                <ul class="menu-item-container">
                    <a href="#">Marcas</a>
                    <ul class="menu-subitem-container">
                        <li><a href="">Risqué</a></li>
                        <li><a href="">Colorama</a></li>
                        <li><a href="">Impala</a></li>
                    </ul>
                </ul>
                <ul class="menu-item-container">
                    <a href="#">Destaques</a>
                    <ul class="menu-subitem-container">
                        <li><a href="">Risqué</a></li>
                        <li><a href="">Colorama</a></li>
                        <li><a href="">Impala</a></li>
                    </ul>
                </ul>

                <input type="search" placeholder="Buscar" name="a" class="buscar" />

                <nav>
                    <div class="fav-car-user">
                        <img src="img/coracao.png" alt="">
                        <img src="img/icons8-sacola-de-compras-60.png" alt="">
                        <img src="img/icons8-usuário-64.png" alt="">
                    </div>
                </nav>

            </div>

        </nav>
`;

const style = document.createElement("style");
    style.innerHTML = `
    * {
    margin: 0;
    padding: 0;
    font-family: afacad;
}

header {
    background-color: #F8BBD0;
    display: flex;
    justify-content: space-between;
}

.logo img {
    width: 291px;
    height: 127px;
}

header nav ul {
    list-style-type: none;
    /* Remove os marcadores de lista */
    padding-left: 0;
}

.menu-container {
    background-color: #F8BBD0;
    justify-content: center;
    align-items: center;
    display: flex;
}

.menu-subcontainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.menu-item-container {
    margin-left: 20px;
    padding: 10px;
    font-weight: bold;
    font-size: 30px;
    position: relative;
    align-items: end;
}

.menu-item-container a {
    text-decoration: none;
    color: white;
}

.menu-item-container:hover {
    background-color: #A8A8E9;
    transition: 500ms;
    box-shadow: 0 0 10px #ef8bae;
}

.menu-subitem-container {
    display: none;
    font-size: 20px;
    position: absolute;
    background-color: #A8A8E9;
    left: 0px;
    top: 55px;
    width: 150px;
}

.menu-item-container:hover .menu-subitem-container {
    display: block;
}

.menu-subitem-container li {
    padding: 10px;
}

.menu-subitem-container div:hover {
    background-color: #9a9;
}

.buscar {
    width: 300px;
    height: 40px;
    margin: auto;
    margin-right: 20px;
    border: none;
    border-radius: 20px;
}

input::placeholder {
    padding-left: 10px;
    font-size: 20px;
    font-weight: 100;
}

.fav-car-user {
    display: flex;
    margin-right: 10px;
}

.fav-car-user img {
    justify-content: space-between;
    cursor: pointer;
    margin: 5px;
}
    
`;

document.head.appendChild(style);


