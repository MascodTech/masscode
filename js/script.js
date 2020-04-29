// init WOW
new WOW().init();


// typing
function typing(element) {
    let inner = element.html(),
        fullText = '',
        letterCount = 0,
        interval = setInterval(function () {
            fullText += inner[letterCount]
            element.html(fullText)
            letterCount++
            if (fullText === inner) {
                clearInterval(interval)
            }
        }, 150)
}

typing($('.preloader__title'))
setTimeout(function () {
    $('.preloader__title').css('opacity', '1');
}, 200);

setTimeout(function () {
    typing($('h1'))
}, 6000);
setTimeout(function () {
    $('h1').css('opacity', '1');
}, 6200);