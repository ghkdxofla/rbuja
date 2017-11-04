//clientInfo
var clientInfo = {clientName: "", phoneNumber: ""};

function clientAdd(name, phone, number) {
    clientInfo.clientName = name;
    clientInfo.phoneNumber = phone;
    return var clientNumber
}
//clientArray
var clientArray = [""];

function clientSave(id) {
    if (clientArray[0] === "") {
        clientArray[0] = id;
    } else {
        clientArray[clientArray.length] = id;
    }
}

function clientDelete(id) {
    delete clientDelete[id];
}
