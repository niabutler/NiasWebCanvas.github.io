class Rectangle{
    constructor(x,y,w,h,col){
        // set variables to use
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.col = col;
    }
    update(){
        this.draw();
    }
    
    draw(){
    ctx.fillStyle = this.col;
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.w, this.h)
    ctx.fill();
}
}


class Polygon{
    constructor(xC, yC, r, n, col){
        this.r = r;
        this.xC = xC;
        this.yC = yC;
        this.n = n;
        this.col = col;
    }

    draw(){
        var y = 0;
        var x = 0;

        ctx.beginPath();
        ctx.lineWidth = 5;
        
        for(var i=0; i<this.n; i++){
            x = this.xC + this.r*Math.cos(i*2*Math.PI / this.n)
            y = this.yC + this.r*Math.sin(i*2*Math.PI / this.n)
            
            if(i==0){
                ctx.moveTo(x, y);
            }else{
                ctx.lineTo(x, y);
            }
               
        }
        ctx.closePath();
        ctx.fillStyle = this.col;
        ctx.fill();
    }

    update(){
        this.draw()
        
    }

}

class Line{
    constructor(x1, y1, x2, y2, w, col){
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        this.col = col;
        this.width = w;
    }

    update(){
        this.draw()
    }

    draw(){
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.strokeStyle = this.col;
        ctx.lineWidth = this.width;
        ctx.stroke();
    }

}



class Ellipse{
    // set variables to use
    constructor(x, y, w, h,  rotation, startAngle, endAngle, col){
        this.xC = x + w/2;
        this.yC = y + h/2;
        this.xR = w/2;
        this.yR = h/2;
        this.SA = startAngle;
        this.EA = endAngle;
        this.rotation = rotation;
        this.col = col;
    }
    update(){
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.ellipse(this.xC, this.yC, Math.abs(this.xR), Math.abs(this.yR), this.rotation, this.SA, this.EA)
        ctx.fillStyle = this.col;
        ctx.fill();
    }
}

class Circle{
    // set variables to use
    constructor(x, y, r,  rotation, startAngle, endAngle, col){
        this.xC = x;
        this.yC = y;
        this.r = r;
        this.SA = startAngle;
        this.EA = endAngle;
        this.rotation = rotation;
        this.col = col;
    }
    update(){
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.ellipse(this.xC, this.yC, Math.abs(this.r), Math.abs(this.r), this.rotation, this.SA, this.EA)
        ctx.fillStyle = this.col;
        ctx.fill();
    }
}



class Button{
    // set variables to use
    constructor(x, y, w, h, text, c1, c2, c3){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.text = text;
    this.outline = c1;
    this.fill = c2;
    this.over = c3;
   
    canvas.addEventListener('click', this.mClick.bind(this));
    canvas.addEventListener('mousemove', this.mMove.bind(this));

    this.xMouse = 0;
    this.yMouse = 0;
    this.inBounds = false;
}

mClick(e){
   
    if(this.inBounds){
        Button.clicked = this;
        Button.selected = this.text;
        CircleButton.selected = "";
    }
}

mMove(e){
    this.xMouse = e.offsetX;
    this.yMouse = e.offsetY;
    this.inBounds = this.inBoundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
  
}

inBoundsCheck(xM, yM, x, y, w, h){
    if(xM > x && xM < x+w && yM > y && yM < y+h){
        return true;
    }else{return false;
    }

}

update(){
    this.draw();
}

draw(){
    ctx.strokeStyle = this.outline;
    ctx.fillStyle = this.fill;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.w, this.h);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = this.outline;
    
    if(this.inBounds || Button.clicked == this){
        ctx.lineWidth = 10;
        ctx.fillStyle = this.over;
        ctx.fill();
        // set fill style for text
        ctx.fillStyle = this.outline;
    }else{
        ctx.fillStyle = this.fill; 
        ctx.fill();
        // set fill style for text
        ctx.fillStyle = this.outline;
    }

    var myFont = "bold 20px 'Trebuchet MS', Verdana, sans-serif ";
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.font=myFont;
    ctx.fillText(this.text, this.x + this.w/2, this.y + this.h/2);
}

}

Button.clicked = "";
Button.selected = "Rectangle";



class Text{
    // set variables to use
    constructor(text, x, y, w, h, col){
        this.text = text;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.textCol = col;
    }

    update(){
        this.draw()
    }

    draw(){
    var myFont = "bold 20px 'Trebuchet MS', Verdana, sans-serif ";
    ctx.fillStyle = this.textCol;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.font=myFont;
    ctx.fillText(this.text, this.x + this.w/2, this.y + this.h/2);
    }
}

class Swatch{
    // set variables to use
    constructor(x, y, s, c1, c2){
    this.x = x;
    this.y = y;
    this.s = s;
    //outline
    this.outline = c1;
    //fill
    this.fill = c2;
  
    canvas.addEventListener('click', this.mClick.bind(this));
    canvas.addEventListener('mousemove', this.mMove.bind(this));

    this.xMouse = 0;
    this.yMouse = 0;
    this.inBounds = false;
    this.outline_stroke = 2;
}


mClick(e){
    var swatchColour = this.fill;
    if(this.inBounds){
        Swatch.clicked = this;
        Swatch.selected = swatchColour;
    }
}


mMove(e){
    this.xMouse = e.offsetX;
    this.yMouse = e.offsetY;
    this.inBounds = this.inBoundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.s, this.s);
    if(this.inBounds == true || Swatch.clicked == this){
        this.outline_stroke = 4;
    }else{
        this.outline_stroke= 2;
    }
}


