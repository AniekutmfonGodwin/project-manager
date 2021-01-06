const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
const {ipcMain} = require('electron')

ipcMain.on('asynchronous-message', (event, arg) => {
  console.log("heyyyy",arg) // prints "heyyyy ping"
})





let mainWindow;
function createWindow() {
        mainWindow = new BrowserWindow({ 
            width: 900, 
            height: 680,
            webPreferences: {
                contextIsolation: false,
                nodeIntegration:true
            }
        });
        mainWindow.loadURL(
        isDev? "http://localhost:3000": `file://${path.join(__dirname, "../build/index.html")}`
        );

        mainWindow.on("closed", () => (mainWindow = null));
        
    }

app.on("ready",()=>{
    createWindow()
    ipcMain.on('create-project',(e,arg)=>createWindow())

});


app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
    app.quit();
    }
});



app.on("activate", () => {
    if (mainWindow === null) {
    createWindow();
    }
});