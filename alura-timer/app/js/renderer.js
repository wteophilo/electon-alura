const { ipcRenderer } = require('electron');
const timer  = require('./timer');

let $ = document.querySelector.bind(document);
let linkSobre = $('#link-sobre');
let botaoPlay = $('.botao-play');
let labelTempo = $('.tempo')

linkSobre.addEventListener('click' , function(){
    ipcRenderer.send('abrir-janela-sobre');
});


let imgs = ['img/play-button.svg', 'img/stop-button.svg'];
let play =false;
botaoPlay.addEventListener('click',function(){
    if (play){
        timer.parar();
        play = false;
    }else{
        timer.iniciar(labelTempo);
        play = true;
    }
    imgs.reverse();
    botaoPlay.src = imgs[0];
});
