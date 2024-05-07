<?php
// Kullanıcı adı ve şifre kontrolü için sabitler
$valid_username = "kullanici";
$valid_password = "sifre";

// Post edilen kullanıcı adı ve şifreyi alın
if(isset($_POST['username']) && isset($_POST['password'])){
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Kullanıcı adı ve şifre doğruysa
    if($username === $valid_username && $password === $valid_password){
        echo "Hoşgeldin, $username!";
    } else {
        // Kullanıcı adı veya şifre yanlışsa yeniden yönlendir
        header("Location: login.html");
        exit();
    }
} else {
    // Post edilen veri yoksa yeniden yönlendir
    header("Location: login.html");
    exit();
}
?>
