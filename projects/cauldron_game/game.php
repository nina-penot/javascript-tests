<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/mycss.css">
    <title>Document</title>
</head>

<body>

    <div class="game_cont">

        <div class="food_cont">
            <div class="food_basket" draggable="false"></div>
        </div>

        <div class="cauldron_container">
            <div class="cauldron"></div>
            <div class="cauldron_inv">
                <div class="cauldron_slot"></div>
                <div class="cauldron_slot"></div>
                <div class="cauldron_slot"></div>
                <div class="cauldron_slot"></div>
                <div class="cauldron_slot"></div>
            </div>
        </div>

        <div>
            <button onclick="clear_ingredients()">Clear ingredients</button>
            <button>Cook!</button>
        </div>

    </div>

    <script src="../../convenience/convenient_func.js"></script>
    <script src="./code/main.js"></script>
</body>

</html>