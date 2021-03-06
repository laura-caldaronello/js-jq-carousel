// cerco di generalizzare, così se voglio aggiungere immagini devo semplicemente farlo nell'html
var imgs = $('.img-container > *');

imgs.first().addClass(['first','active']);
imgs.last().addClass('last');

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

// parte chevron e keyboard

var cRight = $('#top .right-container');
cRight.click(goToRightGeneral);
$(document).keydown(goToRightKey);


var cLeft = $('#top .left-container');
cLeft.click(goToLeftGeneral);
$(document).keydown(goToLeftKey);

// /parte chevron e keyboard

// parte pallini

// cerco di generalizzare: li aggiungo e gestisco in automatico all'aumentare delle img
var bottom = $('#bottom');
for (var i = 0; i < imgs.length; i++) {
    bottom.append(' <i class="fas fa-circle"></i>');
}

var circle = $('#bottom > *');
console.log(circle[0]);
console.log(imgs[0]);


for (let i = 0; i < imgs.length; i++) {

    circle[i].click( function () {
    
        var imgActive = $('img.active');
        imgActive.removeClass('active');
        
        imgs[i].addClass('active');
        
    });

}

circle[1].click( function () {
    
    // var imgActive = $('img.active');
    // imgActive.removeClass('active');
    
    // imgs[1].addClass('active');
    alert('ciao');
    
});


// /parte pallini