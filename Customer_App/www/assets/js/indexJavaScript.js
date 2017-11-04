$(document).ready(function(){

    $(".form-control").focusin(function(event){
        $(this).animate({boxShadow:"0px 0px 5px #008000"}, 50);

    });
    $(".form-control").focusout(function(event){
        $(this).animate({boxShadow:"0px 0px 0px #FFFFFF"}, 50);

    });
    var userDATA = {
        realname: "",
        phone: "",
		username: "",
        password: "",
        address: ""
    }
	var loginDATA = {
		username:"",
		password:""
	}
    $.validator.addMethod("complexPassword", function(value, element) {
        return this.optional(element) || ( value.match(/[0-9]/) && value.match(/[a-zA-z]/) );
    });

    var validator = $("#login-join-form1").validate({


        rules: {
            vusername: {
                required: true,
                minlength: 2,
                maxlength: 12
            },
            vusertel: {
                required: true,
                digits: true,
                minlength: 9,
                maxlength: 12

            },
            vuserid: {
                required: true,
                minlength: 6,
                maxlength: 12

            }
        },

        messages: {
            vusername: {
                required: "이름을 입력해 주세요",
                minlength: "이름은 2자 이상이어야 합니다",
                maxlength: "이름이 너무 깁니다"
            },
            vusertel: {
                required: "전화번호를 입력해 주세요",
                digits: "전화번호는 '-'없이 입력하여 주세요",
                minlength: "전화번호는 9자 이상이어야 합니다",
                maxlength: "전화번호가 너무 깁니다"

            },
            vuserid: {
                required: "아이디를 입력해 주세요",
                minlength: "아이디는 2자 이상이어야 합니다",
                maxlength: "아이디가 너무 깁니다"
            }
        },
        errorPlacement: function(error, element) {
            error.appendTo(element.next("span"));

        },
        highlight: function(element){

            if($(element).hasClass("login-join-input-style-invalid") == false){
                $(element).animate({boxShadow:"0px 0px 5px #800000"}, 1);
            }
            $(element).addClass("login-join-input-style-invalid");

            $(element).off("focusin");

            $(element).on("focusin", function(event){

                $(this).animate({boxShadow:"0px 0px 5px #800000"}, 50);

            });

        },
        unhighlight: function(element){



            if($(element).hasClass("login-join-input-style-invalid") == true){
                $(element).animate({boxShadow:"0px 0px 5px #008000"}, 1);
            }
            $(element).removeClass("login-join-input-style-invalid");
            $(element).off("focusin");

            $(element).on("focusin", function(event){

                $(this).animate({boxShadow:"0px 0px 5px #008000"}, 50);

            });


        }



    });
    var validator2 = $("#login-join-form2").validate({

        rules: {
            vuserpw: {
                required: true,
                minlength: 6,
                maxlength: 12,
                complexPassword: true
            },
            vuserpwconf: {
                required: true,
                minlength: 6,
                maxlength: 12,
                complexPassword: true,
                equalTo: "#userpw"
            },
            vuseraddress: {
                minlength: 2,
                required: true

            },
            vuseraddressmore: {
                minlength: 2,
                required: true
            },
            vuseraddressdetail: {
                minlength: 2,
                required: true
            }
        },

        messages: {
            vuserpw: {
                required: "비밀번호를 입력해 주세요",
                minlength: "비밀번호는 6자 이상이어야 합니다",
                maxlength: "비밀번호가 너무 깁니다",
                complexPassword: "비밀번호는 숫자, 영문을 혼합하여 주세요"
            },
            vuserpwconf: {
                required: "비밀번호를 다시 입력해 주세요",
                minlength: "비밀번호는 6자 이상이어야 합니다",
                maxlength: "비밀번호가 일치하지 않습니다",
                complexPassword: "비밀번호는 숫자, 영문을 혼합하여 주세요",
                equalTo: "비밀번호가 일치하지 않습니다"
            },
            vuseraddress: {                          
                minlength: "주소를 입력해 주세요",
                required: "주소를 입력해 주세요"
            },
            vuseraddressmore: {
                minlength: "주소를 입력해 주세요",
                required: "주소를 입력해 주세요"
            },
            vuseraddressdetail: {
                minlength: "주소를 입력해 주세요",
                required: "주소를 입력해 주세요"
            }
        },

        errorPlacement: function(error, element) {
            error.appendTo(element.next("span"));

        },
        highlight: function(element){

            if($(element).hasClass("login-join-input-style-invalid") == false){
                $(element).animate({boxShadow:"0px 0px 5px #800000"}, 1);
            }
            $(element).addClass("login-join-input-style-invalid");

            $(element).off("focusin");

            $(element).on("focusin", function(event){

                $(this).animate({boxShadow:"0px 0px 5px #800000"}, 50);

            });

        },
        unhighlight: function(element){



            if($(element).hasClass("login-join-input-style-invalid") == true){
                $(element).animate({boxShadow:"0px 0px 5px #008000"}, 1);
            }
            $(element).removeClass("login-join-input-style-invalid");
            $(element).off("focusin");

            $(element).on("focusin", function(event){

                $(this).animate({boxShadow:"0px 0px 5px #008000"}, 50);

            });


        }



    });


    $("#login-join-close").click(function(){
        $("#login-join-main").slideUp();
        $("#login-join-close").hide();


    });
    
    $("#login-button-login").click(function(){
        var idValue = $("#loginid").val("");
        var pwValue = $("#loginpw").val("");
		$("#login-login-close").show();
		$("#login-login-main").show();

    });
	$("#login-login-close").click(function(){
		$("#login-login-close").hide();
		$("#login-login-main").hide();
	});
	$("#login-login-login-button").click(function(){
		loginDATA.username = $("#loginid").val();
		loginDATA.password = $("#loginpw").val();
		$.ajax({
			type: 'POST',
			url: "http://rbuja.herokuapp.com/accounts/Login_app",
			data: loginDATA,
			dataType: 'json',
			timeout: 5000,
			success: function(data) {
				if(data.result == true){
					localStorage.setItem("realname", data.response.realname);
					location.href = "home.html";
					//alert(JSON.stringify(data));
				}



			},
			error: function(){
				//alert(JSON.stringify(data));
				document.getElementById("login-login-login-error").innerHTML = data.message;
				


			}

		});
	});

    $("#login-button-join").click(function(){
        validator.resetForm();
        validator2.resetForm();
        $('label.error').remove();
        $(".form-control").val("");
        if($(".form-control").hasClass("login-join-input-style-invalid") == true){
            $(".form-control").animate({boxShadow:"0px 0px 0px #FFFFFF"}, 1);
        }
        $(".form-control").removeClass("login-join-input-style-invalid");
        $(".form-control").off("focusin");
		$("#login-join-button-next-page2").off("click");
		$("#login-join-button-next-done").off("click");
		$("#login-join-checkid").off("click");


        $(".form-control").on("focusin", function(event){

            $(this).animate({boxShadow:"0px 0px 5px #008000"}, 50);

        });
        userDATA = {
            realname: "",
            phone: "",
            password: "",
            address: ""
        }
        $("#login-join-close").show();


        $("#login-join-main").slideDown();

        $(".login-join-style").hide();
        $("#login-join-terms").show();
        $("#login-join-terms").scrollTop(0);
        $(".login-join-button-next-arrow").show();
        $("#login-join-button-next-page1").show();
        $("#login-join-button-next-page2").hide();
        $("#login-join-button-next-done").hide();   


    });

    $("#login-join-terms").scroll(function(){
        var isScrollBottom = $("#login-join-terms").scrollTop();
        var isOuterHeight = $("#login-join-terms").outerHeight(true);
        var isInnerHeight = document.getElementById("login-join-terms").scrollHeight;
        var isScrollDone = isInnerHeight - isOuterHeight;


        //5912
        if(isScrollBottom == isScrollDone){
            document.getElementById("login-join-button-style").style.backgroundColor = "#4ec140";
            $("#login-join-button-next-page1").on("click", function(){
                $(".login-join-style").hide();
                $("#login-join-page1").show();
                document.getElementById("login-join-button-style").style.backgroundColor = "gray";
                $("#login-join-terms").scrollTop(0);
                $("#login-join-button-next-page1").hide();
                $("#login-join-button-next-page2").show();
                $("#login-join-button-next-done").hide(); 

            });
        }
        else {
            document.getElementById("login-join-button-style").style.backgroundColor = "gray";
            $("#login-join-button-next-page1").off("click");
        }

    });
    $("#login-join-form1").on("input keypress", function(){

        var nameValue = $("#username").val();
        var telValue = $("#usertel").val();
		var idValue = $("#userid").val();
		var idCheck;
        if(nameValue != ""){
            validator.element("#username");
        }
        if(telValue !=""){
            validator.element("#usertel");
        }
        if(idValue !=""){
            validator.element("#userid");
			userDATA.username = idValue;
			/*
			$("#login-join-checkid").on("click", function(){
				$.ajax({
					type: 'POST',
					url: "http://rbuja.herokuapp.com/accounts/SignUp_app",
					data: userDATA,
					dataType: 'json',
					timeout: 5000,
					success: function(data) {
						idCheck = 1;
						alert("사용가능한 아이디 입니다!");


					},
					error: function(){
						idCheck = 0;
						alert("중복된 아이디 입니다. 다른 아이디를 입력하여 주세요.");

					}

				});
			});
			*/
			idCheck = 1;
		}
		else {
			$("#login-join-checkid").off("click");
		}


        if(nameValue != "" && telValue !="" && idValue !="" && idCheck ==1){
            if(validator.form()==true){
                document.getElementById("login-join-button-style").style.backgroundColor = "#4ec140";
                $("#login-join-button-next-page2").on("click", function(){
                    userDATA.realname = $("#username").val();
                    userDATA.phone = $("#usertel").val();
                    userDATA.username = $("#userid").val();

                    $(".login-join-style").hide();
                    $("#login-join-page2").show();
                    document.getElementById("login-join-button-style").style.backgroundColor = "gray";
                    $(".login-join-button-next-arrow").hide();
                    $("#login-join-button-next-page2").hide();
                    $("#login-join-button-next-done").show(); 
                });
            }
            else {
                document.getElementById("login-join-button-style").style.backgroundColor = "gray";
                $("#login-join-button-next-page2").off("click");
            }
        }
        else{
            document.getElementById("login-join-button-style").style.backgroundColor = "gray";
            $("#login-join-button-next-page2").off("click");
        }


    });

    $("#login-join-form2").on("input keypress", function(){
        var pwValue = $("#userpw").val();
        var pwconfValue = $("#userpwconf").val();
        var addressValue = $("#useraddress").val();
        var addressmoreValue = $("#useraddressmore").val();
        var addressdetailValue = $("#useraddressdetail").val();
        if(pwValue != ""){
            validator2.element("#userpw");
        }
        if(pwconfValue !=""){
            validator2.element("#userpwconf");
        }
        if(addressValue != ""){
            validator2.element("#useraddress");
        }
        if(addressmoreValue !=""){
            validator2.element("#useraddressmore");
        }
        if(addressdetailValue !=""){
            validator2.element("#useraddressdetail");
        }
        if(pwValue != "" && pwconfValue !="" && addressValue !="" && addressmoreValue !="" && addressdetailValue !=""){
            $("#login-join-form2").on("input keypress", function(){
            });
            if(validator2.form()==true){
                document.getElementById("login-join-button-style").style.backgroundColor = "#4ec140";
                $("#login-join-button-next-done").on("click", function(){
                    userDATA.password = $("#userpw").val();
                    userDATA.address = $("#useraddress").val() + "/" + $("#useraddressmore").val() + "/" + $("#useraddressdetail").val();
					$.ajax({
						type: 'POST',
						url: "http://rbuja.herokuapp.com/accounts/SignUp_app",
						data: userDATA,
						dataType: 'json',
						timeout: 5000,
						success: function(data) {
							if(data.result == true){
								alert("가입완료!");
							}


						},
						error: function(){
							
							alert("예기치 못한 에러가 발생하였습니다");

						}

					});
                    $("#login-join-main").slideUp();
                    $("#login-join-close").hide(); 
                    $(".login-join-style").hide(function(){
                        $("#index-popup").show();
                        $("#popup-tutorial").show();
                        document.getElementById("popup-tutorial").contentWindow.location.hash = "#tutorial";
                    
                    
                    });
                    document.getElementById("login-join-button-style").style.backgroundColor = "gray";
                    $("#login-join-button-next-done").hide();



                });
            }
            else {
                document.getElementById("login-join-button-style").style.backgroundColor = "gray";
                $("#login-join-button-next-done").off("click");
            }
        }
        else {
            document.getElementById("login-join-button-style").style.backgroundColor = "gray";
            $("#login-join-button-next-done").off("click");

        }

    });

    $("#index-popup-close").click(function(){
        $("#index-popup").hide();
        $("#popup-tutorial").hide();
        document.getElementById("popup-tutorial").contentWindow.location.hash = "";
    });







});