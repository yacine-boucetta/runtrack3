<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="script.js"></script>
</head>


<body>
    <header>
        <?php if (!isset($_SESSION['user'])) {?>
       <a href=inscription.php>inscription</a>
       <a href=connexion.php>connexion</a>
       <?php } ?>
</header>
    <p><?php if (isset($_SESSION['user'])) {
            echo "bonjour" . $prenom;
        }
        $prenom ?>
    <p>
    
</body>

</html>