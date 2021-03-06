// cerco di generalizzare, così se voglio aggiungere immagini devo semplicemente farlo nell'html
var imgs = $('.img-container > *');

imgs.first().addClass(['first','active']);
imgs.last().addClass('last');

// predispongo le function prima generali e poi, basandomi su di esse, quelle per la tastiera
function goToLeftGeneral() {

    var imgActive = $('img.active');
    imgActive.removeClass('active');
    
    if (imgActive.hasClass('first')) {
        var imgLast = $('img.last');
        imgLast.addClass('active');
    }
    else {
        imgActive.prev().addClass('active');
    }

}
var goToLeftKey = function(event) {
    if (event.which == 37) {
        goToLeftGeneral();
    }
}

function goToRightGeneral() {
    var imgActive = $('img.active');
    imgActive.removeClass('active');
    
    if (imgActive.hasClass('last')) {
        var imgFirst = $('img.first');
        imgFirst.addClass('active');
    }
    else {
        imgActive.next().addClass('active');
    }
}
var goToRightKey = function(event) {
    if (event.which == 39) {
        goToRightGeneral();
    }
}

// applicazione function parte chevron e keyboard

var cRight = $('#top .right-container');
cRight.click(goToRightGeneral);
$(document).keydown(goToRightKey);

var cLeft = $('#top .left-container');
cLeft.click(goToLeftGeneral);
$(document).keydown(goToLeftKey);

// /applicazione function parte chevron e keyboard

// parte pallini

// cerco di generalizzare: li aggiungo e gestisco in automatico all'aumentare delle img
var bottom = $('#bottom');
for (var i = 0; i < imgs.length; i++) {
    bottom.append(' <i class="fas fa-circle"></i>');
}

bottom.children(':not(.active)').click( function () {
    
    bottom.children('.active').removeClass('active');
    $(this).addClass('active');
    var ind = $(this).index();

    var imgActive = $('img.active');
    imgActive.removeClass('active');
    document.getElementsByTagName('IMG')[ind].classList += ' active';

});


// /parte pallini