





         
        
        
        
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
    for(i = 0; i < arr.reClient.length; i++)
    {
        var indexStringRe = arr.reClient.indexOf(arr.reClient[i]);
        var indexNumberRe = 1 + indexStringRe;

        outRe += '<li onclick="ClientInfoTransfer(this)" class="all-client" id="re-client-' + 
            arr.reClient.indexOf(arr.reClient[i]) + 
            '"><div class="re-client-info">' +
            arr.reClient[i].name + '<br>' + 
            arr.reClient[i].cellular + '</div><div class="re-client-number">' + 
            indexNumberRe + '</div></li>';
    }
    for(i = 0; i < arr.elClient.length; i++)
    {
        var indexStringEl = arr.elClient.indexOf(arr.elClient[i]);
        var indexNumberEl = 1 + indexStringEl;

        outEl += '<li onclick="ClientInfoTransfer(this)" class="all-client" id="el-client-' + 
            arr.elClient.indexOf(arr.elClient[i]) + 
            '"><div class="el-client-info">' +
            arr.elClient[i].name + '<br>' + 
            arr.elClient[i].cellular + '</div><div class="el-client-number">' + 
            indexNumberEl + '</div></li>';
    }
    document.getElementById('JSON-reIndicator').innerHTML = outRe;
    document.getElementById('JSON-elIndicator').innerHTML = outEl;
}



//customer-client-function



function ClientInfoTransfer(CIT) {
    var indexPosition = CIT.getElementsByTagName("div");
    var i = indexPosition[1].innerHTML - 1;
    localStorage.setItem("cit", i);
}
    
    
function ClientInfoIdentifier(arr){    
    var out = "";
    var i = "";
    var indexCustomer = localStorage.getItem("cit");
    //alert(localStorage.getItem("cit"));
    i += indexCustomer;
    i *= 1;
    //var i = 3;
    
    

    out += '<li><span class="list-style-bold">이름: </span>' + arr.reClient[i].name + 
        '</li><li><span class="list-style-bold">번호: </span>' + arr.reClient[i].cellular
        + '</li><li><span class="list-style-bold">이메일: </span>' + 
        arr.reClient[i].emailAddress + 
        '</li><li><span class="list-style-bold">주소: </span>' + 
        arr.reClient[i].address + '</li>';
    document.getElementById('JSON-clientIndicator').innerHTML = out;
    
    
}


















                  
                        
                                
                        
                        
                        
                        
                        
                        
                           
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        