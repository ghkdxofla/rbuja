
"use strict";

//recycle clicked
function changeColor_Recycle() {
        
    document.getElementById('recycle-title').style.backgroundColor = '#4DC03D';
    document.getElementById('recycle-title').style.color = 'white';
    document.getElementById('electric-title').style.backgroundColor = '#90EE90';
    document.getElementById('electric-title').style.color = 'black';

}

//electric clicked
function changeColor_Electric() {
    
    document.getElementById("electric-title").style.backgroundColor = '#4DC03D';
    document.getElementById("electric-title").style.color = 'white';
    document.getElementById("recycle-title").style.backgroundColor = '#90EE90';
    document.getElementById("recycle-title").style.color = 'black';
    
}

//recycle clicked in calculates
function changeColor_Recycle_Calculates() {
        
    document.getElementById("calculates-recycle-button").style.backgroundColor = '#4DC03D';
    document.getElementById("calculates-recycle-button").style.color = 'white';
    document.getElementById("calculates-electric-button").style.backgroundColor = '#90EE90';
    document.getElementById("calculates-electric-button").style.color = 'black';

}

//electric clicked in calculates
function changeColor_Electric_Calculates() {
        
    document.getElementById("calculates-electric-button").style.backgroundColor = '#4DC03D';
    document.getElementById("calculates-electric-button").style.color = 'white';
    document.getElementById("calculates-recycle-button").style.backgroundColor = '#90EE90';
    document.getElementById("calculates-recycle-button").style.color = 'black';

}


