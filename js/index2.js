$(function(){


    // 遮罩层
    $(".solution-demo").on("mouseenter",function(){
        console.log(111);
        $(this).find(".mask").fadeIn();
        $(this).find(".about-headings").fadeOut();

        $(this).find(".about-info h2").fadeIn();
        $(this).find(".about-info p").fadeIn();
    });
    $(".solution-demo").on("mouseleave",function(){
        $(this).find(".mask").fadeOut();
        $(this).find(".about-headings").fadeIn();
        $(this).find(".about-info h2").fadeOut();
        $(this).find(".about-info p").fadeOut();

    });

    //导航条效果；
    $('.navbar-nav').find('li').hover(function(){
        $('.dropdown').fadeIn();
        $('li').css('color','#fff','background','##E6851D');
    },function(){
        $('.dropdown').fadeOut();
    })





    //回顶部效果；
    $(window).scroll(function(){
        if($(window).scrollTop()>=400){
            $(".gotoTop").fadeIn(500);
        }
        if($(window).scrollTop()<400){
            $(".gotoTop").fadeOut(500);
        }
    })
    $(".gotoTop").click(function(){
        $("body,html").stop().animate({"scrollTop":0},500)
    })
})
