// Extrael variables de los colores de colores

let btn_naranja = document.querySelector(".naranja");
let btn_verde = document.querySelector(".green");
let btn_piel = document.querySelector(".piel");
let btn_black = document.querySelector(".black");

let circulos = document.getElementById("efecto-circulo");
let img = document.getElementById("img");
let btn_browser = document.getElementById("btn-browser");
let btn_mas = document.getElementById("btn-mas");

let nam = document.querySelector("#info a");

// Activar eventos 

btn_naranja.addEventListener('click', () =>{
    circulos.style.border= "60px solid #6E4F05";
    img.src = "componentes/img/mueble-naranja.png";
    btn_mas.style.background = "#6E4F05";
    nam.textContent = "Orange Furniture";
    
})
btn_verde.addEventListener('click', () =>{
    circulos.style.border= "60px solid #36541E";
    img.src = "componentes/img/mueble-verde.png";
    nam.textContent = "Green Furniture";
    btn_mas.style.background = "#36541E";
})
btn_piel.addEventListener('click', () =>{
    circulos.style.border= "60px solid #A3A180";
    img.src = "componentes/img/mueble-piel.png";
    nam.textContent = "Leather Furniture";
    btn_mas.style.background = "#A3A180";
})
btn_black.addEventListener('click', () =>{
    circulos.style.border= "60px solid #3A3C42";
    img.src = "componentes/img/mueble-negro.png";
    nam.textContent = "Black Furniture";
    btn_mas.style.background = "#3A3C42";
})