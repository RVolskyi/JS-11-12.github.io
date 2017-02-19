$(function () {
    var leftEl = $('.carousel-arrow-left');
    var rightEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');

    var pixelsOffset = 225;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    console.log(elementsCount);
    var minimumOffset = -( (elementsCount - 3) * pixelsOffset);
    var maximumOffset = 0;

    leftEl.on('click', function () {

        if(currentLeftValue != maximumOffset) {
            currentLeftValue += 225;
            elementsList.animate({
                left: currentLeftValue + 'px'
            }, 300);
        }
    });

    rightEl.on('click', function () {
        if(currentLeftValue != minimumOffset) {
            currentLeftValue -= 225;
            elementsList.animate({
                left: currentLeftValue + 'px'
            }, 300);
        }
    });

});