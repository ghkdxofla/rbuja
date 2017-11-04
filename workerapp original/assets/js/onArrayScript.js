





         
        
        
        
//certify-client-list
/*
var certifyClient = new XMLHttpRequest();

var clientFile = "client.txt";


certifyClient.onreadystatechange = function () {
    if (certifyClient.readyState == 4 && certifyClient.status == 200) {
        var myArray = JSON.parse(certifyClient.responseText);
        ClientList(myArray);
        
    }
}
certifyClient.open("GET", clientFile, true);
certifyClient.send();
*/





//certify-client-function
function ClientList(arr) {
    var outRe ="";
    var outEl ="";
    var i;
    for(i = 0; i < arr.response.requests.length; i++) {
        var indexStringRe = arr.response.requests.indexOf(arr.response.requests[i]);
        var indexNumberRe = 1 + indexStringRe;

        outRe += '<li class="all-client" id="re-client-' + 
            arr.response.requests.indexOf(arr.response.requests[i]) + 
            '"><div onclick="ClientInfoTransfer(this)" tabindex="-1" class="re-client-info">' +
            arr.response.requests[i].requester_realname + '<br>' + 
            arr.response.requests[i].requester_phone + '</div><div class="re-client-number">' + 
            indexNumberRe + '</div><div class="all-client-button" tabindex="-1"><div class="button-background"><br></div><div onmousedown="buttonDownRe(this)" class="button-style-re client-calculates">계산하기</div><div onmousedown="buttonDownRe(this)" class="button-style-re client-customer">고객정보</div><div onmousedown="buttonDownRe(this)" class="button-style-re client-map">지도보기</div></div><span class="list-client-index">' + arr.response.requests[i].request_id + '</span></li>';
    }
    for(i = 0; i < arr.response.requests.length; i++) {
        var indexStringEl = arr.response.requests.indexOf(arr.response.requests[i]);
        var indexNumberEl = 1 + indexStringEl;

        outEl += '<li class="all-client" id="el-client-' + 
            arr.response.requests.indexOf(arr.response.requests[i]) + 
            '"><div onclick="ClientInfoTransfer(this)" tabindex="-1" class="el-client-info">' +
            arr.response.requests[i].requester_realname + '<br>' + 
            arr.response.requests[i].requester_phone + '</div><div class="el-client-number">' + 
            indexNumberEl + '</div><div class="all-client-button" tabindex="-1"><div class="button-background"><br></div><div onmousedown="buttonDownEl(this)" class="button-style-el client-collects">수거하기</div><div onmousedown="buttonDownEl(this)" class="button-style-el client-customer">고객정보</div><div onmousedown="buttonDownEl(this)" class="button-style-el client-map">지도보기</div></div><span class="list-client-index">' + arr.response.requests[i].request_id + '</span></li>';
    }
    document.getElementById('JSON-reIndicator').innerHTML = outRe;
    document.getElementById('JSON-elIndicator').innerHTML = outEl;
}


//customer-client-function


//when certify list click, button menu will pop-up!!!!!!!!!!!!!!!
function ClientInfoTransfer(CIT) {
    var indexPosition = CIT.parentNode.getElementsByTagName("div");
    var indexClient = CIT.parentNode.getElementsByTagName("span");
    var i = indexClient[0].innerHTML;
    localStorage.setItem("cit", i);


    indexPosition[2].style.display='block';
    
    

    $(indexPosition[2]).focus();

    if(localStorage.getItem("whichBtn") == null){
        localStorage.setItem("whichBtn", 0);
    }
    

    
    indexPosition[2].addEventListener("blur", function(){
        indexPosition[2].style.display='none';
        
    
        
    });

    
}


    

function certifyClientCustomer(arr){
     var checkPicker = localStorage.getItem("picker");
     if(checkPicker == null){
         checkPicker = localStorage.setItem("picker", "rePicker");
     }
     var out = "";
     var i;
     var j;
     var indexCustomer = localStorage.getItem("cit");
     //alert(localStorage.getItem("cit"));
     var isReOrEl;
     if(localStorage.getItem("picker") == "rePicker"){
         //--------------caution!-----------------------------
         isReOrEl = arr.response.requests;
     }
     else if(localStorage.getItem("picker") == "elPicker"){
         isReOrEl = arr.response.requests;
     }



     for(j=0; j<isReOrEl.length;j++){
         if(indexCustomer == isReOrEl[j].request_id){
             i = isReOrEl.indexOf(isReOrEl[j]);
             j = isReOrEl.length;
         }
     }
     out += '<li><span class="list-style-bold">이름: </span>' + isReOrEl[i].requester_realname + 
        '</li><li><span class="list-style-bold">번호: </span>' + isReOrEl[i].requester_phone
        + '</li><li><span class="list-style-bold">신청일: </span>' + 
        isReOrEl[i].pickup_date + 
        '</li><li><span class="list-style-bold">주소: </span>' + 
        isReOrEl[i].requester_address + '</li><li style="display: none;"><span style="display: none;" id="client-index-check">' + 
        indexCustomer + '</span></li><li style="display: none;"><span style="display: none;" id="client-visit-check">not_certified</span></li>';
    
    return out;

}

    
function certifyListToCustomer(out){
    var docOrigin = document.getElementById("URLhere2").contentDocument;

    docOrigin.getElementById('JSON-clientIndicator').innerHTML = out;
}

