// (function () {
//     alert("abc")
//     document.getElementById('outer-loader').style.display = 'none';
//     // el.style.display="none !important";
// })
var $  = require('jquery');

$(window).on("load", function() {
    document.getElementById('iframe').src += '&autoplay=1';
    setTimeout(function () {
        document.getElementById('outer-loader').style.display = 'none';
        document.getElementById('root').style.display = 'block';
    }, 500)
    // document.getElementById('iframe').src = "https://www.youtube.com/embed/fzLdtFAyFFA?rel=0&modestbranding=1&autohide=1&autoplay=1&controls=0&showinfo=0";
    // document.getElementById('myVideo').play();
    // $("div.row_30, div.row_38").lazyload({
    //     effect : "fadeIn"
    // });
    // let images = document.querySelectorAll(".row_30");
    // lazyload(images);
    // Executes when complete page is fully loaded, including
    // all frames, objects and images
});