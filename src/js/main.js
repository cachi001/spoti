const play = document.getElementById("botonPlay");
const pausar = document.getElementById("botonPausar");
const audio = document.getElementById("audioCancion");
const volumenSlider = document.getElementById("volumen");
const duracionSlider = document.getElementById("duracion")
const letraCancion = document.getElementById("letra")



audio.volume = volumenSlider.value / 100;

audio.addEventListener("loadeddata",function(){
    let duracionMaxSlider = audio.duration;
    console.log(duracionMaxSlider)
    duracionSlider.max = duracionMaxSlider;
})
audio.addEventListener("timeupdate",function(){
    let tiempoActual = audio.currentTime;
    duracionSlider.value = tiempoActual
    console.log(tiempoActual)
})
duracionSlider.addEventListener("input",function(){
    audio.currentTime = duracionSlider.value
    console.log(audio.currentTime)
})
play.addEventListener("click",function(){
    audio.play();
});
pausar.addEventListener("click",function(){
    audio.pause();
});
volumenSlider.addEventListener("input",function(){
    audio.volume = volumenSlider.value / 100;
})
