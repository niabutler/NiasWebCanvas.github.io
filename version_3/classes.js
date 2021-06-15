class Rectangle{
    constructor(x,y,w,h,col){
        // set variables
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


class Ellipse{
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



class Button{
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
    console.log("clicked");
    if(this.inBounds){
        Button.clicked = this;
        Button.selected = this.text
    
    }


}

mMove(e){
    this.xMouse = e.offsetX;
    this.yMouse = e.offsetY;
    // console.log(this.xMouse);
    this.inBounds = this.inBoundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    console.log(this.inBounds);
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
    ctx.linewidth = 2;
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.w, this.h);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = this.outline;
    

    if(this.inBounds || Button.clicked == this){
       
        ctx.lineWidth = 4;
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

    ctx.stroke()


    var myFont = "bold 20px 'Trebuchet MS', Verdana, sans-serif ";
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.font=myFont;
    ctx.fillText(this.text, this.x + this.w/2, this.y + this.h/2);
}

}

Button.clicked = "";
Button.selected = "";




