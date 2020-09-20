const {remote} = require('electron');
let Cwindow = remote.getCurrentWindow();


let currentTime = Date.now();

let interval = (1500 * 1000); //convert millis
let nextTimeOut = currentTime + interval; 
let restInterval = -300;

function couter (diff){

    let m = Math.floor(diff/60);
    let s = diff % 60

    document.getElementById('couter').innerHTML = m + ":" + s;

}


let timer = setInterval(()=>{
    let range = (2 * Math.PI * 70);
    let diff = Math.ceil((nextTimeOut - Date.now()) / 1000)
    

    if(diff < 0 && diff >= (restInterval)){
        
        if(Cwindow.isMinimized()){
            Cwindow.show();  
        }

        if(!Cwindow.isMaximized()){
            Cwindow.maximize();
        }

        let t_diff = Math.abs(diff);
        let nSlot = Math.abs(restInterval);
        let offset =  range - (range * t_diff )/nSlot;
        document.querySelector('#percent > svg > circle:nth-child(2)').style.stroke =  '#f4441f';
        document.querySelector('#percent > svg > circle:nth-child(2)').style.strokeDashoffset = offset;
        couter(t_diff);


    }else if(diff < (restInterval)){
        location.reload();

    }else{

        if(Cwindow.isMaximized()){
            Cwindow.unmaximize();
        }        

        let nSlot = interval / 1000;
        let offset =  range - (range * diff )/nSlot;
        document.querySelector('#percent > svg > circle:nth-child(2)').style.strokeDashoffset = offset;
        couter(diff);
        
    }


},1000)