//Certify frame
function changeURL_Certify() {

    if(document.getElementById("URLhere1").style.display == 'block'){
        document.getElementById("URLhere1").contentWindow.location.reload();

    }
    else {

        document.getElementById("URLhere1").style.display = 'block';
        document.getElementById("URLhere2").style.display = 'none';
        document.getElementById("URLhere3").style.display = 'none';
        document.getElementById("URLhere4").style.display = 'none';
        document.getElementById("URLhere5").style.display = 'none';
        document.getElementById("URLhere6").style.display = 'none';
        document.getElementById("URLhere7").style.display = 'none';
        document.getElementById("URLhere8").style.display = 'none';
        document.getElementById("URLhere9").style.display = 'none';

        $("#menuIcon-Certify").addClass("change-button-color");
        $("#menuIcon-Certify-icon").addClass("change-button-color");
        $("#menuIcon-Customer").removeClass("change-button-color");
        $("#menuIcon-Customer-icon").removeClass("change-button-color");
        $("#menuIcon-Maps").removeClass("change-button-color");
        $("#menuIcon-Maps-icon").removeClass("change-button-color");
        $("#menuIcon-Calculates").removeClass("change-button-color");
        $("#menuIcon-Calculates-icon").removeClass("change-button-color");
        $("#menuIcon-Point").removeClass("change-button-color");
        $("#menuIcon-Point-icon").removeClass("change-button-color");
        $("#menuIcon-Manual").removeClass("change-button-color");
        $("#menuIcon-Manual-icon").removeClass("change-button-color");
        $("#menuIcon-Setting").removeClass("change-button-color");
        $("#menuIcon-Setting-icon").removeClass("change-button-color");
        
        
        $.ajax({
            type: "GET",
            url: "http://rbuja.herokuapp.com/rbuja/ListRequest_app?pickup_date=2014-12-11",
            dataType: "json",
            success: function(data){
               var myArray = data;
               ClientList(myArray);
            },
            complete: function(){
                EnableScrollCheck();
            }
        });
    }
    localStorage.setItem("cit", "home");



    


}
//Customer frame
function changeURL_Customer() {
    
    
    
    if(document.getElementById("URLhere2").style.display == 'block'){
        document.getElementById("URLhere2").contentWindow.location.reload();
        //location.reload();
    }
    else{
        document.getElementById("URLhere1").style.display = 'none';
        document.getElementById("URLhere2").style.display = 'block';
        document.getElementById("URLhere3").style.display = 'none';
        document.getElementById("URLhere4").style.display = 'none';
        document.getElementById("URLhere5").style.display = 'none';
        document.getElementById("URLhere6").style.display = 'none';
        document.getElementById("URLhere7").style.display = 'none';
        document.getElementById("URLhere8").style.display = 'none';
        document.getElementById("URLhere9").style.display = 'none';

        $("#menuIcon-Certify").removeClass("change-button-color");
        $("#menuIcon-Certify-icon").removeClass("change-button-color");
        $("#menuIcon-Customer").addClass("change-button-color");
        $("#menuIcon-Customer-icon").addClass("change-button-color");
        $("#menuIcon-Maps").removeClass("change-button-color");
        $("#menuIcon-Maps-icon").removeClass("change-button-color");
        $("#menuIcon-Calculates").removeClass("change-button-color");
        $("#menuIcon-Calculates-icon").removeClass("change-button-color");
        $("#menuIcon-Point").removeClass("change-button-color");
        $("#menuIcon-Point-icon").removeClass("change-button-color");
        $("#menuIcon-Manual").removeClass("change-button-color");
        $("#menuIcon-Manual-icon").removeClass("change-button-color");
        $("#menuIcon-Setting").removeClass("change-button-color");
        $("#menuIcon-Setting-icon").removeClass("change-button-color");

        $.ajax({
            type: "GET",
            url: "http://rbuja.herokuapp.com/rbuja/ListRequest_app?pickup_date=2014-12-11",
            dataType: "json",
            success: function(data){
               var myArray = data;
               var out = certifyClientCustomer(myArray);
               certifyListToCustomer(out);
            }
        });

                                      
    }

}
//Maps frame
function changeURL_Maps() {

    if(document.getElementById("URLhere3").style.display == 'block'){
       document.getElementById("URLhere3").contentWindow.location.reload();
        //location.reload();
    }
    else{     
		
        document.getElementById("URLhere1").style.display = 'none';
        document.getElementById("URLhere2").style.display = 'none';
        document.getElementById("URLhere3").style.display = 'block';
        document.getElementById("URLhere4").style.display = 'none';
        document.getElementById("URLhere5").style.display = 'none';
        document.getElementById("URLhere6").style.display = 'none';
        document.getElementById("URLhere7").style.display = 'none';
        document.getElementById("URLhere8").style.display = 'none';
        document.getElementById("URLhere9").style.display = 'none';

        $("#menuIcon-Certify").removeClass("change-button-color");
        $("#menuIcon-Certify-icon").removeClass("change-button-color");
        $("#menuIcon-Customer").removeClass("change-button-color");
        $("#menuIcon-Customer-icon").removeClass("change-button-color");
        $("#menuIcon-Maps").addClass("change-button-color");
        $("#menuIcon-Maps-icon").addClass("change-button-color");
        $("#menuIcon-Calculates").removeClass("change-button-color");
        $("#menuIcon-Calculates-icon").removeClass("change-button-color");
        $("#menuIcon-Point").removeClass("change-button-color");
        $("#menuIcon-Point-icon").removeClass("change-button-color");
        $("#menuIcon-Manual").removeClass("change-button-color");
        $("#menuIcon-Manual-icon").removeClass("change-button-color");
        $("#menuIcon-Setting").removeClass("change-button-color");
        $("#menuIcon-Setting-icon").removeClass("change-button-color");
    }

        
}
//----------------------------popup!!!---------------------------------
//Calculates frame
function changeURL_Calculates() {
        
    
    if(location.hash =="#calculates"){
        document.getElementById("URLhere1").style.display = 'block';
        document.getElementById("URLhere2").style.display = 'none';
        document.getElementById("URLhere3").style.display = 'none';
        document.getElementById("popupCalculates").style.display = 'block';
        document.getElementById("URLhere4").style.display = 'block';
        document.getElementById("URLhere5").style.display = 'none';
        document.getElementById("URLhere6").style.display = 'none';
        document.getElementById("URLhere7").style.display = 'none';
        document.getElementById("URLhere8").style.display = 'none';
        document.getElementById("URLhere9").style.display = 'none';
        $("#menuIcon-Certify").addClass("change-button-color");
        $("#menuIcon-Certify-icon").addClass("change-button-color");
        $("#menuIcon-Customer").removeClass("change-button-color");
        $("#menuIcon-Customer-icon").removeClass("change-button-color");
        $("#menuIcon-Maps").removeClass("change-button-color");
        $("#menuIcon-Maps-icon").removeClass("change-button-color");
        $("#menuIcon-Calculates").removeClass("change-button-color");
        $("#menuIcon-Calculates-icon").removeClass("change-button-color");
        $("#menuIcon-Point").removeClass("change-button-color");
        $("#menuIcon-Point-icon").removeClass("change-button-color");
        $("#menuIcon-Manual").removeClass("change-button-color");
        $("#menuIcon-Manual-icon").removeClass("change-button-color");
        $("#menuIcon-Setting").removeClass("change-button-color");
        $("#menuIcon-Setting-icon").removeClass("change-button-color");


    }
    else if(location.hash == "#calculates_in_customer"){
        document.getElementById("URLhere1").style.display = 'none';
        document.getElementById("URLhere2").style.display = 'block';
        document.getElementById("URLhere3").style.display = 'none';
        document.getElementById("popupCalculates").style.display = 'block';
        document.getElementById("URLhere4").style.display = 'block';
        document.getElementById("URLhere5").style.display = 'none';
        document.getElementById("URLhere6").style.display = 'none';
        document.getElementById("URLhere7").style.display = 'none';
        document.getElementById("URLhere8").style.display = 'none';
        document.getElementById("URLhere9").style.display = 'none';
        $("#menuIcon-Certify").removeClass("change-button-color");
        $("#menuIcon-Certify-icon").removeClass("change-button-color");
        $("#menuIcon-Customer").addClass("change-button-color");
        $("#menuIcon-Customer-icon").addClass("change-button-color");
        $("#menuIcon-Maps").removeClass("change-button-color");
        $("#menuIcon-Maps-icon").removeClass("change-button-color");
        $("#menuIcon-Calculates").removeClass("change-button-color");
        $("#menuIcon-Calculates-icon").removeClass("change-button-color");
        $("#menuIcon-Point").removeClass("change-button-color");
        $("#menuIcon-Point-icon").removeClass("change-button-color");
        $("#menuIcon-Manual").removeClass("change-button-color");
        $("#menuIcon-Manual-icon").removeClass("change-button-color");
        $("#menuIcon-Setting").removeClass("change-button-color");
        $("#menuIcon-Setting-icon").removeClass("change-button-color");
    }

    $.ajax({
        type: "GET",
        url: "http://rbuja.herokuapp.com/rbuja/CheckPrice_app",
        dataType: "json",
		timeout: 5000,
        success: function(data){
            var myArray = data;
            certifyProductCalculates(myArray);
            var listTotal = myArray.response.length;
            sessionStorage.setItem("listTotal", listTotal);
        },
        complete: function(){
            $.ajax({
                type: "GET",
                url: "http://rbuja.herokuapp.com/rbuja/ListRequest_app?pickup_date=2014-12-11",
                dataType: "json",
				timeout: 5000,

                success: function(data){
                   var myArray = data;
                   certifyClient(myArray);
                }
           });
        },
		error: function(data){
			alert(data.message);
		}
    });

}


