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
    <table>
        <thead>
            <tr>
                <th>
                    id
                </th>
                <th>
                    name french
                </th>
                <th>
                    name english
                </th>
                <th>
                    name japanese
                </th>
                <th>
                    name chinese
                </th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>

    <form method="post">
        <input type=text name="id">id</input>
        <input type=text name="nom">nom</input>

        <select id='type' placeholder='type'></select>
        <button id='button' type="button">filtrer</button>
    </form>

</body>

</html>