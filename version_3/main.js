console.log("main.js is called")

var D = new ControlObject(350, 20, 800, 650)
//var E = new Ellipse(600, 300, 10, 10,  0, 0, 2 * Math.PI, "rgb(255, 50, 4");
//ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, counterclockwise]);
var B = new Button(30, 25, 300, 50, "Ellipse", "rgb(255, 255, 255)", "rgb(128,128,128)", "rgb(28,168,28)");
var B2 = new Button(30, 90, 300, 50, "Rectangle", "rgb(255, 255, 255)", "rgb(128,128,128)", "rgb(28,168,28)");


function animate(){
    ctx.clearRect(0, 0, width, height);
    D.update();
    //E.update();
    B.update();
    B2.update();
    window.requestAnimationFrame(animate);
}
animate();
