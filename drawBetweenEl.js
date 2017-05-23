function drawLineBetween (element1, element2, options) {
    var offsetFirstElement = $(element1).offset();
    var beginX = offsetFirstElement.left +$(element1).width() / 2;
    var beginY = offsetFirstElement.top+ $(element1).height() / 2;
    
    var offsetSecondElement = $(element2).offset();
    var endX = offsetSecondElement.left+ $(element2).width() / 2;
    var endY = offsetSecondElement.top+ $(element2).height() / 2;

    var coordinates = {
        beginX : beginX,
        beginY : beginY,
        endX : endX,
        endY : endY
    }
   $('body').line(beginX, beginY, endX, endY, options);
}