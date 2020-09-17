const {remote} = require('electron');

document.getElementById('win-close').addEventListener('click', closeWindow);
document.getElementById('win-minimize').addEventListener('click', minimizeWindow);
document.getElementById('win-maximize').addEventListener('click', maximizeWindow);


function closeWindow(){
	var window = remote.getCurrentWindow();
	window.close();
}

function minimizeWindow(){
	var window = remote.getCurrentWindow();
	window.minimize();
}

function maximizeWindow(){
	var window = remote.getCurrentWindow();
	window.isMaximized() ? window.unmaximize() : window.maximize();
}