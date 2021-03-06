console.log("dragPoint is called")
console.log("point js has been called")


class ControlObject{
    //describe parameters
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

        if(this.inBounds == true){
            if(CircleButton.selected == "rad1"){
                var temp = new Point(7, Swatch.selected);
                this.objectSet.push(temp);
            }else if(CircleButton.selected == "rad2"){
                var temp = new Point(13, Swatch.selected);
                this.objectSet.push(temp);
            }else if(CircleButton.selected == "rad3"){
                var temp = new Point(20, Swatch.selected);
                this.objectSet.push(temp);
            }

         }
    }

    mMove(e){
        // when the mouse is moving...
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;  
    }

    mUp(e){
        // when the mouse is up...
        //console.log(Button.selected)
        this.mouseDown = false;
        var w = this.xMouse - this.xMouseStart;
        var h = this.yMouse - this.yMouseStart;
        if(this.inBounds == true){
            if (Button.selected == "Rectangle" && Math.abs(w) && Math.abs(h) > 1){
                // create a new rectangle object, using the dimensions of the draw guide.
                var temp = new Rectangle(this.xMouseStart, this.yMouseStart, w, h, Swatch.selected)
                // add new rectangle to object list 
                this.objectSet.push(temp);
            //------------------------------------------------------------------------------------------------------------
            }else if(Button.selected == "Ellipse" && Math.abs(w) && Math.abs(h) > 1){
                var temp = new Ellipse(this.xMouseStart, this.yMouseStart, w, h, 0, 0, 2 * Math.PI, Swatch.selected);
                this.objectSet.push(temp);
            //------------------------------------------------------------------------------------------------------------
            }else if(Button.selected == "Star" && Math.abs(w) && Math.abs(h) > 1){
                if(Math.abs(w) > Math.abs(h)){
                    var temp = new Star(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(h/2), 5, Swatch.selected);
                    this.objectSet.push(temp);
                }else if(Math.abs(w) < Math.abs(h)){
                    var temp = new Star(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(w/2), 5, Swatch.selected);
                    this.objectSet.push(temp);}
            //------------------------------------------------------------------------------------------------------------
            }else if(Button.selected == "Circle" && Math.abs(w) && Math.abs(h) > 1){
                if(Math.abs(w) > Math.abs(h)){
                    var temp = new Circle(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(h/2), 0, 0, 2 * Math.PI, Swatch.selected)
                    this.objectSet.push(temp);
                }else if(Math.abs(w) < Math.abs(h)){
                    var temp = new Circle(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(w/2), 0, 0, 2 * Math.PI, Swatch.selected)
                    this.objectSet.push(temp);}
            //------------------------------------------------------------------------------------------------------------
            }else if(Button.selected == 3 && Math.abs(w) && Math.abs(h) > 1){
                if(Math.abs(w) > Math.abs(h)){
                    var temp = new Polygon(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(h/2), 3, Swatch.selected);
                    this.objectSet.push(temp);}
                else if(Math.abs(w) < Math.abs(h)){
                    var temp = new Polygon(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(w/2), 3, Swatch.selected);
                    this.objectSet.push(temp); 
                }
            }else if(Button.selected == 5 && Math.abs(w) && Math.abs(h) > 1){
                if(Math.abs(w) > Math.abs(h)){
                    var temp = new Polygon(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(h/2), 5, Swatch.selected);
                    this.objectSet.push(temp);}
                else if(Math.abs(w) < Math.abs(h)){
                    var temp = new Polygon(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(w/2), 5, Swatch.selected);
                    this.objectSet.push(temp); 
                }
            }else if(Button.selected == 6 && Math.abs(w) && Math.abs(h) > 1){
                if(Math.abs(w) > Math.abs(h)){
                    var temp = new Polygon(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(h/2), 6, Swatch.selected);
                    this.objectSet.push(temp);}
                else if(Math.abs(w) < Math.abs(h)){
                    var temp = new Polygon(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(w/2), 6, Swatch.selected);
                    this.objectSet.push(temp); 
                }
            }else if(Button.selected == 8 && Math.abs(w) && Math.abs(h) > 1){
                if(Math.abs(w) > Math.abs(h)){
                    var temp = new Polygon(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(h/2), 8, Swatch.selected);
                    this.objectSet.push(temp);
                }else if(Math.abs(w) < Math.abs(h)){
                    var temp = new Polygon(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(w/2), 8, Swatch.selected);
                    this.objectSet.push(temp); 
                }
            //------------------------------------------------------------------------------------------------------------
            }else if(CircleButton.selected == "rad4"){
                var temp = new Line(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, 4, Swatch.selected);
                this.objectSet.push(temp);
            }else if(CircleButton.selected == "rad5"){
                var temp = new Line(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, 12, Swatch.selected);
                this.objectSet.push(temp);
            }else if(CircleButton.selected == "rad6"){
                var temp = new Line(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, 17, Swatch.selected);
                this.objectSet.push(temp);
            }
        }
    }

            
            
    mClick(e){
        Button.selected == true;
        if(this.inBounds == true && Button.selected){
            D.fillStyle = this.over;
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
        this.drawRect(this.x, this.y, this.w, this.h, "rgb(105,105,105)")
        // clip anything outside of the drawing area
        ctx.clip()
        // update all items in the object set list
        for(var i=0 ; i< this.objectSet.length; i++){
            this.objectSet[i].update()
        }

        if(this.mouseDown == true && this.inBounds == true && CircleButton.selected !== "rad1" && CircleButton.selected !== "rad2" && CircleButton.selected !== "rad3"){
            this.drawGuide();
        }

  
        // restore state for next object
        ctx.restore()
    }
    
    drawGuide(){
        var w = this.xMouse - this.xMouseStart;
        var h = this.yMouse - this.yMouseStart;
        this.drawRectGuide(this.xMouseStart, this.yMouseStart, w, h, "rgb(255,165,0)");
    }

    drawRect(x,y,w,h,col){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.linewidth = 1;
        ctx.fillStyle = col;
        ctx.fill();
    }

    drawRectGuide(x,y,w,h, col){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.linewidth = 1;
        ctx.strokeStyle = col;
        ctx.stroke();
    }


}











    