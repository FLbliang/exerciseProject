/**
 * Created by whisper on 2017/7/22.
 */

window.onload = function () {
    var html = document.documentElement;
    var hWidth = html.getBoundingClientRect().width;
    html.style.fontSize = Math.floor(hWidth / 20) + "px";
    window.onresize = function() {
        var html = document.documentElement;
        var hWidth = html.getBoundingClientRect().width;
        html.style.fontSize = hWidth / 20 + "px";
        touchMove();
    };

    touchMove();

function touchMove() {
    /*触摸拖动*/
    var oUl = document.querySelector(".about .about_problems .about_problems_img ul");
    var Img = document.querySelectorAll(".about .about_problems .about_problems_img ul li img");

    var startX=0,startM=0,endX=0,navL=0;
    var deviceWidth = document.body.clientWidth;  //屏幕宽度

    for(var i = 0 ; i < Img.length ; i++){
        Img[i].index = i;
        Img[i].onclick = function () {
            localStorage.setItem("key",this.index);
        }
    }

    oUl.addEventListener("touchstart",start,true); //注册事件
    oUl.addEventListener("touchmove",move,true); //注册事件
//手指按下
    function start(ev) {
        var oEvent = ev || event;
        startX = oEvent.targetTouches[0].clientX;
        navL = oUl.offsetLeft;
        if(navL >= 0){
            oUl.style.left = 0 + "px";
        }
    }
//手指移动
    function move(ev) {
        var oEvent = ev || event;
        startM = oEvent.targetTouches[0].clientX;
        endX = startM - startX ;
        oUl.style.left = endX + navL + "px";

        if(oUl.offsetLeft >= 0){
            oUl.style.left = 0 + "px";
        }else if(oUl.offsetLeft <= deviceWidth - oUl.offsetWidth){
            oUl.style.left = (deviceWidth - 10 - oUl.offsetWidth) + "px";
        }

    }
}
}


