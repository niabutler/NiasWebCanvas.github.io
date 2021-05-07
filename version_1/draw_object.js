console.log("dragPoint is called")

console.log("point js has been called")

class ControlObject{
    constructor(){

        // set variables to 0
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;

        this.w = 0;
        this.h = 0;

        // create empty list
        this.objectSet = []

        // set up event listeners for when the mouse is in use
        canvas.addEventListener('mousedown', this.mDown.bind(this));
        canvas.addEventListener('mousemove', this.mMove.bind(this));
        canvas.addEventListener('mouseup', this.mUp.bind(this));

    }

    mDown(e){
        // when the mouse is down...
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        this.mouseDown = true;
        this.drawGuide
        console.log("mouse down")
    }

    mMove(e){
        // when the mouse is moving...
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        console.log("mouse move")
        var mouse_pos = "x:" + this.xMouse + ", y:" + this.yMouse
        console.log(mouse_pos)
    }

    mUp(e){
        // when the mouse is up...
        this.mouseDown = false;
        var temp = new Rectangle(this.xMouseStart, this.yMouseStart, this.w, this.h, "rgb(240, 60, 120")
        this.objectSet.push(temp);
        console.log("mouse up")

    }

    update(){
        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;
        if(this.mouseDown){
            console.log("mouse is down");
            this.drawGuide();
        }

        // update items in the list
        for(var i=0 ; i< this.objectSet.length; i++){
            this.objectSet[i].update()
        }
    }
    

    drawGuide(){
        this.drawRect(this.xMouseStart, this.yMouseStart, this.w, this.h);

    }

    drawRect(x,y,w,h){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.linewidth = 1;
        ctx.strokeStyle = "rgb(0,230,200)";
        ctx.stroke();
    }
}






    