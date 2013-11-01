<?php
error_reporting(-1);
ini_set("display_errors", 1);

function __autoload($class_name) {
    include $class_name . '.php';
}
?>
<html>
    <head lang="en-US">
        <title>Testing page</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="assets/css/main.css" rel="stylesheet" media="screen">
        <script src="assets/js/copperlicht.js"></script>
        <script src="assets/js/jquery.js"></script>
        <script src="assets/js/window.js"></script>
    </head>
    <body style="margin: 0px">
        <div id="content">
            <canvas id="3darea">
            </canvas>
            <div id="helptext" class="textbox"> 
                Look with the mouse, move with the cursor keys or WASD. 
            </div> 
            <div id="originlabel" class="textbox"> 
                The Origin
            </div>
        </div>
    </body>
</html>