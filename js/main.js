// cerco di generalizzare, così se voglio aggiungere immagini devo semplicemente farlo nell'html
var imgs = $('.img-container');

imgs.children().first().addClass(['first','active']);
imgs.children().last().addClass('last');

// parte chevron

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

var cLeft = $('#top .left-container');
cLeft.click( function () {
    
    var imgActive = $('img.active');
    imgActive.removeClass('active');
    
    if (imgActive.hasClass('first')) {
        var imgLast = $('img.last');
        imgLast.addClass('active');
    }
    else {
        imgActive.prev().addClass('active');
    }
    
});

// /parte chevron

// parte pallini

// cerco di generalizzare: li aggiungo e gestisco in automatico all'aumentare delle img
var bottom = $('#bottom');
for (var i = 0; i < imgs.children().length; i++) {
    bottom.append(' <i class="fas fa-circle"></i>');
}

var circle = $('#bottom > *');
console.log(circle[0]);
for (var i = 0; i < imgs.children().length; i++) {

    circle[i].click( function () {
    
        var imgActive = $('img.active');
        imgActive.removeClass('active');
        
        imgs.children([i]).addClass('active');
        
    });

}

// /parte pallini