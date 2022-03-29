<?php require 'user.php';?>
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
    <form method="post" >
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
        <p></p>
        
        <label for="password2">password:</label>
        <input type=password name="password2"></input>

        <input type="submit" name="submit" value="inscription"></input>
    </form>
    <p></p>
</body>

</html>

