const Rectangle = require('./rectangle');

function calcRectangle(length, width){
    if(length <= 0 || width <= 0)
        console.log("Length or Width must be greater than zero.");
    else{
        console.log("Area = " + Rectangle.area(length, width));
        console.log("Perimeter = " + Rectangle.perimeter(length, width));
    }
}

calcRectangle(10, 5);
calcRectangle(0, 10);
calcRectangle(15, 10);