<?php
 
session_start();
 
if(isset($_GET['logout'])){    
     
    //wiadomosc wyjscia
    $logout_message = "<div class='msgln'><span class='left-info'>Urzytkownik <b class='user-name-left'>". $_SESSION['name'] ."</b> wyszedł.</span><br></div>";
    file_put_contents("./Addons/MSG/s.livTalk", $logout_message, FILE_APPEND | LOCK_EX);
     
    session_destroy();
    header("Location: LivTalk.php");
}
 
if(isset($_POST['enter'])){
    if($_POST['name'] != ""){
        $_SESSION['name'] = stripslashes(htmlspecialchars($_POST['name']));
    }
    else{
        echo '<span class="error">Podaj nick by kontynuować</span>';
    }
}
 
function loginForm(){
    echo
    '<div id="loginform">
    <p>Podaj nick</p>
    <form action="LivTalk.php" method="post">
      <label for="name">Nick&colon;</label>
      <input type="text" name="name" id="name" />
      <input type="submit" name="enter" id="enter" value="Wejdź" />
    </form>
  </div>';
}
 
?>
 
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./Addons/style.css">
    <script src="./Addons/script.js"></script>
    <title>LivTalk</title>
    <link rel="stylesheet" href="./Addons.
    /LivTalk.css" />
    </head>
    <body>
    <div class="navbar">
        <a href="./index.html">Start</a>
        <a href="./media.html">Media</a>
        <a class="active" href="./LivTalk.php">LivTalk</a>
        <div id="clock"></div>
      </div>
    <div id="body">

    </div>
    <br>
    <?php
    if(!isset($_SESSION['name'])){
        loginForm();
    }
    else {
    ?>
        <div id="wrapper">
            <div id="menu">
                <p class="welcome">Witaj, <b><?php echo $_SESSION['name']; ?></b></p>
                <p class="logout"><a id="exit" href="#">Opuść chat</a></p>
            </div>
 
            <div id="chatbox">
            <?php
            if(file_exists("./Addons/MSG/s.livTalk") && filesize("./Addons/MSG/s.livTalk") > 0){
                $contents = file_get_contents("./Addons/MSG/s.livTalk");          
                echo $contents;
            }
            ?>
            </div>
 
            <form name="message" action="">
                <input name="usermsg" type="text" id="usermsg" />
                <input name="submitmsg" type="submit" id="submitmsg" value="Wyślij" />
            </form>
        </div>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script type="text/javascript">
            // jQuery Document
            $(document).ready(function () {
                $("#submitmsg").click(function () {
                    var clientmsg = $("#usermsg").val();
                    $.post("post.php", { text: clientmsg });
                    $("#usermsg").val("");
                    return false;
                });
 
                function loadLog() {
                    var oldscrollHeight = $("#chatbox")[0].scrollHeight - 20;
 
                    $.ajax({
                        url: "./Addons/MSG/s.livTalk",
                        cache: false,
                        success: function (html) {
                            $("#chatbox").html(html); //wsadz log do chatbox
 
                            //Auto-scroll           
                            var newscrollHeight = $("#chatbox")[0].scrollHeight - 20;
                            if(newscrollHeight > oldscrollHeight){
                                $("#chatbox").animate({ scrollTop: newscrollHeight }, 'normal'); //Autoscroll do samego dolu
                            }   
                        }
                    });
                }
 
                setInterval (loadLog, 2500);
 
                $("#exit").click(function () {
                    var exit = confirm("Czy na pewno chcesz opuścić chat?");
                    if (exit == true) {
                    window.location = "LivTalk.php?logout=true";
                    }
                });
            });
        </script>
    </body>
</html>
<?php
}
?>