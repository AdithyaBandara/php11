<?php
$emi= $_POST('e','${email}');
$pw =$_POST('p','${password}');

if( $emi == "adithyabandara@gmail.com" & $pw = "123"){
    echo ("Login Sucess");
}else{
    echo("Invalid Email or Password");
}


?>



