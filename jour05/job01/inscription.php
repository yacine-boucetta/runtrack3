<?php require 'user.php';?>
<?php 

if(empty($_POST)){
    $_POST['password']='';
    $_POST['password2']='';
    $_POST['nom']='';
    $_POST['prenom']='';
    $_POST['email']='';
}
if(isset($_POST)){
$password=$_POST['password'];
$password2=$_POST['password2'];
$nom=$_POST['nom'];
$prenom=$_POST['prenom'];
$email=$_POST['email'];
}
$signup= new User();
$signup-> signUp($password,$nom,$prenom,$email,$password2)?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="./js/register.js"></script>
</head>


<body>

    <form method="POST" >
        <label for="nom">Nom:</label>
        <input type=text name="nom"></input>
        <p></p>

        <label for="prenom">Prenom:</label>
        <input type=text name="prenom"></input>
        <p></p>

        <label for="email">Email:</label>
        <input type=email name="email"></input>
        <p></p>

        <label for="password">password:</label>
        <input type=password name="password"></input>
        <label for="password2">confirmation password:</label>
        <input type=password name="password2"></input>
        <p>le mot de passe doit contenir un caractere special</p>
        <p>le mot de passe doit contenir au moins un caractere minuscule</p>
        <p>le mot de passe doit contenir au moins un caractere majuscule</p>
        <p>le mot de passe doit contenir au moins 8 caracteres</p>
        <p>le mot de passe doit contenir au moins 1 chiffre</p>
        
        
<input type="submit" name="submit" value="inscription"></input>
        
    </form>
    <p></p>
</body>

</html>

