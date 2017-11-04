
var checkHomeIsSame = true;
var checkH;
onmessage = function(event){
    checkH = event.data;
    

    function CheckHomeWebWorker(){





        if(checkH !== "home"){
            checkHomeIsSame = false;
         }
        postMessage(checkHomeIsSame);
        
    }
    CheckHomeWebWorker();
}






