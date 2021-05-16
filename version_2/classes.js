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

class RectangleDrawing{
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