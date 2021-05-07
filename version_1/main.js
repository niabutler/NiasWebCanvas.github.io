console.log("main.js is called")

var D = new ControlObject()


function animate(){
    ctx.clearRect(0, 0, width, height);
    D.update();
    window.requestAnimationFrame(animate);
} 

animate();

