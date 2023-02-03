$(document).ready(function () {

    /* **** scrollIt ***** */
    $(function () {
        $.scrollIt({
            upKey: 38,
            downKey: 40,
            easing: "linear",
            scrollTime: 600,
            activeClass: "active",
            onPageChange: null,
            topOffset: -50,
        });
    });
    /* **** End scrollIt ***** */
    
    const textElement = document.getElementById("text");
    const copyButton = document.getElementById("copy");

    const copyText = (e) => {
        window.getSelection().selectAllChildren(textElement);
        document.execCommand("copy");
        e.target.setAttribute("tooltip", "Copied! ✅");
    };

    const resetTooltip = (e) => {
        e.target.setAttribute("tooltip", "Copy to clipboard");
    };

    copyButton.addEventListener("click", (e) => copyText(e));
    copyButton.addEventListener("mouseover", (e) => resetTooltip(e));


    /* *** SVG Animation **** */
    function shakeIt() {
        $('.headeline-text1').each(function(i) {
          var $t = $(this);
          setTimeout(function() {
            $t.addClass('e-hide-highlight');
          },  1000 * i);
        });
    }
    shakeIt();
    setInterval(function() {
    shakeIt();
        $('.headeline-text1').removeClass('e-hide-highlight');
    },
    $('.headeline-text1').length*1000);
    

    function shakeIt2() {
        $('.headeline-text2').each(function(i) {
          var $t = $(this);
          setTimeout(function() {
            $t.addClass('e-hide-highlight');
          },  1000 * i);
        });
    }
    shakeIt2();
    setInterval(function() {
    shakeIt2();
        $('.headeline-text2').removeClass('e-hide-highlight');
    }, 
    $('.headeline-text2').length*1000);


    function shakeIt3() {
        $('.headeline-text3').each(function(i) {
          var $t = $(this);
          setTimeout(function() {
            $t.addClass('e-hide-highlight');
          },  1000 * i);
        });
    }
    shakeIt3();
    setInterval(function() {
    shakeIt3();
        $('.headeline-text3').removeClass('e-hide-highlight');
    }, 
    $('.headeline-text3').length*1000);


    function shakeIt4() {
        $('.headeline-text4').each(function(i) {
          var $t = $(this);
          setTimeout(function() {
            $t.addClass('e-hide-highlight');
          },  1000 * i);
        });
    }
    shakeIt4();
    setInterval(function() {
    shakeIt4();
        $('.headeline-text4').removeClass('e-hide-highlight');
    }, 
    $('.headeline-text4').length*1000);

    /* *** End SVG Animation **** */

    
    /* *** Parellax *** */
    var img1 = $("#img1");
    /*var img2 = $("#img2");
    var img3 = $("#img3");
    var img4 = $("#img4");
    var img5 = $("#img5");*/

    var layer = $(".hero-wrp");

    layer.mousemove(function (e) {
        var ivalueX = (e.pageX * -1) / 30;
        var ivalueY = (e.pageY * -1) / 30;
        var cvalueX = (e.pageX * -1) / 40;
        var cvalueY = (e.pageY * -1) / 60;
        console.log("ok");
      img1.css("transform", "translate3d(" + ivalueX + "px," + cvalueY + "px, 0)");
      img2.css("transform", "translate3d(" + cvalueX + "px," + ivalueY + "px, 0)");
      img3.css("transform", "translate3d(" + cvalueX + "px," + ivalueX + "px, 0)");
      img4.css("transform", "translate3d(" + cvalueX + "px," + ivalueY + "px, 0)");
      img5.css("transform", "translate3d(" + cvalueX + "px," + ivalueX + "px, 0)");
    });
    /* *** End Parellax *** */

    AOS.init({
        duration: 1000,
    });
});
