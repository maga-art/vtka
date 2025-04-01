$(document).ready(function() {
    // Аккордеон
    $(".accordion h3").click(function() {
        $(this).next().slideToggle();
        $(this).siblings("h3").next().slideUp();
    });

    // Вкладки
    $(".tabs ul li").click(function() {
        var target = $(this).find("a").attr("href");
        $(".tab-content").hide();
        $(target).show();
        $(".tabs ul li").removeClass("active");
        $(this).addClass("active");
    });

    // Попап
    $("#openPopup").click(function() {
        $(".overlay, .popup").fadeIn();
    });

    $(".close").click(function() {
        $(".overlay, .popup").fadeOut();
    });
});