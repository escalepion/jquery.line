function getCoordinate (element1, element2) {
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
   $('#example').line(beginX, beginY, endX, endY, {color:"red", zindex:999});
}