var updatetime = "";

var mainLoopId = setInterval(function(){
    var epoch = Math.round(new Date().getTime());

    var myDate = new Date(apidate).toLocaleString(undefined, options);
    var epochMin = new Date(epoch).toLocaleString(undefined, options);

    console.log("EPOCH " + epochMin + "\n",
                "API " + myDate)
    
    updatetime = epochMin - myDate;

    if(updatetime < 0 ) {
        updatetime = 60 - (Math.abs(updatetime))
        document.getElementById("updatetime").textContent="zojuist";
    }else if(updatetime <= 1) {
        document.getElementById("updatetime").textContent=updatetime + " minuut geleden";
    }else if(updatetime == "offline") {
        document.getElementById("updatetime").textContent="Offline";
    }else{
        document.getElementById("updatetime").textContent=updatetime + " minuten geleden";
    }

    document.getElementById("playercount").textContent=playercount;
    document.getElementById("serverip").textContent=serverip;


}, 500);