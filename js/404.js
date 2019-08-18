var ImageName = ["IMG_0101",
                 "IMG_0107",
                 "IMG_0108",
                 "IMG_1594",
                 "IMG_9551",
                 "IMG_0037",
                 "IMG_0019"];

function GoToHomePage(){
    window.location = '/';   
}

window.onload = function(){
    document.body.style.background = "url('img/" + ImageName[Math.floor(Math.random() * 5)] + ".JPG') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
};
