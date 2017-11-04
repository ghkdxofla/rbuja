//=====================================================
//=============onClickScript===========================

//click menu
$(document).ready(function(){
    $("#top-menu-front").click(function(){
		$("#top-title-bar-red").hide();
		$("#top-title-icon-red").hide();
        $(".top-image-menu-on").hide();
        var onButton = this.getElementsByTagName("img");
        onButton[1].style.display = 'block';
        $(".main-style").hide();
        document.getElementById("main-front").style.display = 'block';
    });
    $("#top-menu-manual").click(function(){
		$("#top-title-bar-red").hide();
		$("#top-title-icon-red").hide();

        $(".top-image-menu-on").hide();
        var onButton = this.getElementsByTagName("img");
        onButton[1].style.display = 'block';
        $(".main-style").hide();
        document.getElementById("main-manual").style.display = 'block';
    });
    $("#top-menu-collect").click(function(){
		$("#top-title-bar-red").hide();
		$("#top-title-icon-red").hide();
        $(".top-image-menu-on").hide();
        var onButton = this.getElementsByTagName("img");
        onButton[1].style.display = 'block';
        $(".main-style").hide();
        document.getElementById("main-collect").style.display = 'block';
    });
    $("#top-menu-shop").click(function(){
		$("#top-title-bar-red").show();
		$("#top-title-icon-red").show();

        $(".top-image-menu-on").hide();
        var onButton = this.getElementsByTagName("img");
        onButton[1].style.display = 'block';
        $(".main-style").hide();
        document.getElementById("main-shop").style.display = 'block';
    });
    $("#top-image-more").click(function(){
        $("#home-top-side").slideToggle();
        var noticeClose = document.getElementById("side-notice").contentWindow.document;
        var noticeCloseContent = noticeClose.getElementsByClassName("notice-list-content");
        $(noticeCloseContent).hide();
        var noticeCloseArrowRight = noticeClose.getElementsByClassName("notice-list-arrow-right");
        var noticeCloseArrowDown = noticeClose.getElementsByClassName("notice-list-arrow-down");
        $(noticeCloseArrowRight).show();
        $(noticeCloseArrowDown).hide();

    });
    $("#top-side-close").click(function(){
        $("#home-top-side").slideUp();
    });
    $("#side-list-notice").click(function(){
		$("#top-title-icon-red").hide();
		$("#top-title-bar-red").hide();
        $("#home-top-side").hide();
        document.getElementById("home-side").style.display = 'block';
        $(".side-style").hide();
        document.getElementById("side-notice").style.display = 'block';
        document.getElementById("top-title-sidebar").style.display = 'block';
        document.getElementById("top-title-sidebar").innerHTML = '공지사항';
        document.getElementById("top-back-home").style.display = 'block';
        document.getElementById("top-title-icon").style.display = 'none';
        document.getElementById("top-title-home").style.display = 'none';

    });
    $("#side-list-event").click(function(){
		$("#top-title-icon-red").hide();
		$("#top-title-bar-red").hide();
        $("#home-top-side").hide();
        document.getElementById("home-side").style.display = 'block';
        $(".side-style").hide();
        document.getElementById("side-event").style.display = 'block';
        document.getElementById("top-title-sidebar").style.display = 'block';
        document.getElementById("top-title-sidebar").innerHTML = '이벤트';
        document.getElementById("top-back-home").style.display = 'block';
        document.getElementById("top-title-icon").style.display = 'none';
        document.getElementById("top-title-home").style.display = 'none';

    });
    $("#side-list-bag").click(function(){
		$("#top-title-icon-red").hide();
		$("#top-title-bar-red").hide();
        $("#home-top-side").hide();
        document.getElementById("home-side").style.display = 'block';
        $(".side-style").hide();
        document.getElementById("side-bag").style.display = 'block';
        document.getElementById("top-title-sidebar").style.display = 'block';
        document.getElementById("top-title-sidebar").innerHTML = '장바구니';
        document.getElementById("top-back-home").style.display = 'block';
        document.getElementById("top-title-icon").style.display = 'none';
        document.getElementById("top-title-home").style.display = 'none';

    });
    $("#side-list-order").click(function(){
		$("#top-title-icon-red").hide();
		$("#top-title-bar-red").hide();
        $("#home-top-side").hide();
        document.getElementById("home-side").style.display = 'block';
        $(".side-style").hide();
        document.getElementById("side-order").style.display = 'block';
        document.getElementById("top-title-sidebar").style.display = 'block';
        document.getElementById("top-title-sidebar").innerHTML = '주문내역';
        document.getElementById("top-back-home").style.display = 'block';
        document.getElementById("top-title-icon").style.display = 'none';
        document.getElementById("top-title-home").style.display = 'none';

    });
    $("#side-list-point").click(function(){
		$("#top-title-icon-red").hide();
		$("#top-title-bar-red").hide();
        $("#home-top-side").hide();
        document.getElementById("home-side").style.display = 'block';
        $(".side-style").hide();
        document.getElementById("side-point").style.display = 'block';
        document.getElementById("top-title-sidebar").style.display = 'block';
        document.getElementById("top-title-sidebar").innerHTML = '포인트 관리';
        document.getElementById("top-back-home").style.display = 'block';
        document.getElementById("top-title-icon").style.display = 'none';
        document.getElementById("top-title-home").style.display = 'none';

    });
    $("#side-list-service").click(function(){
		$("#top-title-icon-red").hide();
		$("#top-title-bar-red").hide();
        $("#home-top-side").hide();
        document.getElementById("home-side").style.display = 'block';
        $(".side-style").hide();
        document.getElementById("side-service").style.display = 'block';
        document.getElementById("top-title-sidebar").style.display = 'block';
        document.getElementById("top-title-sidebar").innerHTML = '고객센터';
        document.getElementById("top-back-home").style.display = 'block';
        document.getElementById("top-title-icon").style.display = 'none';
        document.getElementById("top-title-home").style.display = 'none';

    });
    $("#side-list-setting").click(function(){
		$("#top-title-icon-red").hide();
		$("#top-title-bar-red").hide();

        $("#home-top-side").hide();
        document.getElementById("home-side").style.display = 'block';
        $(".side-style").hide();
        document.getElementById("side-setting").style.display = 'block';
        document.getElementById("top-title-sidebar").style.display = 'block';
        document.getElementById("top-title-sidebar").innerHTML = '설정';
        document.getElementById("top-back-home").style.display = 'block';
        document.getElementById("top-title-icon").style.display = 'none';
        document.getElementById("top-title-home").style.display = 'none';

    });
    $("#top-back-home").click(function(){
		if(document.getElementById("main-shop").style.display == 'block'){
			$("#top-title-icon-red").show();
			$("#top-title-bar-red").show();
		}
        document.getElementById("home-side").style.display = 'none';
        $(".side-style").hide();
        document.getElementById("top-title-sidebar").style.display = 'none';
        document.getElementById("top-back-home").style.display = 'none';
        document.getElementById("top-title-icon").style.display = 'block';
        document.getElementById("top-title-home").style.display = 'block';
    });
    $("#side-list-logout").click(function(){
        $("#home-logout").show();
        $("#home-logout-close").show();
    });
    $("#home-logout-close").click(function(){
        $("#home-logout").hide();
        $("#home-logout-close").hide();
    });
	
	$("#home-popup-close").click(function(){
		$("#home-popup").hide();
		$(".home-popup-style").hide();
		document.getElementById("main-manual").contentWindow.document.location.hash = "";
		document.getElementById("popup-eventpopup").contentWindow.$(".event-popup-list-content-detail").hide();

	});
	$("#home-popup-close-button-style").click(function(){
		$("#home-popup").hide();
		$(".home-popup-style").hide();
		document.getElementById("main-manual").contentWindow.document.location.hash = "";
		document.getElementById("popup-eventpopup").contentWindow.$(".event-popup-list-content-detail").hide();

	});

});
