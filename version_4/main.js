console.log("main.js is called")

var D = new ControlObject(350, 20, 800, 650)
var B = new Button(30, 25, 300, 50, "Ellipse", "rgb(128,128,128)", "rgb(255,255,255)", "rgb(251,247,245)");
var B2 = new Button(30, 90, 300, 50, "Rectangle", "rgb(128,128,128)", "rgb(255,255,255)", "rgb(251,247,245)");


var swatch_list = []
var s = 33;
console.log(colArray)
for(var i=0; i<colArray.length; i++){
    console.log("first loop")
    for(var j=0; j<colArray[i].length; j++){
        console.log("Second loop")
        swatch_list.push(new Swatch(10+s*i, 540+s*j, 27, "rgb(75,75,75)", colArray[i][j]))
        console.log("new swatch has been instantiated")
        
        }
    }


    

function animate(){
    ctx.clearRect(0, 0, width, height);
    D.update();
    B.update();
    B2.update();
    for(var i=0; i<swatch_list.length ; i++){
        swatch_list[i].update();
        //console.log("new button has been instansiated")
        //console.log(swatch_list)
    }
    window.requestAnimationFrame(animate);
}
animate();





/*
for(var i=0; i<this.col.length; i++){
    for(var j=0; j<this.col[i].length; j++){
        new Swatch(100, 400, 50, "rgb(0,0,0", this.col[i][j] )
        this.drawSquare(this.x+s*i, this.y+s*j, s, this.col[i][j])
    }
}

/*
var name_list = ["blue", "orange", "pink"]
var col_list = [colArray[5][3], colArray[1][3], colArray[7][3]];
var button_list = []
var x = 50;
var y = 200;
var w = 200;
var h = 50;
for(var i=0 ; i<name_list.length ; i++){
    var one =  colArray[9][0]
    var two = colArray[6][3]
    var three = col_list[i]
    
        button_list.push( new Button(x,y+i*h, w, h, name_list[i], one, col_list[i], col_list[i] ))

    
}*/
