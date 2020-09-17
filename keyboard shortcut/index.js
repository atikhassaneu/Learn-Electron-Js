const {app, BrowserWindow, globalShortcut} = require('electron');
const url = require('url');
let mainWindow = null;

app.on('ready', () =>{
	mainWindow = new BrowserWindow({
		webPreference:{
			nodeIntegration : true,
			enableRemoteModule : true
		},
		width : 600,
		height : 300
	});


	mainWindow.loadURL(url.format({
		pathname : 'index.html',
		slashes : true
	}));

	let reg = globalShortcut.register('CommandOrControl+t', ()=>{
		mainWindow.close();
	});

});











