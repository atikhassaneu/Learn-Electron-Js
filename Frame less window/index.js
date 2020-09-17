const {app, BrowserWindow} = require('electron');
const url = require('url');
let win = null;


app.on('ready', _=>{
	win = new BrowserWindow({
		webPreferences: {
	    	nodeIntegration: true,
	    	enableRemoteModule:true
	  	},
		width:800, 
		height:600,
		frame: false
	});
	win.loadURL(url.format({
		pathname : "index.html",
		slashes : true
	}));
})