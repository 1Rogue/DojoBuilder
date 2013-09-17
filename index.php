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
        <script src="assets/js/window.js"></script>
        <script src="assets/js/jquery.js"></script>
    </head>
    <body onload="start();" style="background: #2a2a2a;">
        <canvas id="canvas" width="400" height="300" style="background: #fff;">
            Your browser does not support HTML5 Canvas / WebGL.
        </canvas>
    </body>
</html>