$.noConflict();

var width = window.innerWidth;
var height = window.innerHeight;

jQuery(document).ready(function($) {
    
    $("#content").width(width).height(height);
    //$("#3darea").width(window.innerWidth).height(window.innerHeight);
    $("#helptext").css("top", window.innerHeight - 74);
    main($);
});

function main ($) {



    // create the 3d engine
    var engine = new CL3D.CopperLicht('3darea');
    initWebGL(document.getElementById("3darea"));
    gl.viewport(0, 0, width, height);
    

    if (!engine.initRenderer())
        return; // this browser doesn't support WebGL

    // add a new 3d scene

    var scene = new CL3D.Scene();
    engine.addScene(scene);

    scene.setBackgroundColor(CL3D.createColor(43, 43, 43, 43));
    scene.setRedrawMode(CL3D.Scene.REDRAW_WHEN_SCENE_CHANGED);

    // add a transparent billboard scene node with a text sign
    for (var i = 0; i < 75; ++i)
    {
        var billboard = new CL3D.BillboardSceneNode();
        billboard.setSize(10, 10);
        billboard.Pos.X = Math.random() * 80 - 40;
        billboard.Pos.Y = Math.random() * 80 - 40;
        billboard.Pos.Z = Math.random() * 80 - 40;
        billboard.getMaterial(0).Tex1 = engine.getTextureManager().getTexture("assets/img/particle2.png", true);
        billboard.getMaterial(0).Type = CL3D.Material.EMT_TRANSPARENT_ADD_COLOR;
        scene.getRootSceneNode().addChild(billboard);
    }

    // add a user controlled camera with a first person shooter style camera controller
    var cam = new CL3D.CameraSceneNode();
    cam.Pos.X = 50;
    cam.Pos.Y = 20;

    var animator = new CL3D.AnimatorCameraFPS(cam, engine);
    cam.addAnimator(animator);
    animator.lookAt(new CL3D.Vect3d(0, 20, 0));

    scene.getRootSceneNode().addChild(cam);
    scene.setActiveCamera(cam);

    // draw handler
    var pos3d = new CL3D.Vect3d(0, 0, 0);

    engine.OnAnimate = function()
    {
        var element = document.getElementById('originlabel');
        if (element)
        {
            // set the position of the label to the 2d position of the 3d point

            var pos2d = engine.get2DPositionFrom3DPosition(pos3d);
            var hide = false;

            if (pos2d)
            {
                //console.log("pos2d.X = " + pos2d.X);
                //console.log("pos2d.Y = " + pos2d.Y);
                //console.log("width = " + CL3D.width);
                //console.log("SizeAbsoluteHeight = " + CL3D.SizeAbsoluteHeight);
                //console.log("SizeAbsoluteWidth = " + CL3D.SizeAbsoluteWidth);
                //console.log("SizeRelativeHeight = " + CL3D.SizeRelativeHeight);
                //console.log("SizeRelativeWidth = " + CL3D.SizeRelativeWidth);
                //console.log("sizeX = " + CL3D.sizeX);
                //console.log("sizeY = " + CL3D.sizeY);
                element.style.left = pos2d.X;
                element.style.top = pos2d.Y;

                // hide if outside of the border
                hide = pos2d.X < 0 || pos2d.Y < 0 ||
                        pos2d.X > engine.getRenderer().getWidth() - 60 ||
                        pos2d.Y > engine.getRenderer().getHeight() - 20;
            }
            else
                hide = true;

            element.style.display = hide ? 'none' : 'block';
            //var canvas = document.getElementById('3darea');
            //CL3D.gl.viewport(0, 0, canvas.width, canvas.height);
        }
    }
}

function initWebGL(canvas) {
    gl = null;

    try {
        // Try to grab the standard context. If it fails, fallback to experimental.
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    }
    catch (e) {
    }
}