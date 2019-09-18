function changeText(){
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    var amORpm = 'AM';
    if (h>12){
        h = h-12;
        amORpm = 'PM'
    }
    if (h<10){
        h = "0"+h;
    }
    if(m<10){
        m = "0"+m;
    }
    if (s<10){
        s = "0"+s;
    }
    $('span').text(h+":"+m+":"+s+" "+amORpm);
    setTimeout(changeText,1000)



    
}

