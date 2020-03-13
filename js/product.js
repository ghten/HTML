
$(document).ready(function(){ 
   $('.click').on('click',function(e){
        $(this).next('.list-div').slideToggle();
        if ($(this).children('.plus').hasClass("glyphicon-plus-sign")) {
            $(this).children('.plus').addClass('glyphicon-minus-sign').removeClass('glyphicon-plus-sign');
        }else{
            $(this).children('.plus').addClass('glyphicon-plus-sign').removeClass('glyphicon-minus-sign');
        }    
        e.preventDefault();   });
        
        var heightmax= 0;
        $(".pcategory > div > a > h3").each(function(i){
            if(i == 0){
                heightmax= $(this).height();
            }else if(heightmax < $(this).height()){
                heightmax = $(this).height();
            };
        });
        $('.pcategory > div > a > h3').css('height', heightmax + 'px');
});

$(".expand-image div").on("click", function() {
   $('#imagepreview').attr('src', $('#imageresource').attr('src'));
   $('.modal').modal('show');
});

function centerModal() {
    $(this).css('display', 'block');
    var $dialog = $(this).find(".modal-dialog");
    var offset = ($(window).height() - $dialog.height()) / 2;
    // Center modal vertically in window
    $dialog.css("margin-top", offset);
}

$('.modal').on('show.bs.modal', centerModal);
$(window).on("resize", function () {
    $('.modal:visible').each(centerModal);
});
