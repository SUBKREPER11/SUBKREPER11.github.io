var myVar = setInterval(function() {
    myData();
  }, 0000);
  
  function myData() {
    // var dob = new Date("06/09/2004");  
    // var month_diff = Date.now() - dob.getTime();   
    // var age_dt = new Date(month_diff);      
    // var year = age_dt.getUTCFullYear();  
    // var age = Math.abs(year - 1970);  
    // document.getElementById("age").innerHTML = '<b>Wiek: </b>' + age + " lat. ";

    var name = "Jakub";
    var nick = "SUBKREPER11";
    // document.getElementById("name").innerHTML = '<b>Imie: </b>'+name;
    document.getElementById("nickname").innerHTML = nick;
  }
  