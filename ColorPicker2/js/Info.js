function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

window.onload = function(){
    var NowVersion = getUrlVars()["version"];
    var LastVersion = '2.0.0.1';
    
    var UpdateDivision = document.getElementById("updateDiv");
    var NoUpdateMessage = document.getElementById("NoUpdateMessage");
    var UpdateButton = document.getElementById("UpdateButton");
    var UnknownParameter = document.getElementById("unknownParameter");
    var Version = document.getElementById("version");
    
    var nowVerseion = document.getElementById("nowVersion");
    var lastVersion = document.getElementById("lastVersion");
    nowVersion.innerHTML = "Now Version : " + NowVersion;
    lastVersion.innerHTML = "Last Version : " + LastVersion;

    var tmp = 0;    
    var nowVer = NowVersion.split(".");
    for(i in nowVer){
        tmp += nowVer[i];
    }
    NowVersion = tmp;
    
    
    tmp = 0;    
    var lastVer = LastVersion.split(".");
    for(i in lastVer){
        tmp += lastVer[i];
    }
    LastVersion = tmp;


    if(parseInt(NowVersion / 1000) === 2){
        UpdateDivision.removeChild(UnknownParameter);

    }else{
        UpdateDivision.removeChild(UpdateButton);
        UpdateDivision.removeChild(NoUpdateMessage);
        Version.removeChild(nowVersion);
        Version.removeChild(lastVersion);
    }

        
    if(LastVersion > NowVersion){
        UpdateDivision.removeChild(NoUpdateMessage);
    }
    else{
        UpdateDivision.removeChild(UpdateButton);
    }
};

function Update(){
    
}
