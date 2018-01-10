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
        liCarousel.animate({marginLeft: -carousel.width()}, 1500, moveFirstSlide);
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
        moveFirstSlideBack();
        liCarousel.animate({marginLeft: 0}, 1500);
    }
    function moveFirstSlideBack() {
        elLiCarousel = liCarousel.find('li');
        var first = elLiCarousel[0];
        var second = elLiCarousel[1];
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
});