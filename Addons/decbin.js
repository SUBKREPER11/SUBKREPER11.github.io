function calc(){
    var num = document.getElementById("num").value;
    if(document.getElementById("b2d").checked == false){
    document.getElementById("res").innerHTML = Number(num).toString(2);
    }else{
        document.getElementById("res").innerHTML = parseInt(Number(num),2);
    }
}
function b2dd2b(){
    if(document.getElementById("b2d").checked == false){
        document.title = "Dec2Bin";
    }else{
        document.title = "Bin2Dec";
    }
}