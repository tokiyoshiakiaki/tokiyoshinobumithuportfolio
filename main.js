$(function (){
    $('.list-btn, .logo, .navi-list-item > a').on('click',function () {
        $('.list-btn, .header, .logo-responsive').toggleClass('active');
    });
});

$(function () {
    $('.navi-list  a[href*="#"]').click(function () {
        var elmHash = $(this).attr('href');
        var pos = $(elmHash).offset().top;
        $('body,html').animate({scrollTop: pos}, 900);
        return false;
    });
});

$(function () {
   var block = $('.fadein'),
       Window = $(window);

        Window.scroll(function () {
        block.each(function () {
            if(Window.scrollTop() > $(this).offset().top - Window.height()) {
                $(this).addClass("show");
            }
        });
    });  
});