function closePopupCalculates() {
	document.getElementById("URLhere4").contentDocument.getElementById("list-point-total").innerHTML = "0P";
    document.getElementById("popupCalculates").style.display = 'none';
    document.getElementById("URLhere4").style.display = 'none';

}

//collects frame
function changeURL_Collects() {
    
    if(location.hash =="#collects"){
        document.getElementById("URLhere1").style.display = 'block';
        document.getElementById("URLhere2").style.display = 'none';
        document.getElementById("URLhere3").style.display = 'none';
        document.getElementById("popupCollects").style.display = 'block';
        document.getElementById("URLhere4").style.display = 'none';
        document.getElementById("URLhere5").style.display = 'none';
        document.getElementById("URLhere6").style.display = 'none';
        document.getElementById("URLhere7").style.display = 'none';
        document.getElementById("URLhere8").style.display = 'block';
        document.getElementById("URLhere9").style.display = 'none';
        $("#menuIcon-Certify").addClass("change-button-color");
        $("#menuIcon-Certify-icon").addClass("change-button-color");
        $("#menuIcon-Customer").removeClass("change-button-color");
        $("#menuIcon-Customer-icon").removeClass("change-button-color");
        $("#menuIcon-Maps").removeClass("change-button-color");
        $("#menuIcon-Maps-icon").removeClass("change-button-color");
        $("#menuIcon-Calculates").removeClass("change-button-color");
        $("#menuIcon-Calculates-icon").removeClass("change-button-color");
        $("#menuIcon-Point").removeClass("change-button-color");
        $("#menuIcon-Point-icon").removeClass("change-button-color");
        $("#menuIcon-Manual").removeClass("change-button-color");
        $("#menuIcon-Manual-icon").removeClass("change-button-color");
        $("#menuIcon-Setting").removeClass("change-button-color");
        $("#menuIcon-Setting-icon").removeClass("change-button-color");

    }
    else if(location.hash == "#collects_in_customer"){
        document.getElementById("URLhere1").style.display = 'none';
        document.getElementById("URLhere2").style.display = 'block';
        document.getElementById("URLhere3").style.display = 'none';
        document.getElementById("popupCollects").style.display = 'block';
        document.getElementById("URLhere4").style.display = 'none';
        document.getElementById("URLhere5").style.display = 'none';
        document.getElementById("URLhere6").style.display = 'none';
        document.getElementById("URLhere7").style.display = 'none';
        document.getElementById("URLhere8").style.display = 'block';
        document.getElementById("URLhere9").style.display = 'none';
        $("#menuIcon-Certify").removeClass("change-button-color");
        $("#menuIcon-Certify-icon").removeClass("change-button-color");
        $("#menuIcon-Customer").addClass("change-button-color");
        $("#menuIcon-Customer-icon").addClass("change-button-color");
        $("#menuIcon-Maps").removeClass("change-button-color");
        $("#menuIcon-Maps-icon").removeClass("change-button-color");
        $("#menuIcon-Calculates").removeClass("change-button-color");
        $("#menuIcon-Calculates-icon").removeClass("change-button-color");
        $("#menuIcon-Point").removeClass("change-button-color");
        $("#menuIcon-Point-icon").removeClass("change-button-color");
        $("#menuIcon-Manual").removeClass("change-button-color");
        $("#menuIcon-Manual-icon").removeClass("change-button-color");
        $("#menuIcon-Setting").removeClass("change-button-color");
        $("#menuIcon-Setting-icon").removeClass("change-button-color");
    }
    
    $.ajax({
        type: "GET",
        url: "productlist.txt",
        dataType: "json",
        success: function(data){
            certifyProductCollects(data);
        },
        complete: function(){
            $.ajax({
                type: "GET",
                url: "http://rbuja.herokuapp.com/rbuja/ListRequest_app?pickup_date=2014-12-11",
                dataType: "json",
                success: function(data){
                   var myArray = data;
                   certifyClient(myArray);
                }
           });
        }
    });
}


