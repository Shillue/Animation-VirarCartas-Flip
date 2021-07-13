//Carregando o som
const somFlip = new Audio();
somFlip.src = "../recursos/Card-Flip-Sound-Effect.mp3"

//Efeito de virar
const cartas = document.querySelector("#cartas")
   cartas.addEventListener("click",(e) =>{
        cartas.classList.toggle("flip")
        somFlip.play();
});