function calc(){
    var num = document.getElementById("num").value;
    // console.log(typeof(Number(num)))
    document.getElementById("res").innerHTML = Number(num).toString(2);
}