function rgb(){
    var hex = document.getElementById("col").value;
    document.getElementById("hex").innerHTML = hex;
    var rgb = "";
    // r - RED
    var r = hex.substr(1,2);
    var rc = parseInt(r,16);
    if(rc.toString().length < 3){
        if(rc.toString().length < 2){
        // console.log("00"+rc);
        rgb += "00"+rc+",";
        }else{
            // console.log("0"+rc);
            rgb += "0"+rc+",";
        }
    }else{
    // console.log(rc);
    rgb += rc+",";
    }

    // g - GREEN
    var g = hex.substr(3,2);
    var gc = parseInt(g,16);
    if(gc.toString().length < 3){
        if(gc.toString().length < 2){
        // console.log("00"+gc);
        rgb += "00"+gc+",";
        }else{
            // console.log("0"+gc);
            rgb += "0"+gc+",";
        }
    }else{
    // console.log(gc);
    rgb += gc+",";
    }

    // b - BLUE
    var b = hex.substr(5,2);
    var bc = parseInt(b,16);
    if(bc.toString().length < 3){
        if(bc.toString().length < 2){
        // console.log("00"+bc);
        rgb += "00"+bc;
        }else{
            // console.log("0"+bc);
            rgb += "0"+bc;
        }
    }else{
    // console.log(bc);
    rgb += bc;
    }
    //  var g = hex.substr(3,2);
    //  console.log(g);
    //  var b = hex.substr(5,2);
    //  console.log(b);
    // console.log(rgb);
    document.getElementById("rgb").innerHTML = rgb;
}