function closePopupCollects() {
    document.getElementById("popupCollects").style.display = 'none';
    document.getElementById("URLhere8").style.display = 'none';

}


//find frame
function changeURL_Find() {

    
    document.getElementById("URLhere1").style.display = 'none';
    document.getElementById("URLhere2").style.display = 'block';
    document.getElementById("URLhere3").style.display = 'none';
    document.getElementById("popupFind").style.display = 'block';
    document.getElementById("URLhere4").style.display = 'none';
    document.getElementById("URLhere5").style.display = 'none';
    document.getElementById("URLhere6").style.display = 'none';
    document.getElementById("URLhere7").style.display = 'none';
    document.getElementById("URLhere8").style.display = 'none';
    document.getElementById("URLhere9").style.display = 'block';
    //------------------------hash!------------------------------
    document.getElementById("URLhere9").contentWindow.location.hash = "#name";


    
}


function closePopupFind() {
    document.getElementById("popupFind").style.display = 'none';
    document.getElementById("URLhere9").style.display = 'none';

}

//----------------------------popup!!!---------------------------------
/*test
//More frame
function changeURL_More() {
    document.getElementById("URLhere").src = "more.html";
}
*/

//Point frame
function changeURL_Point() {
    if(document.getElementById("URLhere5").style.display == 'block'){
        document.getElementById("URLhere5").contentWindow.location.reload();
        //location.reload();
    }
    else{    
        document.getElementById("URLhere1").style.display = 'none';
        document.getElementById("URLhere2").style.display = 'none';
        document.getElementById("URLhere3").style.display = 'none';
        document.getElementById("URLhere4").style.display = 'none';
        document.getElementById("URLhere5").style.display = 'block';
        document.getElementById("URLhere6").style.display = 'none';
        document.getElementById("URLhere7").style.display = 'none';
        document.getElementById("URLhere8").style.display = 'none';
        document.getElementById("URLhere8").style.display = 'none';

        $("#menuIcon-Certify").removeClass("change-button-color");
        $("#menuIcon-Certify-icon").removeClass("change-button-color");
        $("#menuIcon-Customer").removeClass("change-button-color");
        $("#menuIcon-Customer-icon").removeClass("change-button-color");
        $("#menuIcon-Maps").removeClass("change-button-color");
        $("#menuIcon-Maps-icon").removeClass("change-button-color");
        $("#menuIcon-Calculates").removeClass("change-button-color");
        $("#menuIcon-Calculates-icon").removeClass("change-button-color");
        $("#menuIcon-Point").addClass("change-button-color");
        $("#menuIcon-Point-icon").addClass("change-button-color");
        $("#menuIcon-Manual").removeClass("change-button-color");
        $("#menuIcon-Manual-icon").removeClass("change-button-color");
        $("#menuIcon-Setting").removeClass("change-button-color");
        $("#menuIcon-Setting-icon").removeClass("change-button-color");

    }
        
}

