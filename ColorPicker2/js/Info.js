function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

var appID = "b77a5c561934e089";
window.onload = function(){
    var applicationID = getUrlVars()["applicationID"];
    var NowVersion = getUrlVars()["version"];
    var LastVersion = '2.0.0.0';
    
    var UpdateDivision = document.getElementById("updateDiv");
    var NoUpdateMessage = document.getElementById("NoUpdateMessage");
    var UpdateButton = document.getElementById("UpdateButton");
    var UnknownParameter = document.getElementById("unknownParameter");
    var Version = document.getElementById("version");
    
    var nowVerseion = document.getElementById("nowVersion");
    var lastVersion = document.getElementById("lastVersion");
    nowVersion.innerHTML = "Now Version : " + NowVersion;
    lastVersion.innerHTML = "Last Version : " + LastVersion;
    
    if(applicationID != appID){
        UpdateDivision.removeChild(UpdateButton);
        UpdateDivision.removeChild(NoUpdateMessage);
        Version.removeChild(nowVersion);
        Version.removeChild(lastVersion);
        
    }else{
        UpdateDivision.removeChild(UnknownParameter);
    }
    
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
        
    if(LastVersion > NowVersion){
        UpdateDivision.removeChild(NoUpdateMessage);
    }
    else{
        UpdateDivision.removeChild(UpdateButton);
    }
};

function Update(){
    
}