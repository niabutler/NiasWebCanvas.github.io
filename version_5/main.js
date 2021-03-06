console.log("main.js is called")

var D = new ControlObject(350, 20, 800, 650)
var B = new Button(30, 25, 300, 50, "Rectangle", "rgb(128,128,128)", "rgb(255,255,255)", "rgb(249,241,241)");
var B2 = new Button(30, 90, 300, 50, "Circle", "rgb(128,128,128)", "rgb(255,255,255)", "rgb(249,241,241)");
var B3 = new Button(30, 155, 300, 50, "Ellipse", "rgb(128,128,128)", "rgb(255,255,255)", "rgb(249,241,241)");
var B4 = new Button(30, 220, 300, 50, "Star", "rgb(128,128,128)", "rgb(255,255,255)", "rgb(249,241,241)");

var swatch_list = []
var s = 33;
console.log(colArray)
for(var i=0; i<colArray.length; i++){
    for(var j=0; j<colArray[i].length; j++){
        swatch_list.push(new Swatch(10+s*i, 540+s*j, 27, "rgb(75,75,75)", colArray[i][j]))
        }
    }


function animate(){
    ctx.clearRect(0, 0, width, height);
    D.update();
    B.update();
    B2.update();
    B3.update();
    B4.update();
    for(var i=0; i<swatch_list.length ; i++){
        swatch_list[i].update();
    }
    window.requestAnimationFrame(animate);
}
animate();


