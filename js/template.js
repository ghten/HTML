/* 
 * calculate position an image
 * 
 * 
 */
$(document).ready(function(){
    var pos = $(".image-new").position();
    var x = pos.left;
    var y = pos.top;
    var width_img = $(".image-new").width();
    var width_new = $(".pos-new").width();
    x = x + (width_img-width_new);
    $('.pos-new').css('left', (x) + 'px');
    $('.pos-new').css('top', (y) + 'px');
    
     $('.plus').on('click',function(e){
       alert('titi');
        $(this).next().next('.list-div').slideToggle();
        if ($(this).hasClass("glyphicon-plus-sign")) {
            $(this).addClass('glyphicon-minus-sign').removeClass('glyphicon-plus-sign');
        }else{
            $(this).addClass('glyphicon-plus-sign').removeClass('glyphicon-minus-sign');
        }    
        e.preventDefault();   });
});

$(".expand-image div").on("click", function() {
    alert('toto');
   /*$('#imagepreview').attr('src', $('#imageresource').attr('src'));
   $('#imagemodal').modal('show');*/
   
  
});
/************************************************************************
 * display-text
 */
/*$(document).ready(function(){ 
   $('.plus').on('click',function(e){
       alert('toto');
        $(this).next().next('.list-div').slideToggle();
        if ($(this).hasClass("glyphicon-plus-sign")) {
            $(this).addClass('glyphicon-minus-sign').removeClass('glyphicon-plus-sign');
        }else{
            $(this).addClass('glyphicon-plus-sign').removeClass('glyphicon-minus-sign');
        }    
        e.preventDefault();   });
});*/
