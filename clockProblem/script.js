let ampm = document.getElementById('ampm')

// to update everytime i create a function
function displayTime(){
    let dateTime = new Date();
    let hr = dateTime.getHours(); //24 hours format
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    if(hr>12){
        hr = hr - 12
        ampm.innerHTML = "PM"
    }
    document.getElementById('hours').innerHTML = padZero(hr)
    document.getElementById('mins').innerHTML = padZero(min)
    document.getElementById('seconds').innerHTML = padZero(sec)
}

function padZero(num){
    return num<10?'0'+num:num
}

setInterval(displayTime,500)


