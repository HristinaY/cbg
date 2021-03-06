$(".carousel-arr").on("click", function() {
    const carouselItems = $(".carousel-item");
    let currentItem = $(".carousel-item.active");
    let nextItem;

    if ($(this).hasClass("arr-back")) {
        nextItem = $(currentItem).prev(".carousel-item");
        if ($(nextItem).length == 0) {
            nextItem = $(carouselItems).last();
        }
    }
    else {
        nextItem = $(currentItem).next(".carousel-item");
        if ($(nextItem).length == 0) {
            nextItem = $(carouselItems).first();
        }
    }
    $(nextItem).addClass("active");
    $(currentItem).removeClass("active");
});

const header = $(".header");
$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    scroll >= 50 ? header.addClass("sticky") : header.removeClass("sticky");
});