inBoundsCheck(xM, yM, x, y, w, h){
    if(xM > x && xM < x+w && yM > y && yM < y+h){
        return true;
    }else{
        return false;
    }
}

update(){
    this.drawSquare(this.x, this.y, this.s, this.fill);
}


drawSquare(x, y, s, col){
    ctx.fillStyle = col;
    ctx.lineWidth = this.outline_stroke;
    ctx.strokeStyle =  this.outline;
    ctx.beginPath();
    ctx.rect(x, y, s, s);
    ctx.fill();
    ctx.stroke();
}
}
Swatch.selected = "rgb(0,0,0)";


class Star{
    // set variables to use
    constructor(xC, yC, r, points, fillStyle){
        this.r = r;
        this.xC = xC;
        this.yC = yC;
        this.n = points;
        this.fillStyle = fillStyle;
    }

    draw(){
        var y = 0;
        var x = 0;
        var n = this.n * 2
        var r_small = this.r/3
        var R;

        ctx.beginPath();
        ctx.lineWidth = 5;

        for(var i=0; i<n; i++){
            if (i%2==0){
                R = this.r
            }else{
                R = r_small
            }
            x = this.xC + R*Math.cos(i*2*Math.PI / n)
            y = this.yC + R*Math.sin(i*2*Math.PI / n)
            
            if(i==0){
                ctx.moveTo(x, y);
            }else{
                ctx.lineTo(x, y);
            }     
        }

        ctx.closePath();
        ctx.fillStyle = this.fillStyle;
        ctx.fill();
    }

    update(){
        this.draw()
        
    }
}


// ------------------------------------------------------------------------------------------Point
class Point{
    // set variables to use
    constructor(r, col){
        this.r = r;
        this.col = col;
        this.xMouse = 0;
        this.yMouse = 0;
        this.circleSet = [];
        // listeners
        canvas.addEventListener('mousedown', this.mDown.bind(this));
        canvas.addEventListener('mousemove', this.mMove.bind(this));
        canvas.addEventListener('mouseup', this.mUp.bind(this));
        this.mouseDown = true;
        this.close = false;
    
    }

    mDown(e){
        // if the mouse is down set mouse down to true
        this.mouseDown = true;
    }

    mMove(e){
        // x and y variable is updated with current mouse position
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        if(this.mouseDown == true && this.close == false){
            var temp = new Ellipse(this.xMouse, this.yMouse, this.r, this.r, 0, 0, 2 * Math.PI, this.col)
            this.circleSet.push(temp);
        }
    }

    mUp(e){
        // set mouse down to false
        // set this.close to true to finish the circle loop
        this.mouseDown = false;
        this.close = true;
    }

    update(){
        if(this.mouseDown == true && this.close == false){
            var temp = new Ellipse(this.xMouse, this.yMouse, this.r, this.r, 0, 0, 2 * Math.PI, this.col)
            this.circleSet.push(temp);
        }

        // update all items in the circle set list
        for(var i=0 ; i< this.circleSet.length; i++){
            this.circleSet[i].update()
        }}
    
    close(){
        this.close = true;
    }
        

    draw(){
        // change fill state if mouse is over or the point is selected
        if(this.inBounds || Point.taken == this){
            ctx.fillStyle = this.over;
        }else{
            ctx.fillStyle = this.fill;
        }
        ctx.strokeStyle = this.stroke;
        ctx.lineWidth = 2;
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
    }
}

// ---------------------------------------------------------------------------------------- CircleButton
class CircleButton{
    // set variables to use
    constructor(x, y, r, c1, c2, name){
    this.x = x;
    this.y = y;
    this.r = r;
    this.name = name
    this.outline = c1;
    this.fill = c2;
    
    canvas.addEventListener('click', this.mClick.bind(this));
    canvas.addEventListener('mousemove', this.mMove.bind(this));
  
    this.xMouse = 0;
    this.yMouse = 0;
    this.inBounds = false;
    this.outline_stroke = 2;
}

mClick(e){
    if(this.inBounds){
        CircleButton.clicked = this;
        CircleButton.selected = this.name;
        // deselect any of the other shape buttons
        Button.selected = "";
    }
}

mMove(e){
    this.xMouse = e.offsetX;
    this.yMouse = e.offsetY;
    this.inBounds = this.inBoundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.r);
 
   if(this.inBounds == true || CircleButton.clicked == this){
        this.outline_stroke = 4;
    }else{
        this.outline_stroke= 2;
    }
}



    // Pythagorus Distance check
    // @ param x,y, positions of the mouse and of point circle and radius of point circle (number)
    // @ return boolean
   inBoundsCheck(xM, yM, x, y, r){
    var d = Math.sqrt( Math.pow(xM-x, 2) + Math.pow(yM-y, 2));
    if(d<r){
        return true;
    }else{
        return false;
    }
 }

update(){
    ctx.beginPath();
    ctx.lineWidth = this.outline_stroke;
    ctx.ellipse(this.x, this.y, Math.abs(this.r), Math.abs(this.r), 0, 0, 2 * Math.PI)
    ctx.fillStyle = this.fill;
    ctx.strokeStyle = this.outline;
    ctx.stroke();
    ctx.fill();
}
}

CircleButton.clicked = "";
CircleButton.selected = "";

