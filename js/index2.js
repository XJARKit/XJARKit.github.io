$(function(){

    // 遮罩层
    $(".solution-demo").on("mouseenter",function(){
        $(this).find(".mask").fadeIn();
        $(this).find(".about-headings").fadeOut();

        // $(this).find(".about-info h2").fadeIn();
        $(this).find(".about-info p").fadeIn();
    });
    $(".solution-demo").on("mouseleave",function(){
        $(this).find(".mask").fadeOut();
        // $(this).find(".about-headings").fadeIn();
        // $(this).find(".about-info h2").fadeOut();
        $(this).find(".about-info p").fadeOut();
    });

    //导航条效果；
    $('.navbar-nav').find('li').hover(function(){
        $('.dropdown').fadeIn();
    },function(){
        $('.dropdown').fadeOut();
    })


    //回顶部效果；
    $(window).scroll(function(){
        if($(window).scrollTop()>=400){
            $(".gotop").fadeIn(500);
        }
        else{
            $(".gotop").fadeOut(500);
        }
    })
    $(".gotop").click(function(){
        $("body,html").stop().animate({"scrollTop":0},500);
        return false;
    })
    $('body').animate({ scrollTop: 0 }, 100);
    return false;
})
