
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


function CheckHomeIs(){
    var checkHome = localStorage.getItem("cit");
    if(checkHome !== "home"){
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
        changeURL_Customer();
        document.getElementById("URLhere2").contentWindow.location.reload();
    }
 }

function CheckReadyState(){
     document.getElementById("URLhere1").contentWindow.removeEventListener(
        "click", CheckHomeIs);
     document.getElementById("URLhere1").contentWindow.addEventListener(
        "click", CheckHomeIs);
}

function changeURL_Certify() {
    if(document.getElementById("URLhere1").style.display == 'block'){
        document.getElementById("URLhere1").contentWindow.location.reload();
        document.getElementById("URLhere1").onload = function(){
            CheckReadyState();
        }
        
            
        

    }
    else{
        
    
    
        document.getElementById("URLhere1").style.display = 'block';
        document.getElementById("URLhere2").style.display = 'none';
        document.getElementById("URLhere3").style.display = 'none';
        document.getElementById("URLhere4").style.display = 'none';
        document.getElementById("URLhere5").style.display = 'none';
        document.getElementById("URLhere6").style.display = 'none';
        document.getElementById("URLhere7").style.display = 'none';
    }
    checkHome = localStorage.setItem("cit", "home");

    


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
    }

}
//Mpas frame
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
    }
        
}
//Calculates frame
function changeURL_Calculates() {
    if(document.getElementById("URLhere4").style.display == 'block'){
        document.getElementById("URLhere4").contentWindow.location.reload();
        //location.reload();
    }
    else{     
        document.getElementById("URLhere1").style.display = 'none';
        document.getElementById("URLhere2").style.display = 'none';
        document.getElementById("URLhere3").style.display = 'none';
        document.getElementById("URLhere4").style.display = 'block';
        document.getElementById("URLhere5").style.display = 'none';
        document.getElementById("URLhere6").style.display = 'none';
        document.getElementById("URLhere7").style.display = 'none';
    }
        
}
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
    }
        
}

//complete clicked
function completeClicked() {
    alert("방문완료 되었습니다!");
}

//complete clicked
function outClicked() {
    alert("부재중 처리되었습니다.");
}

//
   
//function asdasfasdsadas() {
//    var i = document.getElementById("URLhere1").innerHTML;
//    return i;
//}



    