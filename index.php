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
        <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
        <link href="assets/css/main.css" rel="stylesheet" media="screen">
        <script src="bootstrap/js/bootstrap.min.js"></script>
        <script src="assets/js/jquery.js"></script>
        <script src="http://1ro.co:12345/socket.io/socket.io.js"></script>
    </head>
    <body onload="start()" style="background: #2a2a2a;">
        <canvas id="canvas" width="400" height="300" style="background: #fff;">
            Your browser does not support HTML5 Canvas / WebGL.
            <script>
        function start() {
            var canvas = document.getElementById("canvas");

            initWebGL(canvas);

            if (gl) {
                gl.clearColr(0.0, 0.0, 0.0, 1.0);
                gl.enable(gl.DEPTH_TEST);
                gl.depthFunc(gl.LEQUAL);
                gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
            }


        }

        function initWebGL(canvas) {
            // Initialize the global variable gl to null.
            gl = null;

            try {
                // Try to grab the standard context. If it fails, fallback to experimental.
                gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
            }
            catch (e) {
            }

            // If we don't have a GL context, give up now
            if (!gl) {
                alert("Unable to initialize WebGL. Your browser may not support it.");
            }
        }
            </script>
        </canvas>
    </body>
</html>