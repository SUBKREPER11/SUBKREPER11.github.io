function rgb(){
    var hex = document.getElementById("col").value;
    document.getElementById("hex").innerHTML = hex;
    var r = hex.substr(1,2);
    var rc = parseInt(r,16);
    if(rc.lenght < 3){
        console.log("00"+rc);
    }else{
    console.log(rc);
    }
     var g = hex.substr(3,2);
     console.log(g);
     var b = hex.substr(5,2);
     console.log(b);
}