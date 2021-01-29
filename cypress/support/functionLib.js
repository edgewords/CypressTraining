//Module for common functions

function getDate(){
    let today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //As January is 0.
    var yyyy = today.getFullYear();

    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+dd+yyyy);
}

//Export - ES6 format
const _getDate = getDate;
export { _getDate as getDate };