const {app, BrowserWindow} = require('electron');
const url = require('url')



app.on('ready', function () {

	let win = new BrowserWindow({
	  webPreferences: {
	    nodeIntegration: true
	  }
	});
	win.loadURL(url.format({
		pathname:'index.html',
		slashes:true
	}))
});