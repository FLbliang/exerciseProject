(function() {

	var oMenuBtn = $(".header-right a");
	var oMenu = $(".menu");
	var oMenuImg = $(".header-right a img");
	if(oMenuBtn) {
		oMenuBtn.addEventListener("touchstart", function() {

			if(oMenuImg.getAttribute("src") == "img/menuIcon.jpg") {
				oMenu.style.display = "block";
				oMenuImg.setAttribute("src", "img/close.png");
			} else {
				oMenu.style.display = "none";
				oMenuImg.setAttribute("src", "img/menuIcon.jpg");
			}

		})
	}

})();

(function() {
	var oNavBtn = $(".footer-nav");
	var oFooterShow = $(".footer-show");
	var oFooterNavClose = $(".footer-nav-close");
	if(oNavBtn) {
		oNavBtn.addEventListener("touchstart", function() {
			oFooterShow.style.display = "block";
		}, false);

		oFooterNavClose.addEventListener("touchstart", function() {
			oFooterShow.style.display = "none";
		}, false);
	}

})();

(function() {
	var html = document.documentElement;
	var hWidth = html.getBoundingClientRect().width;
	html.style.fontSize = Math.floor(hWidth / 20) + "px";

})();