function findListToCustomer(out){
    var docOrigin = parent.document.getElementById("URLhere2").contentDocument;
    
     docOrigin.getElementById('JSON-clientIndicator').innerHTML = out;
}




function certifyClient(arr){
 
    var outName = "";
    var i;

     var j;
     var isReOrEl;
     if(localStorage.getItem("picker") == "rePicker"){
         //--------------caution!-----------------------------
         isReOrEl = arr.response.requests;
     }
     else if(localStorage.getItem("picker") == "elPicker"){
         isReOrEl = arr.response.requests;
     }
     var clientIndex = localStorage.getItem("cit");

     for(j=0; j<isReOrEl.length;j++){
         if(clientIndex == isReOrEl[j].request_id){
             i = isReOrEl.indexOf(isReOrEl[j]);
             j = isReOrEl.length;
         }
     }
     if(localStorage.getItem("picker") == "rePicker"){
        outName += '<span id="calculates-customer-name">' + isReOrEl[i].requester_realname + '</span> 님';

        var docOrigin = document.getElementById("URLhere4").contentDocument;
        docOrigin.getElementById("calculates-client-section").innerHTML = outName;
     }
     else if(localStorage.getItem("picker") == "elPicker"){
        outName += '<span id="collects-customer-name">' + isReOrEl[i].requester_realname + '</span> 님';

        var docOrigin = document.getElementById("URLhere8").contentDocument;
        docOrigin.getElementById("collects-client-section").innerHTML = outName;
     }


}



function certifyProductCalculates(arr){

    var outList = "";

    var i;

	for(i=0; i < arr.response.length; i++){
		var numberPoint = Number(arr.response[i][1]);

		outList += '<div class="calculates-list-style"><div class="list-product-calculates">' + arr.response[i][0] + '<br>[<span>' + numberPoint + 
			'</span>p]</div><div class="list-amount-calculates input-group input-group-sm"><input type="number" min="0" class="form-control" value=0 oninput="doCalculate(this)"></div><div class="list-point"></div></div>';
	}





    var docOrigin = document.getElementById("URLhere4").contentDocument;
    docOrigin.getElementById('JSON-calculatesIndicator').innerHTML = outList;

}
function certifyProductCollects(arr){
    var outPopup = "";
    var outList = "";

    var i;
    for(i=0; i < arr.elProduct.length; i++){

        outPopup += '<div onclick="buttonToggleChange(this)" class="collects-change-item">' + arr.elProduct[i].name + '<br>[<span>' + arr.elProduct[i].type + '</span>]</div><span class="el-index-popup">' + i + '</span>';
        
        outList += '<div class="collects-list-style"><div class="list-product-collects">' + arr.elProduct[i].name + '<br>[<span>' + arr.elProduct[i].type + '</span>]</div><div class="list-amount-collects input-group input-group-sm"><input type="number" min="0" class="form-control" value=0  oninput="doWeight(this)"><span style="display: none;">' + arr.elProduct[i].weight + '</span></div><span class="el-index-list">' + i + '</span></div>';
    }
    
    outList += '<div onmousedown="buttonDownChange(this)" class="button-style-change-item" id="button-change-item">항목변경</div>';
    



    var docOrigin = document.getElementById("URLhere8").contentDocument;
    docOrigin.getElementById('collects-change-list').innerHTML = outPopup;
    docOrigin.getElementById('JSON-collectsIndicator').innerHTML = outList

}

//--------------------------find script-------------------------------------

