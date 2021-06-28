console.log("main.js is called")

var D = new ControlObject(350, 20, 800, 650)
var T3 = new Text("Polygon - no. of sides", 165, 25, 30, 40, "rgb(128,128,128)")
var B6 = new Button(25, 70, 60, 40, 3, "rgb(128,128,128)", "rgb(255,255,255)", "rgb(249,241,241)");
var B7 = new Button(105, 70, 60, 40, 5, "rgb(128,128,128)", "rgb(255,255,255)", "rgb(249,241,241)");
var B8 = new Button(185, 70, 60, 40, 6, "rgb(128,128,128)", "rgb(255,255,255)", "rgb(249,241,241)");
var B9 = new Button(265, 70, 60, 40, 8, "rgb(128,128,128)", "rgb(255,255,255)", "rgb(249,241,241)");
//------------------------------------------------------------------------------------------------------------
var B = new Button(25, 125, 300, 40, "Rectangle", "rgb(128,128,128)", "rgb(255,255,255)", "rgb(249,241,241)");
var B2 = new Button(25, 175, 300, 40, "Circle", "rgb(128,128,128)", "rgb(255,255,255)", "rgb(249,241,241)");
var B3 = new Button(25, 225, 300, 40, "Ellipse", "rgb(128,128,128)", "rgb(255,255,255)", "rgb(249,241,241)");
var B4 = new Button(25, 275, 300, 40, "Star", "rgb(128,128,128)", "rgb(255,255,255)", "rgb(249,241,241)");
//------------------------------------------------------------------------------------------------------------
var T = new Text("Paintbrush", 30, 330, 140, 30, "rgb(128,128,128)")
var C1 = new CircleButton(200, 345, 10, "rgb(128,128,128)", "rgb(112,128,144)", "rad1")
var C2 = new CircleButton(240, 345, 13, "rgb(128,128,128)", "rgb(112,128,144)", "rad2")
var C3 = new CircleButton(290, 345, 17, "rgb(128,128,128)", "rgb(112,128,144)", "rad3")
//------------------------------------------------------------------------------------------------------------
var T2 = new Text("Line", 30, 370, 140, 30, "rgb(128,128,128)")
var C4 = new CircleButton(200, 388, 10, "rgb(128,128,128)", "rgb(61,68,92)", "rad4")
var C5 = new CircleButton(240, 388, 13, "rgb(128,128,128)", "rgb(61,68,92)", "rad5")
var C6 = new CircleButton(290, 388, 17, "rgb(128,128,128)", "rgb(61,68,92)", "rad6")
//------------------------------------------------------------------------------------------------------------
var B5 = new Button(25, 420, 300, 40, "Pinwheel", "rgb(128,128,128)", "rgb(255,255,255)", "rgb(249,241,241)");
var B10 = new Button(25, 480, 140, 40, "Restart", "rgb(128,128,128)", "rgb(255,255,255)", "rgb(249,241,241)");
var B11 = new Button(185, 480, 140, 40, "Undo", "rgb(128,128,128)", "rgb(255,255,255)", "rgb(249,241,241)");

var swatch_list = []
var s = 33;
for(var i=0; i<colArray.length; i++){
    for(var j=0; j<colArray[i].length; j++){
        swatch_list.push(new Swatch(10+s*i, 540+s*j, 27, "rgb(75,75,75)", colArray[i][j]))
        }
    }

var count = 0;

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
    T3.update();
    B6.update();
    B7.update();
    B8.update();
    B9.update();
    B5.update();
    B10.update();
    B11.update();
    for(var i=0; i<swatch_list.length ; i++){
        swatch_list[i].update();
        
    }
    

    window.requestAnimationFrame(animate);
}
animate();


