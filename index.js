// Extrael variables de los colores de colores

let btn_naranja = document.querySelector(".naranja");
let btn_verde = document.querySelector(".green");
let btn_piel = document.querySelector(".piel");
let btn_black = document.querySelector(".black");

let circulos = document.getElementById("efecto-circulo");
let img = document.getElementById("img");

let btn_browser = document.getElementById("btn-browser");
let btn_mas = document.getElementById("btn-mas");

let btn_page2 =document.getElementById("btn-browser");

// Activar eventos 

btn_naranja.addEventListener('click', () =>{
    console.log("cambiaste el tema a naranja")
    circulos.style.border= "60px solid #6E4F05";
    img.src = "/componentes/img/mueble-naranja.png";
    btn_mas.style.background = "#6E4F05";
})
btn_verde.addEventListener('click', () =>{
    console.log("cambiaste el tema a verde")
    circulos.style.border= "60px solid #36541E";
    img.src = "/componentes/img/mueble-verde.png";
    
    btn_mas.style.background = "#36541E";
})
btn_piel.addEventListener('click', () =>{
    console.log("cambiaste el tema a piel")
    circulos.style.border= "60px solid #A3A180";
    img.src = "/componentes/img/mueble-piel.png";
    
    btn_mas.style.background = "#A3A180";
})
btn_black.addEventListener('click', () =>{
    console.log("cambiaste el tema a negro")
    circulos.style.border= "60px solid #3A3C42";
    img.src = "/componentes/img/mueble-negro.png";
    
    btn_mas.style.background = "#3A3C42";
})

btn_page2.addEventListener('click', () =>{
    document.getElementById("page2").style.display = "block";
    document.getElementById("section-left").style.display = "none";
    circulos.style.left= "-550px";

});