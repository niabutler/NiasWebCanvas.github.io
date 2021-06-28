console.log("controlobject.js is called")



class ControlObject{
    //constructor basic rectangle values, x, y, w, h
    constructor(x, y, w, h){

        // set variables to 0
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        //set mouseDown to false, becomes true when user clicks down
        this.mouseDown = false;
        // defining the rectangle values
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
        // returns coordinates of the canvas where the mouse is
        // when mouse is down and stays down (dragging)
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        this.mouseDown = true;
        this.inBounds = this.inBoundsCheck(this.xMouseStart, this.yMouseStart, this.x, this.y, this.w, this.h);

        // if the mouse is inside the boundary of canvas
        // and if a circle button is selected
        // draw new Brush
        if(this.inBounds == true){
            if(CircleButton.selected == "rad1"){
                var temp = new Brush(7, Swatch.selected);
                this.objectSet.push(temp);
            }else if(CircleButton.selected == "rad2"){
                var temp = new Brush(13, Swatch.selected);
                this.objectSet.push(temp);
            }else if(CircleButton.selected == "rad3"){
                var temp = new Brush(20, Swatch.selected);
                this.objectSet.push(temp);
            }

         }
    }

    mMove(e){
        // returns coordinates of the canvas where the mouse is
        // when mouse is moving
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;  
    }

