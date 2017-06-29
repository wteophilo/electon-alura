const {app,BrowserWindow} = require('electron');

app.on('ready', ()=>{
   console.log("Aplicação iniciada");
    let mainWindow = new BrowserWindow({
        width:600,
        height: 400
    });
    
    //mainWindow.loadURL('https://www.alura.com.br');
    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});

app.on('window-all-closed',()=>{
   app.quit(); 
});