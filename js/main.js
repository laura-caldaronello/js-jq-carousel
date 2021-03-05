// cerco di generalizzare
var nImgs = $('.img-container').children().length;
console.log(nImgs);

var cLeft = $('#top .left-container');
var cRight = $('#top .right-container');

cRight.click( function () {

    var imgActive = $('img.active');
    imgActive.removeClass('active');
    
    if (imgActive.hasClass('last')) {
        var imgFirst = $('img.first');
        imgFirst.addClass('active');
    }
    else {
        imgActive.next().addClass('active');
    }

});