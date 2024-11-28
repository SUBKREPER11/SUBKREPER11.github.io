var myVar = setInterval(function() {
    myTimer();
  }, 0000);
  
  function myTimer() {
    var d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
  }