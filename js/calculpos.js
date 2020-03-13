/* 
 * calculate position an image
 * 
 * 
 */
$(window).load(function(){
    var pos = $(".image-new").position();
    var x = pos.left;
    var y = pos.top;
    var width_img = $('.image-new').width();
    var width_new = 62;//$(".pos-new").width();
    x = x + (width_img-width_new) - 10;
    $('.pos-new').css('left', (x) + 'px');
    $('.pos-new').css('top', (y) + 'px');
});



