<?php

require 'db.php';





class User{







function signUp($password,$prenom,$nom,$email) {

    $message='';
    
    if (isset($_POST['submit'])) {   
        if(empty($_POST['password'])||empty($_POST['nom'])||empty($_POST['email'])||empty($_POST['prenom'])){
            $message='veuillez remplir tout les champs';
        return $message;
    }
        
        $password=$_POST['password'];
        $uppercase = preg_match('@[A-Z]@', $password);
        $lowercase = preg_match('@[a-z]@', $password);
        $number    = preg_match('@[0-9]@', $password);

    if(!$uppercase || !$lowercase || !$number || strlen($password) < 6) {
            $message = "le mot de passe n'est pas conforme";
            return $message;
    }else {
            $password = htmlspecialchars(password_hash($_POST['password'], PASSWORD_BCRYPT));
            $email = htmlspecialchars($_POST['email'], ENT_QUOTES, "ISO-8859-1");
            $prenom = htmlspecialchars($_POST['prenom'], ENT_QUOTES, "ISO-8859-1");
            $nom = htmlspecialchars($_POST['nom'], ENT_QUOTES, "ISO-8859-1");
            $dbase=connect();

    $sqlinsert = "INSERT INTO utilisateur (password,nom,prenom,email) VALUES(:password,:nom,:email,:prenom)";
    $signUp = $dbase->prepare($sqlinsert);
    $signUp->execute(array(
        ":password" => $password,
        ":nom" => $nom,
        ":prenom" => $prenom,
        ":email" => $email,
    ));
    };
    return $message; 

    }


}}