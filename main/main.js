import { app, BrowserWindow, ipcMain } from 'electron';
import isDev from 'electron-is-dev';
import PowerShell from 'powershell';
//import iconv from 'iconv-lite';

import netadapter from './ps/netadapter';

function createWindow () {
    console.log(__dirname + '\..\sth.ico');
    // Create the browser window.
    const win = new BrowserWindow({

        icon: __dirname + '\..\sth.ico'
    });
    // and load the index.html of the app.
    win.loadFile('./dist/index.html');
}

app.on('ready', createWindow);

ipcMain.on('networkstatus', (event, arg) => {

    let ps = new PowerShell(netadapter);
    if (isDev) {
        console.log("ipcMain networkstatus channel");
    }
    ps.on("output", (data) => {
        event.sender.send("networkstatus-reply", data);
    });
    
});

