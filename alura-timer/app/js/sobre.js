//Ipc para comunição main.js
//Shell do SO
const { ipcRenderer,shell } = require('electron');
//Biblioteca para leitura de propriedades da máquina 
const {process} = require('process');

let $ = document.querySelector.bind(document);
let linkFechar =$('#link-fechar');
let linkLinkedin = $('#link-linkedin');
let versaoElecton = $('#versao-eletron');

window.onload = function(){
    versaoElecton.textContent = process.versions.electron;
}

linkFechar.addEventListener('click',function(){
    ipcRenderer.send('fechar-janela-sobre');
});

linkLinkedin.addEventListener('click',function(){
   shell.openExternal('https://www.linkedin.com/in/wteophilo');
});
