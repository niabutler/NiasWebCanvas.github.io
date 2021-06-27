console.log("main.js is called")

var D = new ControlObject(350, 20, 800, 650)
var B = new Button(30, 25, 300, 40, "Rectangle", "rgb(128,128,128)", "rgb(255,255,255)", "rgb(249,241,241)");
var B2 = new Button(30, 80, 300, 40, "Circle", "rgb(128,128,128)", "rgb(255,255,255)", "rgb(249,241,241)");
var B3 = new Button(30, 135, 300, 40, "Ellipse", "rgb(128,128,128)", "rgb(255,255,255)", "rgb(249,241,241)");
var B4 = new Button(30, 190, 300, 40, "Star", "rgb(128,128,128)", "rgb(255,255,255)", "rgb(249,241,241)");
var T = new Text("Paintbrush", 30, 250, 140, 30, "rgb(128,128,128)")
var C1 = new CircleButton(200, 265, 10, "rgb(128,128,128)", "rgb(112,128,144)", "radius 1")
var C2 = new CircleButton(240, 265, 13, "rgb(128,128,128)", "rgb(112,128,144)", "radius 2")
var C3 = new CircleButton(290, 265, 17, "rgb(128,128,128)", "rgb(112,128,144)", "radius 3")
var T2 = new Text("Line", 30, 300, 140, 30, "rgb(128,128,128)")
var C4 = new CircleButton(200, 315, 10, "rgb(128,128,128)", "rgb(61,68,92)", "radius 4")
var C5 = new CircleButton(240, 315, 13, "rgb(128,128,128)", "rgb(61,68,92)", "radius 5")
var C6 = new CircleButton(290, 315, 17, "rgb(128,128,128)", "rgb(61,68,92)", "radius 6")


var swatch_list = []
var s = 33;
console.log(colArray)
for(var i=0; i<colArray.length; i++){
    for(var j=0; j<colArray[i].length; j++){
        swatch_list.push(new Swatch(10+s*i, 540+s*j, 27, "rgb(75,75,75)", colArray[i][j]))
        }
    }

/*var button_list =[]
for(var i=0; i<buttons.length; i++){
    button_list.push(
        [new Button(30, 25, 300, 40, "Rectangle", "rgb(128,128,128)", "rgb(255,255,255)", "rgb(249,241,241)")]
        new Button(30, 80, 300, 40, "Circle", "rgb(128,128,128)", "rgb(255,255,255)", "rgb(249,241,241)");
        new Button(30, 135, 300, 40, "Ellipse", "rgb(128,128,128)", "rgb(255,255,255)", "rgb(249,241,241)");
        new Button(30, 190, 300, 40, "Star", "rgb(128,128,128)", "rgb(255,255,255)", "rgb(249,241,241)");
        //var B5 = new Button(30, 300, 140, 30, "Paintbrush", "rgb(128,128,128)", "rgb(255,255,255)", "rgb(249,241,241)");
        new Text("Paintbrush", 30, 250, 140, 30, "rgb(128,128,128)")
        new CircleButton(200, 265, 10, "rgb(128,128,128)", "rgb(112,128,144)", "radius 1")
        new CircleButton(240, 265, 13, "rgb(128,128,128)", "rgb(112,128,144)", "radius 2")
        new CircleButton(290, 265, 17, "rgb(128,128,128)", "rgb(112,128,144)", "radius 3")
        new Text("Line", 30, 300, 140, 30, "rgb(128,128,128)")
        new CircleButton(200, 315, 10, "rgb(128,128,128)", "rgb(61,68,92)", "radius 4")
        new CircleButton(240, 315, 13, "rgb(128,128,128)", "rgb(61,68,92)", "radius 5")
        new CircleButton(290, 315, 17, "rgb(128,128,128)", "rgb(61,68,92)", "radius 6")
    )
}*/


function animate(){
    ctx.clearRect(0, 0, width, height);
    D.update();
    B.update();
    B2.update();
    B3.update();
    B4.update();
    C1.update();
    C2.update();
    C3.update();
    C4.update();
    C5.update();
    C6.update();
    T.update();
    T2.update();
    for(var i=0; i<swatch_list.length ; i++){
        swatch_list[i].update();
    }

    /*for(var i=0; i<swatch_list.length ; i++){
        button_list[i].update();
    }*/

    window.requestAnimationFrame(animate);
}
animate();


