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

    
    if(document.getElementById("URLhere").name !== "CHECK_certify"){
        document.getElementById("URLhere").src = "certify.html";
        document.getElementById("URLhere").name = "CHECK_certify";
    }


}
//Customer frame
function changeURL_Customer() {
    if(document.getElementById("URLhere").name !== "CHECK_customer"){
        document.getElementById("URLhere").src = "customer.html";
        document.getElementById("URLhere").name = "CHECK_customer";    
    }
}
//Mpas frame
function changeURL_Maps() {
    if(document.getElementById("URLhere").name !== "CHECK_maps"){
        document.getElementById("URLhere").src = "maps.html";
        document.getElementById("URLhere").name = "CHECK_maps";    
    }
}
//Calculates frame
function changeURL_Calculates() {
    if(document.getElementById("URLhere").name !== "CHECK_calculates"){
        document.getElementById("URLhere").src = "calculates.html";
        document.getElementById("URLhere").name = "CHECK_calculates";    
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
    if(document.getElementById("URLhere").name !== "CHECK_point"){
        document.getElementById("URLhere").src = "point.html";
        document.getElementById("URLhere").name = "CHECK_point";    
    }
}

//Manual frame
function changeURL_Manual() {
    if(document.getElementById("URLhere").name !== "CHECK_manual"){
        document.getElementById("URLhere").src = "manual.html";
        document.getElementById("URLhere").name = "CHECK_manual";    
    }
}

//Setting frame
function changeURL_Setting() {
    if(document.getElementById("URLhere").name !== "CHECK_setting"){
        document.getElementById("URLhere").src = "setting.html";
        document.getElementById("URLhere").name = "CHECK_setting";    
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