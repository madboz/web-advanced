console.log(Cookies.get('xval'));
console.log(Cookies.get('yval'));

$('.dot').css('top', Cookies.get('yval') + 'px').css('left', Cookies.get('xval') + 'px')


$(window).click(function(e) {
    
    console.log(e.clientX);
    console.log(e.clientY);
    Cookies.set('xval', e.clientX)
    Cookies.set('yval', e.clientY)
    $('.dot').css('top',e.clientY).css('left',e.clientX);
    
})