//Manual frame
function changeURL_Manual() {
    if(document.getElementById("URLhere6").style.display == 'block'){
        document.getElementById("URLhere6").contentWindow.location.reload();
        //location.reload();
    }
    else{    
        document.getElementById("URLhere1").style.display = 'none';
        document.getElementById("URLhere2").style.display = 'none';
        document.getElementById("URLhere3").style.display = 'none';
        document.getElementById("URLhere4").style.display = 'none';
        document.getElementById("URLhere5").style.display = 'none';
        document.getElementById("URLhere6").style.display = 'block';
        document.getElementById("URLhere7").style.display = 'none';
        document.getElementById("URLhere8").style.display = 'none';
        document.getElementById("URLhere8").style.display = 'none';

        $("#menuIcon-Certify").removeClass("change-button-color");
        $("#menuIcon-Certify-icon").removeClass("change-button-color");
        $("#menuIcon-Customer").removeClass("change-button-color");
        $("#menuIcon-Customer-icon").removeClass("change-button-color");
        $("#menuIcon-Maps").removeClass("change-button-color");
        $("#menuIcon-Maps-icon").removeClass("change-button-color");
        $("#menuIcon-Calculates").removeClass("change-button-color");
        $("#menuIcon-Calculates-icon").removeClass("change-button-color");
        $("#menuIcon-Point").removeClass("change-button-color");
        $("#menuIcon-Point-icon").removeClass("change-button-color");
        $("#menuIcon-Manual").addClass("change-button-color");
        $("#menuIcon-Manual-icon").addClass("change-button-color");
        $("#menuIcon-Setting").removeClass("change-button-color");
        $("#menuIcon-Setting-icon").removeClass("change-button-color");

    }
        
}

//Setting frame
function changeURL_Setting() {

    if(document.getElementById("URLhere7").style.display == 'block'){
        document.getElementById("URLhere7").contentWindow.location.reload();
        //location.reload();
    }
    else{    
        document.getElementById("URLhere1").style.display = 'none';
        document.getElementById("URLhere2").style.display = 'none';
        document.getElementById("URLhere3").style.display = 'none';
        document.getElementById("URLhere4").style.display = 'none';
        document.getElementById("URLhere5").style.display = 'none';
        document.getElementById("URLhere6").style.display = 'none';
        document.getElementById("URLhere7").style.display = 'block';
        document.getElementById("URLhere8").style.display = 'none';
        document.getElementById("URLhere8").style.display = 'none';

        $("#menuIcon-Certify").removeClass("change-button-color");
        $("#menuIcon-Certify-icon").removeClass("change-button-color");
        $("#menuIcon-Customer").removeClass("change-button-color");
        $("#menuIcon-Customer-icon").removeClass("change-button-color");
        $("#menuIcon-Maps").removeClass("change-button-color");
        $("#menuIcon-Maps-icon").removeClass("change-button-color");
        $("#menuIcon-Calculates").removeClass("change-button-color");
        $("#menuIcon-Calculates-icon").removeClass("change-button-color");
        $("#menuIcon-Point").removeClass("change-button-color");
        $("#menuIcon-Point-icon").removeClass("change-button-color");
        $("#menuIcon-Manual").removeClass("change-button-color");
        $("#menuIcon-Manual-icon").removeClass("change-button-color");
        $("#menuIcon-Setting").addClass("change-button-color");
        $("#menuIcon-Setting-icon").addClass("change-button-color");

    }
        
}


//
   
//function asdasfasdsadas() {
//    var i = document.getElementById("URLhere1").innerHTML;
//    return i;
//}



    