function searchInputContent(){

    if(location.hash == "#name"){
        $.ajax({
            type: 'GET',
            url: "client.txt",
            
            dataType: 'json',
            timeout: 5000,
            success: function(data) {
                var out = "";
                var i = "";
                var searchResult = 0;
                var findName = document.getElementById("find-client-name").value;
                var isReOrEl;
                if(localStorage.getItem("picker") == "rePicker"){
                    //--------------caution!-----------------------------
                    isReOrEl = data.response.requests;
                }
                else if(localStorage.getItem("picker") == "elPicker"){
                    isReOrEl = data.response.requests;
                }

                for (i=0; i<isReOrEl.length; i++){
                    if(isReOrEl[i].requester_realname == findName){
                        out += '<div onclick="findToCustomer(this)" class="find-list-style"><div class="list-client-name">' + isReOrEl[i].requester_realname + 
'</div><div class="list-client-cellular">' + isReOrEl[i].requester_phone + 
                            '</div><div class="list-client-address">' + isReOrEl[i].requester_address + '</div><span class="list-client-index">' + isReOrEl[i].request_id + '</span></div>';
                        searchResult++;
                        
                        
                        
                        
                        
                        
                    }
                }
                document.getElementById("JSON-findIndicator").innerHTML = out;
                document.getElementById("find-search-result").innerHTML = searchResult;

            }
        });



    }
    else if(location.hash == "#cellular"){
        $.ajax({
            type: 'GET',
            url: "client.txt",
            
            dataType: 'json',
            timeout: 5000,
            success: function(data) {
                var out = "";
                var i = "";
                var searchResult = 0;

                var findCellular = document.getElementById("find-client-cellular").value;
                var isReOrEl;
                if(localStorage.getItem("picker") == "rePicker"){
                    //--------------caution!-----------------------------
                    isReOrEl = data.response.requests;
                }
                else if(localStorage.getItem("picker") == "elPicker"){
                    isReOrEl = data.response.requests;
                }

                for (i=0; i<isReOrEl.length; i++){
                    if(isReOrEl[i].requester_phone == findCellular){
                        out += '<div onclick="findToCustomer(this)" class="find-list-style"><div class="list-client-name">' + isReOrEl[i].requester_realname + 
'</div><div class="list-client-cellular">' + isReOrEl[i].cellular + 
                            '</div><div class="list-client-address">' + isReOrEl[i].requester_address + '</div><span class="list-client-index">' + isReOrEl[i].request_id + '</span></div>';
                        searchResult++;

                    }
                }
                document.getElementById("JSON-findIndicator").innerHTML = out;
                document.getElementById("find-search-result").innerHTML = searchResult;

            }
        });


    }
    else if(location.hash == "#address"){
        $.ajax({
            type: 'GET',
            url: "client.txt",
            //data: document.getElementById("list-point-total").innerHTML,
            dataType: 'json',
            timeout: 5000,
            success: function(data) {
                var out = "";
                var i = "";
                var searchResult = 0;

                var findAddress = document.getElementById("find-client-address").value;
                var isReOrEl;
                if(localStorage.getItem("picker") == "rePicker"){
                    //--------------caution!-----------------------------
                    isReOrEl = data.response.requests;
                }
                else if(localStorage.getItem("picker") == "elPicker"){
                    isReOrEl = data.response.requests;
                }

                for (i=0; i<isReOrEl.length; i++){
                    if(isReOrEl[i].requester_address == findAddress){
                        out += '<div onclick="findToCustomer(this)" class="find-list-style"><div class="list-client-name">' + isReOrEl[i].requester_realname + 
'</div><div class="list-client-cellular">' + isReOrEl[i].requester_phone + 
                            '</div><div class="list-client-address">' + isReOrEl[i].requester_address + '</div><span class="list-client-index">' + isReOrEl[i].request_id + '</span></div>';
                        searchResult++;

                    }
                }
                document.getElementById("JSON-findIndicator").innerHTML = out;
                document.getElementById("find-search-result").innerHTML = searchResult;

            }
        });

    }
    
    
}






/*

function ClientInfoIdentifier(arr){    
    var out = "";
    var i = "";
    var indexCustomer = localStorage.getItem("cit");
    //alert(localStorage.getItem("cit"));
    i += indexCustomer;
    i *= 1;
    var checkPicker = localStorage.getItem("picker");
    if(checkPicker == null){
        checkPicker = localStorage.setItem("picker", "rePicker");
    }

    if(checkPicker == "rePicker"){
        out += '<li><span class="list-style-bold">이름: </span>' + arr.reClient[i].realname + 
            '</li><li><span class="list-style-bold">번호: </span>' + arr.reClient[i].cellular
            + '</li><li><span class="list-style-bold">신청일: </span>' + 
            arr.reClient[i].emailAddress + 
            '</li><li><span class="list-style-bold">주소: </span>' + 
            arr.reClient[i].address + '</li>';
        document.getElementById('JSON-clientIndicator').innerHTML = out;

    }
    else{

        out += '<li><span class="list-style-bold">이름: </span>' + arr.elClient[i].realname + 
            '</li><li><span class="list-style-bold">번호: </span>' + arr.elClient[i].cellular
            + '</li><li><span class="list-style-bold">신청일: </span>' + 
            arr.elClient[i].emailAddress + 
            '</li><li><span class="list-style-bold">주소: </span>' + 
            arr.elClient[i].address + '</li>';
        document.getElementById('JSON-clientIndicator').innerHTML = out;
    }
    
}
*/


//------------------------------------------
//------------------------------------------






















                  
                        
                                
                        
                        
                        
                        
                        
                        
                           
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        