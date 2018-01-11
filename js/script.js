$(function() {
    //COMUNNITY CAROSEUL
    var carousel = $('#carousel');
    var liCarousel = $('#carousel ul');
    var elLiCarousel = liCarousel.find('li');
    setImageWidth();
    function setImageWidth(){
        carousel.find('li').width(carousel.width()/2);
    }
    function changeSlide() {
        if (!(liCarousel.is(':animated'))) {
            liCarousel.animate({marginLeft: -carousel.width()}, 1500, moveFirstSlide);
        }
    }
    function moveFirstSlide() {
        elLiCarousel = liCarousel.find('li');
        var first = elLiCarousel[0];
        var second = elLiCarousel[1];
        var last = elLiCarousel[elLiCarousel.length-1];
        last.after(first,second);
        liCarousel.css({
            marginLeft: 0
        })
    }
    function changeSlideBack() {
        if (!(liCarousel.is(':animated'))) {
            moveFirstSlideBack();
            liCarousel.animate({marginLeft: 0}, 1500);   
        }
    }
    function moveFirstSlideBack() {
        elLiCarousel = liCarousel.find('li');
        var first = elLiCarousel[0];
        var beforeLast = elLiCarousel[elLiCarousel.length-2];
        var last = elLiCarousel[elLiCarousel.length-1];
        first.before(beforeLast,last);
        liCarousel.css({
            marginLeft: -carousel.width()
        })
    }
    $('#right-change').click(changeSlide);
    $('#left-change').click(changeSlideBack);
    $(window).resize(function() {
        setImageWidth();
    });
    //DESIGN CAROUSEL
    var car = $('#designCarousel');
    var carDiv = $('#designCarousel div');
   /* for (var i = 1; i < carDiv.length; i++) {
        carDiv[i].css({
            display: 'none'
        })
        var thisDiv =carDiv[i];
        $(thisDiv).css({
            display: 'none'
        });
    }*/
    setCarosuelPosition();
    function setCarosuelPosition() {
        var przesun = $('.third').height() - $('#designCarousel').height();
        if (przesun<100) {
            car.css({
                transform: 'translate(0, '+(przesun+50)+'px)',
                '-webkit-transform': 'translate(0, '+(przesun+50)+'px)',
                '-ms-transform': 'translate(0, '+(przesun+50)+'px)'
            })
        } else {
            car.css({
                transform: 'translate(0, 0)'
            })
        }
    }
    $(window).resize(function(){
        setCarosuelPosition();
    });
    $('#d-right-change').click(function() {
        $('#designCarousel div:first').fadeOut()
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#designCarousel');
    });
    $('#d-left-change').click(function() {
        $('#designCarousel div:first').fadeOut(1000);
        $('#designCarousel div:last').fadeIn()
        .prependTo('#designCarousel');
    });
});