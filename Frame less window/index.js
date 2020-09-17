const {app, BrowserWindow} = require('electron');
const url = require('url');
let win = null;


app.on('ready', _=>{
	win = new BrowserWindow();
	win.loadURL(url.format({
		pathname : "index.html",
		slashes : true
	}));
})