    mUp(e){
        // returns coordinates when mouse is up/unclicks
        this.mouseDown = false;
        // set w and h using the coordinates of the mouse
        var w = this.xMouse - this.xMouseStart;
        var h = this.yMouse - this.yMouseStart;
        // if the mouse is inside the boundary of the canvas
        // and if a button is selected
        // draw new a new object and add to objectSet list
        if(this.inBounds == true){
            if (Button.selected == "Rectangle" && Math.abs(w) && Math.abs(h) > 1){
                // create a new rectangle object, using the dimensions of the draw guide.
                var temp = new Rectangle(this.xMouseStart, this.yMouseStart, w, h, Swatch.selected)
                // add new object to object list 
                this.objectSet.push(temp);
            //------------------------------------------------------------------------------------------------------------
            }else if(Button.selected == "Ellipse" && Math.abs(w) && Math.abs(h) > 1){
                // create a new ellipse object, using the dimensions of the draw guide.
                var temp = new Ellipse(this.xMouseStart, this.yMouseStart, w, h, 0, 0, 2 * Math.PI, Swatch.selected);
                // add new object to object list 
                this.objectSet.push(temp);
            //------------------------------------------------------------------------------------------------------------
            }else if(Button.selected == "Star" && Math.abs(w) && Math.abs(h) > 1){
                if(Math.abs(w) > Math.abs(h)){
                    // create a new star object, using the dimensions of the draw guide.
                    var temp = new Star(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(h/2), 5, Swatch.selected);
                    // add new object to object list 
                    this.objectSet.push(temp);
                }else if(Math.abs(w) < Math.abs(h)){
                    // create a new star object, using the dimensions of the draw guide.
                    var temp = new Star(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(w/2), 5, Swatch.selected);
                    // add new object to object list 
                    this.objectSet.push(temp);}
            //------------------------------------------------------------------------------------------------------------
            }else if(Button.selected == "Circle" && Math.abs(w) && Math.abs(h) > 1){
                if(Math.abs(w) > Math.abs(h)){
                    // create a new circle object, using the dimensions of the draw guide.
                    var temp = new Circle(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(h/2), 0, 0, 2 * Math.PI, Swatch.selected);
                    // add new object to object list 
                    this.objectSet.push(temp);
                }else if(Math.abs(w) < Math.abs(h)){
                    // create a new circle object, using the dimensions of the draw guide.
                    var temp = new Circle(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(w/2), 0, 0, 2 * Math.PI, Swatch.selected);
                    // add new object to object list 
                    this.objectSet.push(temp);}
            //------------------------------------------------------------------------------------------------------------
            }else if(Button.selected == 3 && Math.abs(w) && Math.abs(h) > 1){
                if(Math.abs(w) > Math.abs(h)){
                    // create a new polygon object, using the dimensions of the draw guide.
                    var temp = new Polygon(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(h/2), 3, Swatch.selected);
                    // add new object to object list 
                    this.objectSet.push(temp);}
                else if(Math.abs(w) < Math.abs(h)){
                    // create a new polygon object, using the dimensions of the draw guide.
                    var temp = new Polygon(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(w/2), 3, Swatch.selected);
                    // add new object to object list 
                    this.objectSet.push(temp); 
                }
            }else if(Button.selected == 5 && Math.abs(w) && Math.abs(h) > 1){
                if(Math.abs(w) > Math.abs(h)){
                    // create a new polygon object, using the dimensions of the draw guide.
                    var temp = new Polygon(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(h/2), 5, Swatch.selected);
                    // add new object to object list 
                    this.objectSet.push(temp);}
                else if(Math.abs(w) < Math.abs(h)){
                    // create a new polygon object, using the dimensions of the draw guide.
                    var temp = new Polygon(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(w/2), 5, Swatch.selected);
                    // add new object to object list 
                    this.objectSet.push(temp); 
                }
            }else if(Button.selected == 6 && Math.abs(w) && Math.abs(h) > 1){
                if(Math.abs(w) > Math.abs(h)){
                    // create a new polygon object, using the dimensions of the draw guide.
                    var temp = new Polygon(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(h/2), 6, Swatch.selected);
                    // add new object to object list 
                    this.objectSet.push(temp);}
                else if(Math.abs(w) < Math.abs(h)){
                    // create a new polygon object, using the dimensions of the draw guide.
                    var temp = new Polygon(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(w/2), 6, Swatch.selected);
                    // add new object to object list 
                    this.objectSet.push(temp); 
                }
            }else if(Button.selected == 8 && Math.abs(w) && Math.abs(h) > 1){
                if(Math.abs(w) > Math.abs(h)){
                    // create a new polygon object, using the dimensions of the draw guide.
                    var temp = new Polygon(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(h/2), 8, Swatch.selected);
                    // add new object to object list 
                    this.objectSet.push(temp);
                }else if(Math.abs(w) < Math.abs(h)){
                    // create a new polygon object, using the dimensions of the draw guide.
                    var temp = new Polygon(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(w/2), 8, Swatch.selected);
                    // add new object to object list 
                    this.objectSet.push(temp); 
                }
            //------------------------------------------------------------------------------------------------------------
            }else if(CircleButton.selected == "rad4"){
                // create a new line object, using the dimensions of the draw guide.
                var temp = new Line(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, 4, Swatch.selected);
                // add new object to object list 
                this.objectSet.push(temp);
            }else if(CircleButton.selected == "rad5"){
                // create a new line object, using the dimensions of the draw guide.
                var temp = new Line(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, 12, Swatch.selected);
                // add new object to object list 
                this.objectSet.push(temp);
            }else if(CircleButton.selected == "rad6"){
                // create a new line object, using the dimensions of the draw guide.
                var temp = new Line(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, 17, Swatch.selected);
                // add new object to object list 
                this.objectSet.push(temp);
            //------------------------------------------------------------------------------------------------------------
            }else if(Button.selected == "Pinwheel" && Math.abs(w) && Math.abs(h) > 1){
                if(Math.abs(w) > Math.abs(h)){
                    // create a new pinwheel object, using the dimensions of the draw guide.
                    var temp = new Pinwheel(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(h/2), 8, Swatch.selected);
                    // add new object to object list 
                    this.objectSet.push(temp);
                }else if(Math.abs(w) < Math.abs(h)){
                    // create a new pinwheel object, using the dimensions of the draw guide.
                    var temp = new Pinwheel(this.xMouseStart+w/2, this.yMouseStart+h/2, Math.abs(w/2), 8, Swatch.selected);
                    // add new object to object list 
                    this.objectSet.push(temp);}
            }
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
        // create rectangle for user to make shapes on
        ctx.save()
        // draw grey rectangle (drawing area)
        this.drawRect(this.x, this.y, this.w, this.h, "rgb(105,105,105)")
        // clip anything outside of the drawing area
        ctx.clip()
        // update all items in the object set list
        for(var i=0 ; i< this.objectSet.length; i++){
            this.objectSet[i].update()

        }
        // when the mouse is inbounds and down, and when the Brush buttons aren't selected
        // draw guide function is called
        if(this.mouseDown == true && this.inBounds == true && CircleButton.selected !== "rad1" && CircleButton.selected !== "rad2" && CircleButton.selected !== "rad3"){
            this.drawGuide();
        }

        // restore state for next object
        ctx.restore()

        // if undo or redo button is selected
        // pop item or clear the objectSet list
        // reselect Rectangle button as default
        if(Button.selected == "Undo"){
            this.objectSet.pop();
            Button.selected = "Rectangle";
        }else if(Button.selected == "Restart"){
            this.objectSet = [];
            Button.selected = "Rectangle";
        }
        
    }
    
    drawGuide(){
        // define draw guide variables
        var w = this.xMouse - this.xMouseStart;
        var h = this.yMouse - this.yMouseStart;
        var n = "rgb(255,165,0)";
        var s = "rgb(127,255,0)";
        // if x=y, then change colour to indicate a sqaure
        if(w == h){
            this.drawRectGuide(this.xMouseStart, this.yMouseStart, w, h, s);
        }else{
            this.drawRectGuide(this.xMouseStart, this.yMouseStart, w, h, n);
        }
        
    }

    drawRect(x,y,w,h,col){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.linewidth = 1;
        ctx.fillStyle = col;
        ctx.fill();
    }

    drawRectGuide(x,y,w,h,col){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth = 2;
        ctx.strokeStyle = col;
        ctx.stroke();
    }


}











    