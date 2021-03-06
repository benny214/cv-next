/* =Home specialty fade
============================================================================== */
$(document).ready(function() {
    $("#graphic-wrapper").addClass("show-phone"), $("#logo").addClass("show-logo"), $("#intro-text").addClass("show-text"), $("#primary-button").addClass("show-btn")
}), console.log("yoyo"), map_range = function(e, t, n, r, i) {
    return e < t ? r : e > n ? i : r + (i - r) * (e - t) / (n - t)
};
var lastScrollTop = 0,
    layersWrapper = 0,
    canvasWrapper = 0,
    controlsWrapper = 0,
    layersWrapperHeight = 0,
    canvasWrapperHeight = 0,
    controlsWrapperHeight = 0;
$(window).load(function() {
    var e = $("#layers-graphic").height(),
        t = $("#canvas-graphic").height(),
        n = $("#controls-graphic").height();
    window.innerWidth >= 960 && ($("#layers-graphic").css({
        top: window.innerHeight / 2 - e / 2 + 15 + "px"
    }), $("#canvas-graphic").css({
        top: window.innerHeight / 2 - t / 2 + 15 + "px"
    }), $("#controls-graphic").css({
        top: window.innerHeight / 2 - n / 2 + 15 + "px"
    })), layersWrapper = $(".layers-wrapper").offset().top, canvasWrapper = $(".canvas-wrapper").offset().top, controlsWrapper = $(".controls-wrapper").offset().top, layersWrapperHeight = $(".layers-wrapper").height(), canvasWrapperHeight = $(".canvas-wrapper").height(), controlsWrapperHeight = $(".controls-wrapper").height(), $(window).scroll(function(r) {
        var i = $(document).scrollTop();
        console.log("scroll:" + i), console.log("canvas:" + canvasWrapper), console.log("canvasH:" + canvasWrapperHeight), console.log("distance:" + (canvasWrapper - i)), console.log("middle:" + (canvasWrapper - i + layersWrapperHeight / 2)), window.innerWidth >= 960 && ($("#layers-graphic").css({
            top: window.innerHeight / 2 - e / 2 + 15 + "px"
        }), $("#canvas-graphic").css({
            top: window.innerHeight / 2 - t / 2 + 15 + "px"
        }), $("#controls-graphic").css({
            top: window.innerHeight / 2 - n / 2 + 15 + "px"
        })), window.innerWidth >= 960 && i > lastScrollTop && ($("#layers-graphic").removeClass("invisible"), $("#canvas-graphic").removeClass("invisible"), $("#controls-graphic").removeClass("invisible")), window.innerWidth >= 960 && i >= layersWrapper / 2 && ($(".layers-graphic").css({
            opacity: map_range(i, layersWrapper - layersWrapperHeight / 2, layersWrapper, 0, 1)
        }), $(".layers-graphic").css({
            transform: "scale(" + map_range(i, layersWrapper - layersWrapperHeight / 2, layersWrapper, .75, 1) + ")"
        }), $(".layers-text").css({
            opacity: map_range(i, layersWrapper - layersWrapperHeight / 2, layersWrapper, 0, 1)
        })), window.innerWidth >= 960 && i >= layersWrapper + 100 && ($(".layers-graphic").css({
            transform: "translateX(" + map_range(i, layersWrapper + 100, layersWrapper + 300, 0, -500) + "px)"
        }), $(".layers-graphic").css({
            opacity: map_range(i, layersWrapper + 100, layersWrapper + 300, 1, 0)
        })), window.innerWidth >= 960 && i >= canvasWrapper / 2 && ($(".canvas-graphic").css({
            opacity: map_range(i, canvasWrapper - canvasWrapperHeight / 2, canvasWrapper, 0, 1)
        }), $(".canvas-graphic").css({
            transform: "scale(" + map_range(i, canvasWrapper - canvasWrapperHeight / 2, canvasWrapper, .75, 1) + ")"
        }), $(".canvas-text").css({
            opacity: map_range(i, canvasWrapper - canvasWrapperHeight / 2, canvasWrapper, 0, 1)
        })), window.innerWidth >= 960 && i >= canvasWrapper + 100 && ($(".canvas-graphic").css({
            transform: "translateX(" + map_range(i, canvasWrapper + 100, canvasWrapper + 300, 0, -500) + "px)"
        }), $(".canvas-graphic").css({
            opacity: map_range(i, canvasWrapper + 100, canvasWrapper + 300, 1, 0)
        })), window.innerWidth >= 960 && i >= controlsWrapper / 2 && ($(".controls-graphic").css({
            opacity: map_range(i, controlsWrapper - controlsWrapperHeight / 2, controlsWrapper, 0, 1)
        }), $(".controls-graphic").css({
            transform: "scale(" + map_range(i, controlsWrapper - controlsWrapperHeight / 2, controlsWrapper, .75, 1) + ")"
        }), $(".controls-text").css({
            opacity: map_range(i, controlsWrapper - controlsWrapperHeight / 2, controlsWrapper, 0, 1)
        })), window.innerWidth >= 960 && i >= controlsWrapper + 100 && $(".controls-graphic").css({
            transform: "translateY(" + map_range(i, controlsWrapper + 100, controlsWrapper + 400, 0, -300) + "px)"
        }), window.innerWidth >= 960 && i < lastScrollTop && i <= 500 && (console.log("less than 500"), $("#layers-graphic").removeAttr("style"), $("#layers-graphic").addClass("invisible"), $("#canvas-graphic").removeAttr("style"), $("#canvas-graphic").addClass("invisible"), $("#controls-graphic").removeAttr("style"), $("#controls-graphic").addClass("invisible")), lastScrollTop = i
    })
}), $(window).resize(function() {
    var e = $(document).scrollTop(),
        t = $("#layers-graphic").height(),
        n = $("#canvas-graphic").height(),
        r = $("#controls-graphic").height();
    layersWrapperHeight = $(".layers-wrapper").height(), canvasWrapperHeight = $(".canvas-wrapper").height(), controlsWrapperHeight = $(".controls-wrapper").height(), window.innerWidth >= 960 && ($("#layers-graphic").css({
        top: window.innerHeight / 2 - t / 2 + 15 + "px"
    }), $("#canvas-graphic").css({
        top: window.innerHeight / 2 - n / 2 + 15 + "px"
    }), $("#controls-graphic").css({
        top: window.innerHeight / 2 - r / 2 + 15 + "px"
    })), layersWrapper = $(".layers-wrapper").offset().top, canvasWrapper = $(".canvas-wrapper").offset().top, controlsWrapper = $(".controls-wrapper").offset().top, window.innerWidth < 960 && ($(".layers-graphic").removeAttr("style"), $(".layers-text").removeAttr("style"), $(".canvas-graphic").removeAttr("style"), $(".canvas-text").removeAttr("style"), $(".controls-graphic").removeAttr("style"), $(".controls-text").removeAttr("style"), $(".layers-wrapper").removeAttr("style"), $(".canvas-wrapper").removeAttr("style"), $(".controls-wrapper").removeAttr("style")), window.innerWidth >= 960 && ($("#layers-graphic").css({
        top: window.innerHeight / 2 - t / 2 + 15 + "px"
    }), $("#canvas-graphic").css({
        top: window.innerHeight / 2 - n / 2 + 15 + "px"
    }), $("#controls-graphic").css({
        top: window.innerHeight / 2 - r / 2 + 15 + "px"
    })), window.innerWidth >= 960 && e > lastScrollTop && ($("#layers-graphic").removeClass("invisible"), $("#canvas-graphic").removeClass("invisible"), $("#controls-graphic").removeClass("invisible")), window.innerWidth >= 960 && e >= layersWrapper / 2 && ($(".layers-graphic").css({
        opacity: map_range(e, layersWrapper - layersWrapperHeight / 2, layersWrapper, 0, 1)
    }), $(".layers-graphic").css({
        transform: "scale(" + map_range(e, layersWrapper - layersWrapperHeight / 2, layersWrapper, .75, 1) + ")"
    }), $(".layers-text").css({
        opacity: map_range(e, layersWrapper - layersWrapperHeight / 2, layersWrapper, 0, 1)
    })), window.innerWidth >= 960 && e >= layersWrapper + 100 && ($(".layers-graphic").css({
        transform: "translateX(" + map_range(e, layersWrapper + 100, layersWrapper + 300, 0, -500) + "px)"
    }), $(".layers-graphic").css({
        opacity: map_range(e, layersWrapper + 100, layersWrapper + 300, 1, 0)
    })), window.innerWidth >= 960 && e >= canvasWrapper / 2 && ($(".canvas-graphic").css({
        opacity: map_range(e, canvasWrapper / 2, canvasWrapper, 0, 1)
    }), $(".canvas-graphic").css({
        transform: "scale(" + map_range(e, canvasWrapper / 2, canvasWrapper, .75, 1) + ")"
    }), $(".canvas-text").css({
        opacity: map_range(e, canvasWrapper / 2, canvasWrapper, 0, 1)
    })), window.innerWidth >= 960 && e >= canvasWrapper + 100 && ($(".canvas-graphic").css({
        transform: "translateX(" + map_range(e, canvasWrapper + 100, canvasWrapper + 300, 0, -500) + "px)"
    }), $(".canvas-graphic").css({
        opacity: map_range(e, canvasWrapper + 100, canvasWrapper + 300, 1, 0)
    })), window.innerWidth >= 960 && e >= controlsWrapper / 2 && ($(".controls-graphic").css({
        opacity: map_range(e, controlsWrapper / 2, controlsWrapper - 300, 0, 1)
    }), $(".controls-graphic").css({
        transform: "scale(" + map_range(e, controlsWrapper / 2, controlsWrapper - 300, .75, 1) + ")"
    }), $(".controls-text").css({
        opacity: map_range(e, controlsWrapper / 2, controlsWrapper - 100, 0, 1)
    })), window.innerWidth >= 960 && e >= controlsWrapper + 100 && $(".controls-graphic").css({
        transform: "translateY(" + map_range(e, controlsWrapper + 100, controlsWrapper + 400, 0, -300) + "px)"
    }), window.innerWidth >= 960 && e < lastScrollTop && e <= 500 && (console.log("less than 500"), $("#layers-graphic").removeAttr("style"), $("#layers-graphic").addClass("invisible"), $("#canvas-graphic").removeAttr("style"), $("#canvas-graphic").addClass("invisible"), $("#controls-graphic").removeAttr("style"), $("#controls-graphic").addClass("invisible"))
    





















});
