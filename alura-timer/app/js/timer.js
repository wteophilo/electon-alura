const moment = require('moment');

let segundos;
let idTimer;

module.exports = {
    iniciar(elemento){
        let tempo = moment.duration(elemento.textContent);
        segundos= tempo.asSeconds();
        clearInterval(idTimer);
        idTimer = setInterval(()=>{
            segundos++;
            elemento.textContent = this.segundosParaTempo(segundos);
        },1000);       
    },
    
    
    parar(){
        clearInterval(idTimer);
    },
    
    
    segundosParaTempo(segundos){
         return moment().startOf('day').seconds(segundos).format("HH:mm:ss");
    }
}