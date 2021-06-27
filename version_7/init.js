console.log(" init js is called ")

canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var width = 1200;
var height = 700;
canvas.width = width;
canvas.height = height;



//TEMPORARY
var colArray=[
    // red
    [ "rgba(255,0,0,0.25)", "rgba(255,0,0,0.5)", "rgba(255,0,0,0.70)", "rgba(255,0,0,1)"],
    // orange
    [ "rgba(255,127,80,0.25)", "rgba(255,127,80,0.5)", "rgba(255,127,80,0.75)", "rgba(255,127,80,1)"],
    // yellow
    [ "rgba(255,215,0,0.25)", "rgba(255,215,0,0.5)", "rgba(255,215,0,0.75)", "rgba(255,215,0,1)"],
    // green light
    [ "rgba(124,252,0,0.25)", "rgba(124,252,0,0.5)", "rgba(124,252,0,0.75)", "rgba(124,252,0,1)"],
    // green
    [ "rgba(34,139,34,0.25)", "rgba(34,139,34,0.5)", "rgba(34,139,34,0.75)", "rgba(34,139,34,1)"],
    // blue
    [ "rgba(30,144,255,0.25)", "rgba(30,144,255,0.5)", "rgba(30,144,255,0.75)", "rgba(30,144,255,1)"],
    // blue dark
    [ "rgba(0,51,102,0.25)", "rgba(0,51,102,0.5)", "rgba(0,51,102,0.75)", "rgba(0,51,102,1)"],
    // pink
    [ "rgba(255,20,147,0.25)", "rgba(255,20,147,0.5)", "rgba(255,20,147,0.75)", "rgba(255,20,147,1)"],
    // purple
    [ "rgba(75,0,130,0.25)", "rgba(75,0,130,0.5)", "rgba(75,0,130,0.75)", "rgba(75,0,130,1)"],
    // b,w and g
    [ "rgba(255,255,255,1)", "rgba(204,204,206,1)", "rgba(134,136,138,1)", "rgba(0,0,0,1)"]]
    


