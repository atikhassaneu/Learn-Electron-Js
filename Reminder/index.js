const {app,BrowserWindow} = require('electron');
// const url = require('url');
let mainWindow = null;

app.on('ready',()=>{
	mainWindow = new BrowserWindow({
		webPreferences: {
	    	nodeIntegration: true,
	    	enableRemoteModule:true
	  	},
	  	// resizable: false,
		width:200,
		height:200,
		frame:false
	})
	mainWindow.setAlwaysOnTop(true, 'screen');
	mainWindow.loadFile('index.html');
});