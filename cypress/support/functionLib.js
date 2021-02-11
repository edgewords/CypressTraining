//Module for common functions
//This file was created as a simple demo

function getDate(){
    let today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //As January is 0.
    var yyyy = today.getFullYear();

    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+dd+yyyy);
}

function createUserID(){
    var text="";
    var range="abcdefghijklmnopqrstuvwxyz";
    for (var i=0;i<8;i++){
        text += range.charAt(Math.floor(Math.random() * range.length));
    }
    return text;
}

//Export - ES6 format
const _getDate = getDate;
const _createUserID = createUserID;
export { _getDate as getDate,
    _createUserID as createUserID };

