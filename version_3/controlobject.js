console.log("dragPoint is called")

console.log("point js has been called")

class ControlObject{
    constructor(x, y, w, h){

        // set variables to 0
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        // create empty list
        this.objectSet = []

        // set up event listeners for when the mouse is in use
        canvas.addEventListener('mousedown', this.mDown.bind(this));
        canvas.addEventListener('mousemove', this.mMove.bind(this));
        canvas.addEventListener('mouseup', this.mUp.bind(this));

        this.inBounds = false;
    }

    mDown(e){
        // when the mouse is down...
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        this.mouseDown = true;
        this.inBounds = this.inBoundsCheck(this.xMouseStart, this.yMouseStart, this.x, this.y, this.w, this.h);
        console.log(this.inBounds)
    
        // console.log("mouse down")
    }

    mMove(e){
        // when the mouse is moving...
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        //console.log("mouse move")

        
    }

    mUp(e){
        // when the mouse is up...
        this.mouseDown = false;
        var w = this.xMouse - this.xMouseStart;
        var h = this.yMouse - this.yMouseStart;
        if(this.inBounds == true){

            if (Button.selected == "Rectangle" && Math.abs(w) && Math.abs(h) > 1){
                var temp = new Rectangle(this.xMouseStart, this.yMouseStart, w, h, "rgb(240, 60, 120")
                this.objectSet.push(temp);
                console.log(this.objectSet)

            }else if(Button.selected == "Ellipse" && Math.abs(w) && Math.abs(h) > 1){
                var temp = new Ellipse(this.xMouseStart, this.yMouseStart, w, h, 0, 0, 2 * Math.PI, "rgb(255, 50, 4");
                // add new rectangle to object list 
                this.objectSet.push(temp);
                console.log(this.objectSet)

            }
            // create a new rectangle object, using the dimensions of the draw guide.
        }

    }

    inBoundsCheck(xM, yM, x, y, w, h){
        // check for boundaries, return true or false if inside or outside boundaries
        if(xM > x && xM < x+w && yM > y && yM < y+h){
            return true;
        }else{
            return false;
        }
    
    }

    update(){
        // rectangle for user to make shapes on
        ctx.save()
        // draw grey rectangle (drawing area)
        this.drawRect(this.x, this.y, this.w, this.h, "rgb(220,220,220")
        // clip anything outside of the drawing area
        ctx.clip()
        if(this.mouseDown == true && this.inBounds == true){
            this.drawGuide();
        }

        // update items in the list
        for(var i=0 ; i< this.objectSet.length; i++){
            this.objectSet[i].update()
        }
        // restore state for next object
        ctx.restore()
    }
    
    drawGuide(){
        var w = this.xMouse - this.xMouseStart;
        var h = this.yMouse - this.yMouseStart;
        this.drawRectGuide(this.xMouseStart, this.yMouseStart, w, h, "rgb(0,0,255)");
    }

    drawRectGuide(x,y,w,h,col){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.linewidth = 1;
        ctx.strokeStyle = col;
        ctx.stroke();
    }

    drawRect(x,y,w,h, col){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.linewidth = 1;
        ctx.fillStyle = col;
        ctx.fill();
    }

}









    