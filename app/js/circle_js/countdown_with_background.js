/*
 * Circular Countdown v1.0 
 *
 * Copyright 2015, LambertGroup
 * 
 */
(function(d) {
    function la(a, b) {
        a.remainingDays = Math.floor(a.totalRemainingSeconds / a.secondsInADay);
        a.remainingHours = Math.floor((a.totalRemainingSeconds - a.remainingDays * a.secondsInADay) / a.secondsInAnHour);
        a.remainingMinutes = Math.floor((a.totalRemainingSeconds - a.remainingDays * a.secondsInADay - a.remainingHours * a.secondsInAnHour) / a.secondsInAMinute);
        a.remainingSeconds = a.totalRemainingSeconds - a.remainingDays * a.secondsInADay - a.remainingHours * a.secondsInAnHour - a.remainingMinutes * a.secondsInAMinute
    }

    function R(a,
        b, f, e, h, l, q, g, k, m, p, D, w, J, u) {
        if (0 <= g.totalRemainingSeconds) {
            switch (a) {
                case "seconds":
                    degx = 2 * (60 - g.remainingSeconds) * Math.PI / 60 - .5 * Math.PI;
                    g.secondsNumberDiv.html(g.remainingSeconds);
                    break;
                case "minutes":
                    degx = 2 * (60 - g.remainingMinutes) * Math.PI / 60 - .5 * Math.PI;
                    g.minutesNumberDiv.html(g.remainingMinutes);
                    break;
                case "hours":
                    degx = 2 * (24 - g.remainingHours) * Math.PI / 24 - .5 * Math.PI;
                    g.hoursNumberDiv.html(g.remainingHours);
                    break;
                case "days":
                    degx = 2 * (g.entireWorkingDaysPeriod - g.remainingDays) * Math.PI / g.entireWorkingDaysPeriod -
                        .5 * Math.PI;
                    g.daysNumberDiv.html(g.remainingDays);
                    break;
                default:
                    degx = 2 * (60 - g.remainingSeconds) * Math.PI / 60 - .5 * Math.PI
            }
            "days" == a && u && ma(k, g, m, p, D, w); - 1 != J && 9 > J || (b.clearRect(0, 0, f.width, f.height), b.beginPath(), b.globalAlpha = e / 100, b.arc(parseInt((k.circleRadius + (k.circleLineWidth + k.behindCircleLineWidthExpand) / 2 + k.circleLeftRightPadding) * g.pluginRatio, 10), parseInt((k.circleRadius + (k.circleLineWidth + k.behindCircleLineWidthExpand) / 2 + k.circleTopBottomPadding) * g.pluginRatio, 10), parseInt(k.circleRadius * g.pluginRatio,
                10), 0, 2 * Math.PI, !1), b.lineWidth = parseInt((k.circleLineWidth + k.behindCircleLineWidthExpand) * g.pluginRatio, 10), b.strokeStyle = h, b.stroke(), b.closePath(), b.beginPath(), b.globalAlpha = l / 100, b.arc(parseInt((k.circleRadius + (k.circleLineWidth + k.behindCircleLineWidthExpand) / 2 + k.circleLeftRightPadding) * g.pluginRatio, 10), parseInt((k.circleRadius + (k.circleLineWidth + k.behindCircleLineWidthExpand) / 2 + k.circleTopBottomPadding) * g.pluginRatio, 10), k.circleRadius * g.pluginRatio, -.5 * Math.PI, degx, !1), b.lineWidth = parseInt(k.circleLineWidth *
                g.pluginRatio, 10), b.strokeStyle = q, b.stroke(), b.closePath());
            "seconds" == a && g.remainingSeconds--;
            0 > g.remainingSeconds && la(g, k)
        } else "seconds" == a && 0 >= g.repetitionNo && (g.repetitionNo++, clearInterval(g.intervalIDSeconds), d.isFunction(k.complete) && k.complete.call(this, the_title))
    }

    function ma(a, b, f, e, h, l) {
        d(".innerNumber", f).css({
            display: "block",
            left: parseInt((b.canvasWidth - d(".innerNumber", f).width()) / 2, 10) + "px",
            top: parseInt((b.canvasHeight - d(".innerNumber", f).height()) / 2 - a.numberAdditionalTopPadding, 10) +
                "px"
        });
        d(".innerNumber", e).css({
            display: "block",
            left: parseInt((b.canvasWidth - d(".innerNumber", e).width()) / 2, 10) + "px",
            top: parseInt((b.canvasHeight - d(".innerNumber", e).height()) / 2 - a.numberAdditionalTopPadding, 10) + "px"
        });
        d(".innerNumber", h).css({
            display: "block",
            left: parseInt((b.canvasWidth - d(".innerNumber", h).width()) / 2, 10) + "px",
            top: parseInt((b.canvasHeight - d(".innerNumber", h).height()) / 2 - a.numberAdditionalTopPadding, 10) + "px"
        });
        d(".innerNumber", l).css({
            display: "block",
            left: parseInt((b.canvasWidth - d(".innerNumber",
                l).width()) / 2, 10) + "px",
            top: parseInt((b.canvasHeight - d(".innerNumber", l).height()) / 2 - a.numberAdditionalTopPadding, 10) + "px"
        })
    }

    function na(a, b, f, e, h, l, q, g, k, m, p, D, w, J, u) {
        var t = T();
        responsiveWidth = f.parent().parent().width();
        responsiveHeight = f.parent().parent().height();
        b.origWidth != responsiveWidth && (responsiveWidth > b.origWidth && (responsiveWidth = b.origWidth), b.origWidth > responsiveWidth || b.prevOrigWidth != responsiveWidth) && (b.prevOrigWidth = responsiveWidth, a.pluginRatio = responsiveWidth / b.origWidth, a.canvasWidth =
            parseInt(a.canvasOrigWidth * a.pluginRatio, 10), a.canvasHeight = parseInt(a.canvasOrigHeight * a.pluginRatio, 10), a.canvasDays.width = a.canvasWidth, a.canvasDays.height = a.canvasHeight, h.css({
                width: parseInt(a.unitDivOrigWidthDays * a.pluginRatio, 10) + "px",
                height: parseInt(a.unitDivOrigHeightDays * a.pluginRatio, 10) + "px"
            }), a.canvasHours.width = a.canvasWidth, a.canvasHours.height = a.canvasHeight, l.css({
                width: parseInt(a.unitDivOrigWidthHours * a.pluginRatio, 10) + "px",
                height: parseInt(a.unitDivOrigHeightHours * a.pluginRatio,
                    10) + "px"
            }), a.canvasMinutes.width = a.canvasWidth, a.canvasMinutes.height = a.canvasHeight, q.css({
                width: parseInt(a.unitDivOrigWidthMinutes * a.pluginRatio, 10) + "px",
                height: parseInt(a.unitDivOrigHeightMinutes * a.pluginRatio, 10) + "px"
            }), a.canvasSeconds.width = a.canvasWidth, a.canvasSeconds.height = a.canvasHeight, g.css({
                width: parseInt(a.unitDivOrigWidthSeconds * a.pluginRatio, 10) + "px",
                height: parseInt(a.unitDivOrigHeightSeconds * a.pluginRatio, 10) + "px"
            }), text_top_aux = 0, -1 != t && 9 > t && (text_top_aux = a.canvasHeight), d(".innerNumber",
                h).css({
                "font-size": parseInt(b.numberSize * a.pluginRatio, 10) + "px",
                "line-height": parseInt(b.numberSize * a.pluginRatio, 10) + "px"
            }), d(".innerText", h).css({
                top: text_top_aux + "px",
                "font-size": parseInt(b.textSize * a.pluginRatio, 10) + "px",
                "line-height": parseInt(b.textSize * a.pluginRatio, 10) + "px",
                "margin-top": parseInt(b.textMarginTop * a.pluginRatio, 10) + "px",
                "padding-top": parseInt(b.textPadding * a.pluginRatio, 10) + "px",
                "padding-bottom": parseInt(b.textPadding * a.pluginRatio, 10) + "px"
            }), d(".innerNumber", l).css({
                "font-size": parseInt(b.numberSize *
                    a.pluginRatio, 10) + "px",
                "line-height": parseInt(b.numberSize * a.pluginRatio, 10) + "px"
            }), d(".innerText", l).css({
                top: text_top_aux + "px",
                "font-size": parseInt(b.textSize * a.pluginRatio, 10) + "px",
                "line-height": parseInt(b.textSize * a.pluginRatio, 10) + "px",
                "margin-top": parseInt(b.textMarginTop * a.pluginRatio, 10) + "px",
                "padding-top": parseInt(b.textPadding * a.pluginRatio, 10) + "px",
                "padding-bottom": parseInt(b.textPadding * a.pluginRatio, 10) + "px"
            }), d(".innerNumber", q).css({
                "font-size": parseInt(b.numberSize * a.pluginRatio, 10) +
                    "px",
                "line-height": parseInt(b.numberSize * a.pluginRatio, 10) + "px"
            }), d(".innerText", q).css({
                top: text_top_aux + "px",
                "font-size": parseInt(b.textSize * a.pluginRatio, 10) + "px",
                "line-height": parseInt(b.textSize * a.pluginRatio, 10) + "px",
                "margin-top": parseInt(b.textMarginTop * a.pluginRatio, 10) + "px",
                "padding-top": parseInt(b.textPadding * a.pluginRatio, 10) + "px",
                "padding-bottom": parseInt(b.textPadding * a.pluginRatio, 10) + "px"
            }), d(".innerNumber", g).css({
                "font-size": parseInt(b.numberSize * a.pluginRatio, 10) + "px",
                "line-height": parseInt(b.numberSize *
                    a.pluginRatio, 10) + "px"
            }), d(".innerText", g).css({
                top: text_top_aux + "px",
                "font-size": parseInt(b.textSize * a.pluginRatio, 10) + "px",
                "line-height": parseInt(b.textSize * a.pluginRatio, 10) + "px",
                "margin-top": parseInt(b.textMarginTop * a.pluginRatio, 10) + "px",
                "padding-top": parseInt(b.textPadding * a.pluginRatio, 10) + "px",
                "padding-bottom": parseInt(b.textPadding * a.pluginRatio, 10) + "px"
            }), k.css({
                width: parseInt(b.origWidth * a.pluginRatio, 10) + a.bordersW + 1 + "px",
                "margin-top": parseInt(b.allCirclesTopMargin * a.pluginRatio, 10) + "px",
                "margin-bottom": parseInt(b.allCirclesBottomMargin * a.pluginRatio, 10) + "px"
            }), p.css({
                "font-family": b.pluginFontFamily,
                "font-size": Math.max(10, parseInt(b.h2Size * a.pluginRatio, 10)) + "px",
                "line-height": Math.max(10, parseInt(b.h2Size * a.pluginRatio, 10)) + "px",
                "margin-top": Math.max(10, parseInt(b.h2TopMargin * a.pluginRatio, 10)) + "px"
            }), D.css({
                "font-family": b.pluginFontFamily,
                "font-size": Math.max(8, parseInt(b.h3Size * a.pluginRatio, 10)) + "px",
                "line-height": Math.max(8, parseInt(b.h3Size * a.pluginRatio, 10)) + "px",
                "margin-top": parseInt(b.h3TopMargin *
                    a.pluginRatio, 10) + "px"
            }), w.css({
                "font-family": b.pluginFontFamily,
                "font-size": Math.max(6, parseInt(b.h4Size * a.pluginRatio, 10)) + "px",
                "line-height": Math.max(6, parseInt(b.h4Size * a.pluginRatio, 10)) + "px",
                "margin-top": parseInt(b.h4TopMargin * a.pluginRatio, 10) + "px"
            }), J.css({
                "font-family": b.pluginFontFamily,
                "font-size": Math.max(6, parseInt(b.defaultTextSize * a.pluginRatio, 10)) + "px",
                "line-height": Math.max(6, parseInt(b.defaultTextSize * a.pluginRatio, 10)) + "px",
                "margin-top": parseInt(b.defaultTextTopMargin * a.pluginRatio,
                    10) + "px"
            }), u.css({
                "font-family": b.pluginFontFamily,
                "font-size": Math.max(6, parseInt(b.defaultTextLinkSize * a.pluginRatio, 10)) + "px",
                "line-height": Math.max(6, parseInt(b.defaultTextLinkSize * a.pluginRatio, 10)) + "px"
            }), e.css({
                width: parseInt(b.origWidth * a.pluginRatio, 10) + "px"
            }), m.css({
                width: parseInt(b.origWidth * a.pluginRatio, 10) + "px"
            }), f.css({
                width: k.width()
            }))
    }

    function T() {
        var a = -1;
        "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (a = parseFloat(RegExp.$1));
        return parseInt(a, 10)
    }

    function L(a) {
        var b = !1;
        a = a.substr(a.length - 4).toLowerCase();
        if (".jpg" == a || ".png" == a || ".gif" == a) b = !0;
        return b
    }

    function Y(a, b, f, e, h, l) {
        T(); - 1 == a && (a = 0);
        var q = d(h[a]),
            g = b.horizontalPosition;
        void 0 != q.attr("data-horizontalPosition") && "" != q.attr("data-horizontalPosition") && (g = q.attr("data-horizontalPosition"));
        h = b.verticalPosition;
        void 0 != q.attr("data-verticalPosition") && "" != q.attr("data-verticalPosition") && (h = q.attr("data-verticalPosition"));
        e = e[a].split(";");
        b.sliderWidth100Proc &&
            !b.sliderHeight100Proc && (e[0] /= b.origSliderWidth / b.sliderWidth, e[1] /= b.origSliderWidth / b.sliderWidth);
        var q = e[0],
            k = e[1];
        b.sliderWidth100Proc && b.sliderHeight100Proc && 1 < q && (q = l.winWidth, k = q * e[1] / e[0], k < l.winHeight && (k = l.winHeight, q = k * e[0] / e[1]), e[0] = parseInt(q, 10), e[1] = parseInt(k, 10));
        a = d("#contentHolderUnit_" + a, f).find("img:first");
        f = 0;
        switch (g) {
            case "left":
                f = 0;
                break;
            case "center":
                f = (b.sliderWidth - e[0]) / 2;
                break;
            case "right":
                f = b.sliderWidth - e[0];
                break;
            default:
                f = 0
        }
        g = 0;
        switch (h) {
            case "top":
                g = -2;
                break;
            case "center":
                g = (b.sliderHeight - e[1]) / 2;
                break;
            case "bottom":
                g = b.sliderHeight - e[1] + 2;
                break;
            default:
                g = 0
        }
        1 >= e[0] && 1 >= e[1] ? a.css({
            width: e[0] + "px",
            height: e[1] + "px",
            left: parseInt(f, 10) + "px",
            top: parseInt(g, 10) + "px",
            opacity: b.initialOpacity
        }) : a.css({
            width: e[0] + "px",
            height: e[1] + "px",
            "margin-left": parseInt(f, 10) + "px",
            "margin-top": parseInt(g, 10) + "px",
            opacity: b.initialOpacity
        })
    }

    function oa(a, b) {
        nowx = (new Date).getTime();
        !a.mouseOverBanner && b.showLineTimer && a.lineTimer.width(b.sliderWidth * (a.timeElapsed + nowx -
            a.lineTimerInitialTime) / 1E3 / b.autoPlay)
    }

    function Q(a, b, f, e, h, l, q, g, k, m, p, D, w, J, u, t, x) {
        var y = !0;
        if (!f.loop && b.current_img_no + a >= e || !f.loop && 0 > b.current_img_no + a || 2 > e) y = !1;
        y && !b.slideIsRunning && (b.slideIsRunning = !0, d(".newFS", m).contents().unwrap(), b.lineTimerInitialTime = (new Date).getTime(), b.timeElapsed = 0, f.showLineTimer && (clearInterval(b.intervalID), b.intervalID = setInterval(function() {
                oa(b, f)
            }, 125)), b.bottomNavClicked || (b.previous_current_img_no = b.current_img_no), b.bottomNavClicked = !1, "bullets" ==
            f.skin && d(h[b.current_img_no]).removeClass("bottomNavButtonON"), "bullets" != f.skin && d(w[b.current_img_no]).css({
                "border-color": f.thumbsBorderColorOFF
            }), p.css("display", "none"), b.current_img_no = b.current_img_no + a >= e ? 0 : 0 > b.current_img_no + a ? e - 1 : b.current_img_no + a, "bullets" == f.skin && d(h[b.current_img_no]).addClass("bottomNavButtonON"), "bullets" != f.skin && (d(w[b.current_img_no]).css({
                    "border-color": f.thumbsBorderColorON
                }), currentCarouselLeft = J.css("left").substr(0, J.css("left").lastIndexOf("px")), 0 === b.current_img_no ||
                b.current_img_no === e - 1 ? Z(0, J, u, t, f, e, x, b) : Z(1001, J, u, t, f, e, x, b)), f.fadeSlides ? (d("#contentHolderUnit_" + b.current_img_no, m).css({
                opacity: 1,
                "z-index": 0,
                display: "block"
            }), d("#contentHolderUnit_" + b.previous_current_img_no, m).css({
                "z-index": 1,
                display: "block"
            }), d("#contentHolderUnit_" + b.previous_current_img_no, m).animate({
                opacity: 0
            }, 800, "easeOutQuad", function() {
                b.slideIsRunning = !1;
                f.fadeSlides && (d("#contentHolderUnit_" + b.current_img_no, m).css({
                    "z-index": 1
                }), d("#contentHolderUnit_" + b.previous_current_img_no,
                    m).css({
                    "z-index": 0,
                    display: "none"
                }));
                b.currentImg = d(l[b.current_img_no]);
                "true" == b.currentImg.attr("data-video") && p.css("display", "block");
                "true" == d(l[b.previous_current_img_no]).attr("data-video") && (d("#contentHolderUnit_" + b.previous_current_img_no, m).html(d(l[b.previous_current_img_no]).html()), Y(b.previous_current_img_no, f, m, D, l, b));
                0 < f.autoPlay && 1 < e && !b.mouseOverBanner && (clearTimeout(b.timeoutID), b.timeoutID = setTimeout(function() {
                    Q(1, b, f, e, h, l, q, g, k, m, p, D, w, J, u, t, x)
                }, 1E3 * f.autoPlay))
            })) : k.animate({
                left: -1 *
                    b.current_img_no * f.sliderWidth + "px"
            }, 800, "easeOutQuad", function() {
                b.slideIsRunning = !1;
                b.currentImg = d(l[b.current_img_no]);
                "true" == b.currentImg.attr("data-video") && p.css("display", "block");
                "true" == d(l[b.previous_current_img_no]).attr("data-video") && (d("#contentHolderUnit_" + b.previous_current_img_no, m).html(d(l[b.previous_current_img_no]).html()), Y(b.previous_current_img_no, f, m, D, l, b));
                0 < f.autoPlay && 1 < e && !b.mouseOverBanner && (clearTimeout(b.timeoutID), b.timeoutID = setTimeout(function() {
                    Q(1, b, f, e, h, l,
                        q, g, k, m, p, D, w, J, u, t, x)
                }, 1E3 * f.autoPlay))
            }), -1 != T() && f.texturePath && d(".texture_over_image", m).css("display", "block"))
    }

    function Z(a, b, d, e, h, l, q, g) {
        currentCarouselLeft = b.css("left").substr(0, b.css("left").lastIndexOf("px"));
        1 === a || -1 === a ? (g.isCarouselScrolling = !0, b.css("opacity", "0.5"), b.animate({
                opacity: 1,
                left: "+=" + a * g.carouselStep
            }, 500, "easeOutCubic", function() {
                W(g, b, d, e, h, l, q);
                g.isCarouselScrolling = !1
            })) : currentCarouselLeft != -1 * Math.floor(g.current_img_no / h.numberOfThumbsPerScreen) * g.carouselStep &&
            (g.isCarouselScrolling = !0, b.css("opacity", "0.5"), b.animate({
                opacity: 1,
                left: -1 * Math.floor(g.current_img_no / h.numberOfThumbsPerScreen) * g.carouselStep
            }, 500, "easeOutCubic", function() {
                W(g, b, d, e, h, l, q);
                g.isCarouselScrolling = !1
            }))
    }

    function W(a, b, d, e, h, l, q) {
        currentCarouselLeft = b.css("left").substr(0, b.css("left").lastIndexOf("px"));
        0 > currentCarouselLeft ? d.hasClass("carouselLeftNavDisabled") && d.removeClass("carouselLeftNavDisabled") : d.addClass("carouselLeftNavDisabled");
        Math.abs(currentCarouselLeft - a.carouselStep) <
            (2 * a.thumbBorderWidth + q.width() + a.thumbMarginLeft) * l ? e.hasClass("carouselRightNavDisabled") && e.removeClass("carouselRightNavDisabled") : e.addClass("carouselRightNavDisabled")
    }

    function pa(a, b, f, e, h, l, q, g, k, m, p) {
        "bullets" != b.skin && (p.css({
            top: b.sliderHeight + "px",
            "margin-top": parseInt(b.thumbsWrapperMarginTop / (b.origSliderWidth / b.sliderWidth), 10) + "px",
            height: parseInt(b.origthumbsHolderWrapperH / (b.origSliderWidth / b.sliderWidth), 10) + "px"
        }), bgTopCorrection = 0, q.css("background-position", "0px " + ((p.height() -
            b.origthumbsHolderWrapperH) / 2 + bgTopCorrection) + "px"), g.css("background-position", "0px " + ((p.height() - b.origthumbsHolderWrapperH) / 2 + bgTopCorrection) + "px"), m.css("width", b.sliderWidth - q.width() - g.width()), b.origWidthThumbsHolderVisibleWrapper = b.origSliderWidth - q.width() - g.width(), h.css({
            width: parseInt(b.origThumbW / (b.origWidthThumbsHolderVisibleWrapper / m.width()), 10) + "px",
            height: parseInt(b.origThumbH / (b.origWidthThumbsHolderVisibleWrapper / m.width()), 10) + "px"
        }), d(".thumbsHolder_ThumbOFF", e).find("img:first").css({
            width: h.width() +
                "px",
            height: h.height() + "px"
        }), a.thumbMarginLeft = Math.floor((p.width() - q.width() - g.width() - (2 * a.thumbBorderWidth + k.width()) * b.numberOfThumbsPerScreen) / (b.numberOfThumbsPerScreen - 1)), thumb_i = -1, l.children().each(function() {
            thumb_i++;
            theThumb = d(this);
            0 >= thumb_i ? theThumb.css("margin-left", Math.floor((p.width() - q.width() - g.width() - (a.thumbMarginLeft + (2 * a.thumbBorderWidth + theThumb.width())) * (b.numberOfThumbsPerScreen - 1) - (2 * a.thumbBorderWidth + theThumb.width())) / 2) + "px") : theThumb.css("margin-left", a.thumbMarginLeft +
                "px")
        }), a.carouselStep = (2 * a.thumbBorderWidth + k.width() + a.thumbMarginLeft) * b.numberOfThumbsPerScreen);
        if (b.numberOfThumbsPerScreen >= f) switch (b.bottomNavPos) {
            case "left":
                m.css("left", b.bottomNavLateralMargin + a.thumbMarginLeft + "px");
                break;
            case "right":
                m.css("left", b.sliderWidth - (2 * a.thumbBorderWidth + h.width() + a.thumbMarginLeft) * f - b.bottomNavLateralMargin + "px");
                break;
            default:
                m.css("left", parseInt((p.width() - (2 * a.thumbBorderWidth + k.width() + a.thumbMarginLeft) * f) / 2, 10) + "px")
        }
    }

    function qa(a, b, f, e) {
        var h =
            b.videoProportionWidth;
        b = b.videoProportionHeight;
        b = 9;
        void 0 != d(f[a.current_img_no]).attr("data-videoProportionWidth") && "" != d(f[a.current_img_no]).attr("data-videoProportionWidth") && (h = d(f[a.current_img_no]).attr("data-videoProportionWidth"));
        a = parseInt(1280 / h * b, 10);
        windowW = d(window).width() + 1;
        windowH = d(window).height();
        f = 1 / (1280 / windowW);
        a / windowH < 1280 / windowW && (f = 1 / (a / windowH));
        16 != h && (f += .11);
        d("iframe", e).css({
            width: 1280 * f + "px",
            height: a * f + "px",
            left: parseInt((windowW - 1280 * f) / 2, 10) + "px",
            top: parseInt((windowH -
                a * f) / 2, 10) + "px"
        })
    }
    d.fn.countdown_with_background = function(a) {
        a = d.extend({}, d.fn.countdown_with_background.defaults, a);
        return this.each(function() {
            var b = d(this);
            responsiveWidth = b.parent().width();
            responsiveHeight = b.parent().height();
            a.responsiveRelativeToBrowser && (responsiveWidth = d(window).width(), responsiveHeight = d(window).height());
            a.origSliderWidth = a.sliderWidth;
            a.fadeSlides || --a.origSliderWidth;
            a.sliderWidth100Proc && (a.sliderWidth = responsiveWidth);
            a.origSliderHeight = a.sliderHeight;
            a.sliderHeight100Proc &&
                (a.sliderHeight = responsiveHeight);
            a.responsive && (a.origSliderWidth != responsiveWidth || a.sliderWidth100Proc) && (a.sliderWidth = a.origSliderWidth > responsiveWidth || a.sliderWidth100Proc ? responsiveWidth : a.origSliderWidth, a.sliderHeight100Proc || (a.sliderHeight = a.sliderWidth / (a.origSliderWidth / a.origSliderHeight)));
            var f = d("<div></div>").addClass("fullscreen_background").addClass(a.skin),
                e = d('<div class="bannerControls">   <div class="leftNav"></div>   <div class="rightNav"></div>      </div>  <div class="contentHolderVisibleWrapper"><div class="contentHolder"></div></div>   <div class="playOver"></div>  <div class="thumbsHolderWrapper"><div class="thumbsHolderVisibleWrapper"><div class="thumbsHolder"></div></div></div> <div class="lineTimer"></div>');
            b.wrap(f);
            a.texturePath && (b.append('<div class="texture_over_image" />'), d(".texture_over_image", h).css({
                background: "url(" + a.texturePath + ")"
            }));
            b.after(e);
            var h = b.parent(".fullscreen_background");
            a.setAsBg && h.wrap('<div class="setAsBg" />');
            var l = d(".bannerControls", h),
                q = d(".contentHolderVisibleWrapper", h),
                g = d(".contentHolder", h),
                f = d('<div class="bottomNav"></div>');
            b.after(f);
            a.showAllControllers || l.css("display", "none");
            var k = d(".leftNav", h),
                m = d(".rightNav", h);
            k.css("display", "none");
            m.css("display",
                "none");
            a.showNavArrows && a.showOnInitNavArrows && (k.css("display", "block"), m.css("display", "block"));
            var p = d(".bottomNav", h),
                D;
            "bullets" == a.skin && (p.css({
                display: "block",
                top: a.sliderHeight + "px"
            }), a.sliderWidth100Proc && a.sliderHeight100Proc ? p.css("margin-top", a.thumbsWrapperMarginTop + "px") : p.css("margin-top", a.thumbsWrapperMarginTop / (a.origSliderWidth / a.sliderWidth) + "px"));
            a.showBottomNav || p.css("display", "none");
            a.showOnInitBottomNav || p.css("left", "-5000px");
            var w = d(".thumbsHolderWrapper", h),
                J = d(".thumbsHolderVisibleWrapper",
                    h),
                u = d(".thumbsHolder", h),
                t, x;
            t = d('<div class="carouselLeftNav"></div>');
            x = d('<div class="carouselRightNav"></div>');
            w.append(t);
            w.append(x);
            x.css("right", "0");
            u.css("width", t.width() + "px");
            a.showBottomNav && a.showOnInitBottomNav || w.css({
                opacity: 0,
                display: "none"
            });
            "bullets" != a.skin && w.css("margin-top", parseInt(a.thumbsWrapperMarginTop / (a.origSliderWidth / a.sliderWidth), 10) + "px");
            var y = T(); - 1 != y && a.texturePath && d(".texture_over_image", h).click(function() {
                var b = d(B[c.current_img_no]);
                if (void 0 != b.attr("data-link") &&
                    "" != b.attr("data-link")) {
                    var g = a.target;
                    void 0 != b.attr("data-target") && "" != b.attr("data-target") && (g = b.attr("data-target"));
                    "_blank" == g ? window.open(b.attr("data-link")) : window.location = b.attr("data-link")
                } else "true" == b.attr("data-video") && K.click()
            });
            f = navigator.userAgent.toLowerCase();
            if (-1 != f.indexOf("ipad") || -1 != f.indexOf("iphone") || -1 != f.indexOf("ipod") || -1 != f.indexOf("webos")) d("html").css("height", "100%"), d("body").css("height", "100%");
            var K = d(".playOver", h);
            K.css({
                left: parseInt((a.sliderWidth -
                    K.width()) / 2, 10) + "px",
                top: parseInt((a.sliderHeight - K.height()) / 2, 10) + "px"
            });
            f = d(".my_counter");
            e = d("<div></div>").addClass("countdown_with_background").addClass(a.type);
            f.wrap(e);
            var C = f.parent(".countdown_with_background"),
                F = d(".secondsDiv", C),
                G = d(".minutesDiv", C),
                H = d(".hoursDiv", C),
                E = d(".daysDiv", C),
                aa = d(".theCircles", C),
                e = d(".socialIcons", C),
                ca = d(".socialIconsDiv", C),
                da = d(".logoDiv", C),
                ea = d("h2", C),
                fa = d("h3", C),
                ga = d("h4", C),
                ba = d("p", C),
                ha = d("a", ba),
                n = "",
                r = "",
                A = r = "",
                N = "",
                O = "",
                y = T(),
                r = a.beginDate.split(","),
                A = a.launchingDate.split(",");
            a.beginDate = Date.UTC(parseInt(r[0], 10), parseInt(r[1], 10) - 1, parseInt(r[2], 10), parseInt(r[3], 10), parseInt(r[4], 10), parseInt(r[5], 10)) / 1E3;
            a.launchingDate = Date.UTC(parseInt(A[0], 10), parseInt(A[1], 10) - 1, parseInt(A[2], 10), parseInt(A[3], 10), parseInt(A[4], 10), parseInt(A[5], 10)) / 1E3;
            var c = {
                nowD: new Date,
                secondsInADay: 86400,
                secondsInAnHour: 3600,
                secondsInAMinute: 60,
                entireWorkingDaysPeriod: 0,
                totalRemainingSeconds: 0,
                remainingDays: 0,
                remainingHours: 0,
                remainingMinutes: 0,
                remainingSeconds: 0,
                canvasSeconds: "",
                ctxSeconds: "",
                secondsNumberDiv: d(".innerNumber", F),
                canvasMinutes: "",
                ctxMinutes: "",
                minutesNumberDiv: d(".innerNumber", G),
                canvasHours: "",
                ctxHours: "",
                hoursNumberDiv: d(".innerNumber", H),
                canvasDays: "",
                ctxDays: "",
                daysNumberDiv: d(".innerNumber", E),
                canvasWidth: 0,
                canvasOrigWidth: 0,
                canvasHeight: 0,
                canvasOrigHeight: 0,
                unitDivOrigWidth: 0,
                unitDivOrigHeight: 0,
                unitDivOrigWidthDays: 0,
                unitDivOrigHeightDays: 0,
                unitDivOrigWidthHours: 0,
                unitDivOrigHeightHours: 0,
                unitDivOrigWidthMinutes: 0,
                unitDivOrigHeightMinutes: 0,
                unitDivOrigWidthSeconds: 0,
                unitDivOrigHeightSeconds: 0,
                pluginRatio: 1,
                repetitionNo: 0,
                bordersW: 0,
                current_img_no: 0,
                currentImg: 0,
                previous_current_img_no: 0,
                slideIsRunning: !1,
                mouseOverBanner: !1,
                isVideoPlaying: !1,
                bottomNavClicked: !1,
                current_imgInside: "",
                windowWidth: 0,
                windowHeight: 0,
                carouselStep: 0,
                thumbBorderWidth: 0,
                thumbMarginLeft: 0,
                timeoutIDBg: "",
                intervalID: "",
                lineTimerInitialTime: (new Date).getTime(),
                timeElapsed: 0,
                lineTimer: "",
                bannerRatio: a.origSliderWidth / a.origSliderHeight,
                msiInterval: "",
                msiInitialTime: (new Date).getTime(),
                winWidth: 0,
                winHeight: 0
            };
            c.winWidth = d(window).width();
            c.winHeight = d(window).height();
            c.lineTimer = d(".lineTimer", h);
            c.lineTimer.css({
                height: a.lineTimerHeight + "px",
                "background-color": a.lineTimerColor,
                "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=options.lineTimerAlpha)",
                "-moz-opacity": a.lineTimerAlpha / 100,
                "-khtml-opacity": a.lineTimerAlpha / 100,
                opacity: a.lineTimerAlpha / 100
            }); - 1 != y && 9 > y && (a.showLineTimer = !1);
            var P = [],
                ia = 0;
            h.width(a.sliderWidth);
            h.height(a.sliderHeight);
            q.width(a.sliderWidth);
            q.height(a.sliderHeight);
            g.width(a.sliderWidth);
            g.height(a.sliderHeight);
            l.css("margin-top", parseInt((a.sliderHeight - k.height()) / 2, 10) + "px");
            var v = 0,
                B = b.find("ul:first").children(),
                U, ja = 0,
                S, V = 0,
                W = 0,
                X, z, ra = 0;
            B.each(function() {
                c.currentImg = d(this);
                c.currentImg.is("li") || (c.currentImg = c.currentImg.find("li:first"));
                c.currentImg.is("li") && (v++, myzindex = 0, mydisplay = "none", 1 == v && (myzindex = 1, mydisplay = "block"), U = d('<div class="contentHolderUnit" rel="' + (v - 1) + '" id="contentHolderUnit_' + (v - 1) + '">' + c.currentImg.html() +
                    "</div>"), 1 >= B.length && c.currentImg.html(""), a.fadeSlides ? U.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    "z-index": myzindex,
                    display: mydisplay
                }) : U.css({
                    position: "relative",
                    "float": "left"
                }), U.width(a.sliderWidth), U.height(a.sliderHeight), g.append(U), ja += a.sliderWidth, c.current_img_no = v - 1, X = d("#contentHolderUnit_" + c.current_img_no, h).find("img:first"), P[v - 1] = X.width() + ";" + X.height(), Y(v - 1, a, h, P, B, c), "bullets" == a.skin && (S = d('<div class="bottomNavButtonOFF" rel="' + (v - 1) + '"></div>'), p.append(S), V += parseInt(S.css("padding-left").substring(0,
                    S.css("padding-left").length - 2), 10) + S.width(), W = parseInt((p.height() - parseInt(S.css("height").substring(0, S.css("height").length - 2))) / 2, 10), S.css("margin-top", W + "px")), "bullets" != a.skin && (image_name = d(B[v - 1]).attr("data-bottom-thumb"), z = d('<div class="thumbsHolder_ThumbOFF" rel="' + (v - 1) + '"><img src="' + image_name + '"></div>'), u.append(z), 0 == a.origThumbW && (0 == a.numberOfThumbsPerScreen && (a.numberOfThumbsPerScreen = Math.floor((a.origSliderWidth - t.width() - x.width()) / (2 * c.thumbBorderWidth + z.width())) - 1),
                    a.origThumbW = z.width(), a.origThumbH = z.height(), a.origthumbsHolderWrapperH = w.height(), c.thumbBorderWidth = z.css("borderLeftWidth").substr(0, z.css("borderLeftWidth").lastIndexOf("px")), c.thumbMarginLeft = Math.floor((a.origSliderWidth - t.width() - x.width() - (2 * c.thumbBorderWidth + z.width()) * a.numberOfThumbsPerScreen) / (a.numberOfThumbsPerScreen - 1))), u.css("width", u.width() + c.thumbMarginLeft + (2 * c.thumbBorderWidth + z.width()) + "px"), ra = parseInt((w.height() - parseInt(z.css("height").substring(0, z.css("height").length -
                    2))) / 2, 10)))
            });
            1 >= v && (a.autoPlay = 0, a.showNavArrows = !1, a.showOnInitNavArrows = !1, a.showBottomNav = !1, a.showOnInitBottomNav = !1, k.css("display", "none"), m.css("display", "none"), p.css("display", "none"));
            n = a.thumbsWrapperBg;
            L(a.thumbsWrapperBg) && (n = "url(" + a.thumbsWrapperBg + ")");
            w.css({
                background: n
            });
            g.width(ja);
            p.width(V);
            if (a.showOnInitBottomNav) switch (a.bottomNavPos) {
                case "left":
                    p.css("left", a.bottomNavLateralMargin + "px");
                    break;
                case "right":
                    p.css("left", parseInt(h.width() - V, 10) - a.bottomNavLateralMargin +
                        "px");
                    break;
                default:
                    p.css("left", parseInt((h.width() - V) / 2, 10) + "px")
            }
            "bullets" != a.skin && (J.css({
                width: a.origSliderWidth - t.width() - x.width(),
                left: t.width() + "px"
            }), c.carouselStep = (2 * c.thumbBorderWidth + z.width() + c.thumbMarginLeft) * a.numberOfThumbsPerScreen, t.addClass("carouselLeftNavDisabled"), a.numberOfThumbsPerScreen >= v && (x.addClass("carouselRightNavDisabled"), t.css("display", "none"), x.css("display", "none"), J.css("left", parseInt((w.width() - (2 * c.thumbBorderWidth + z.width() + c.thumbMarginLeft) * v) / 2, 10) +
                "px")), w.css("top", a.sliderHeight + "px"), d(".thumbsHolder_ThumbOFF", h).find("img:first"), a.origthumbsHolder_MarginTop = ra);
            var I = d(".thumbsHolder_ThumbOFF", h);
            I.css({
                "border-color": a.thumbsBorderColorOFF
            });
            pa(c, a, v, h, I, u, t, x, z, J, w);
            d("iframe", h).each(function() {
                var a = d(this).attr("src"),
                    b = "?wmode=transparent"; - 1 != a.indexOf("?") && (b = "&wmode=transparent");
                d(this).attr("src", a + b)
            });
            c.current_img_no = 0;
            a.fadeSlides && d("#contentHolderUnit_" + c.current_img_no, h).css({
                "z-index": 1
            });
            c.currentImg = d(B[0]);
            r = h.find("img:first");
            r[0].complete ? d(".myloader", h).css("display", "none") : r.load(function() {
                d(".myloader", h).css("display", "none")
            });
            a.enableTouchScreen && d(".my_counter").swipe({
                allowPageScroll: "auto",
                swipe: function(d, f, e, k, p) {
                    f = "right" == f ? -1 : "left" == f ? 1 : 0;
                    0 != f && Q(f, c, a, v, M, B, b, l, g, h, K, P, I, u, t, x, z)
                }
            });
            h.mouseenter(function() {
                a.pauseOnMouseOver && (c.mouseOverBanner = !0, clearTimeout(c.timeoutIDBg), nowx = (new Date).getTime(), c.timeElapsed += nowx - c.lineTimerInitialTime);
                a.autoHideNavArrows && a.showNavArrows && (k.css("display",
                    "block"), m.css("display", "block"));
                a.autoHideBottomNav && a.showBottomNav && ("bullets" == a.skin ? p.css({
                    display: "block"
                }) : 0 > a.thumbsWrapperMarginTop && c.isVideoPlaying || !a.showBottomNav || (w.css({
                    display: "block"
                }), w.stop().animate({
                    opacity: 1
                }, 500, "swing", function() {})))
            });
            h.mouseleave(function() {
                a.pauseOnMouseOver && (c.mouseOverBanner = !1, nowx = (new Date).getTime());
                a.autoHideNavArrows && a.showNavArrows && !c.isVideoPlaying && (k.css("display", "none"), m.css("display", "none"));
                a.autoHideBottomNav && a.showBottomNav &&
                    ("bullets" == a.skin ? p.css("display", "none") : w.stop().animate({
                        opacity: 0
                    }, 300, "swing", function() {}));
                if (0 < a.autoPlay && 1 < v && !c.isVideoPlaying && a.pauseOnMouseOver) {
                    clearTimeout(c.timeoutIDBg);
                    c.lineTimerInitialTime = (new Date).getTime();
                    var d = parseInt(1E3 * a.autoPlay - (c.timeElapsed + nowx - c.lineTimerInitialTime), 10);
                    c.timeoutIDBg = setTimeout(function() {
                        Q(1, c, a, v, M, B, b, l, g, h, K, P, I, u, t, x, z)
                    }, d)
                }
            });
            r = d(".contentHolderUnit", g); - 1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") &&
                -1 == navigator.userAgent.indexOf("Android") ? r.css("z-index", "1") : -1 != navigator.userAgent.indexOf("Chrome") && -1 == navigator.userAgent.indexOf("Android") && r.css("z-index", "1");
            r.click(function() {
                var b = d(this).attr("rel");
                "true" == d(B[c.current_img_no]).attr("data-video") && (b != c.current_img_no ? c.isVideoPlaying = !1 : K.click());
                var g = d(B[c.current_img_no]);
                void 0 != g.attr("data-link") && b == c.current_img_no && "" != g.attr("data-link") && (b = a.target, void 0 != g.attr("data-target") && "" != g.attr("data-target") && (b = g.attr("data-target")),
                    "_blank" == b ? window.open(g.attr("data-link")) : window.location = g.attr("data-link"))
            });
            K.click(function() {
                K.css("display", "none");
                clearTimeout(c.timeoutIDBg);
                X = d("#contentHolderUnit_" + c.current_img_no, h).find("img:first");
                X.css("display", "none");
                c.isVideoPlaying = !0;
                0 > a.thumbsWrapperMarginTop && (w.css("display", "none"), "bullets" == a.skin && p.css("display", "none"));
                a.showLineTimer && clearInterval(c.intervalID); - 1 != y && a.texturePath && d(".texture_over_image", h).css("display", "none")
            });
            k.click(function() {
                c.slideIsRunning ||
                    (c.isVideoPlaying = !1, a.showBottomNav && (w.css({
                        opacity: 1,
                        display: "block"
                    }), "bullets" == a.skin && p.css("display", "block")), clearTimeout(c.timeoutIDBg), Q(-1, c, a, v, M, B, b, l, g, h, K, P, I, u, t, x, z))
            });
            m.click(function() {
                c.slideIsRunning || (c.isVideoPlaying = !1, a.showBottomNav && (w.css({
                    opacity: 1,
                    display: "block"
                }), "bullets" == a.skin && p.css("display", "block")), clearTimeout(c.timeoutIDBg), Q(1, c, a, v, M, B, b, l, g, h, K, P, I, u, t, x, z))
            });
            var M = d(".bottomNavButtonOFF", h);
            "bullets" == a.skin && (M.click(function() {
                if (!c.slideIsRunning) {
                    c.isVideoPlaying = !1;
                    var f = d(this).attr("rel");
                    c.current_img_no != f && (d(M[c.current_img_no]).removeClass("bottomNavButtonON"), c.previous_current_img_no = c.current_img_no, c.bottomNavClicked = !0, c.current_img_no = f - 1, clearTimeout(c.timeoutIDBg), Q(1, c, a, v, M, B, b, l, g, h, K, P, I, u, t, x, z))
                }
            }), M.mouseenter(function() {
                var b = d(this),
                    c = b.attr("rel");
                if (a.showPreviewThumbs) {
                    D = d('<div class="bottomOverThumb"></div>');
                    b.append(D);
                    var g = d(B[c]).attr("data-bottom-thumb"),
                        f = d(B[ia]).attr("data-bottom-thumb"),
                        h = 80,
                        e = -80;
                    ia > c && (h = -80, e = 80);
                    D.html("");
                    D.html('<div class="innerBottomOverThumb"><img src="' + f + '"style="margin:0px;" id="oldThumb"><img src="' + g + '" style="margin-top:-80px; margin-left:' + h + 'px;" id="newThumb"></div>');
                    d("#newThumb").stop().animate({
                        marginLeft: "0px"
                    }, 150, function() {
                        D.html('<div class="innerBottomOverThumb"><img src="' + g + '"></div>')
                    });
                    d("#oldThumb").stop().animate({
                        marginLeft: e + "px"
                    }, 150, function() {});
                    ia = c
                }
                b.addClass("bottomNavButtonON")
            }), M.mouseleave(function() {
                var b = d(this),
                    g = b.attr("rel");
                a.showPreviewThumbs &&
                    D.remove();
                c.current_img_no != g && b.removeClass("bottomNavButtonON")
            }));
            I.mousedown(function() {
                if (!c.slideIsRunning) {
                    arrowClicked = !0;
                    c.isVideoPlaying = !1;
                    var f = d(this).attr("rel");
                    c.current_img_no != f && (d(I[c.current_img_no]).css({
                        "border-color": a.thumbsBorderColorOFF
                    }), c.previous_current_img_no = c.current_img_no, c.bottomNavClicked = !0, c.current_img_no = f - 1, clearTimeout(c.timeoutIDBg), Q(1, c, a, v, M, B, b, l, g, h, K, P, I, u, t, x, z))
                }
            });
            I.mouseup(function() {
                arrowClicked = !1
            });
            I.mouseenter(function() {
                var b = d(this);
                b.attr("rel");
                b.css({
                    "border-color": a.thumbsBorderColorON
                })
            });
            I.mouseleave(function() {
                var b = d(this),
                    g = b.attr("rel");
                c.current_img_no != g && b.css({
                    "border-color": a.thumbsBorderColorOFF
                })
            });
            t.click(function() {
                c.isCarouselScrolling || (currentCarouselLeft = u.css("left").substr(0, u.css("left").lastIndexOf("px")), 0 > currentCarouselLeft && Z(1, u, t, x, a, v, z, c))
            });
            x.click(function() {
                c.isCarouselScrolling || (currentCarouselLeft = u.css("left").substr(0, u.css("left").lastIndexOf("px")), Math.abs(currentCarouselLeft - c.carouselStep) < (2 *
                    c.thumbBorderWidth + z.width() + c.thumbMarginLeft) * v && Z(-1, u, t, x, a, v, z, c))
            });
            a.sliderWidth100Proc && a.sliderHeight100Proc && a.setAsBg && qa(c, a, B, h);
            "bullets" == a.skin && d(M[c.current_img_no]).addClass("bottomNavButtonON");
            d(I[c.current_img_no]).css({
                "border-color": a.thumbsBorderColorON
            });
            0 < a.autoPlay && 1 < v && (a.showLineTimer && (c.intervalID = setInterval(function() {
                oa(c, a)
            }, 125)), c.timeoutIDBg = setTimeout(function() {
                Q(1, c, a, v, M, B, b, l, g, h, K, P, I, u, t, x, z)
            }, 1E3 * a.autoPlay));
            "true" == d(B[c.current_img_no]).attr("data-video") &&
                K.css("display", "block");
            "" != a.countdownTexturePath && f.css({
                background: "url(" + a.countdownTexturePath + ")",
                "min-height": d(window).height() + "px"
            });
            c.entireWorkingDaysPeriod = Math.floor((a.launchingDate - a.beginDate) / c.secondsInADay);
            nowDate_arr = a.nowDate.split(",");
            c.totalRemainingSeconds = "" == a.nowDate ? a.launchingDate - Date.UTC(c.nowD.getFullYear(), c.nowD.getMonth(), c.nowD.getDate(), c.nowD.getHours(), c.nowD.getMinutes(), c.nowD.getSeconds()) / 1E3 : a.launchingDate - Date.UTC(parseInt(nowDate_arr[0], 10), parseInt(nowDate_arr[1],
                10) - 1, parseInt(nowDate_arr[2], 10), parseInt(nowDate_arr[3], 10), parseInt(nowDate_arr[4], 10), parseInt(nowDate_arr[5], 10)) / 1E3;
            la(c, a);
            c.canvasWidth = 2 * a.circleRadius + a.circleLineWidth + a.behindCircleLineWidthExpand + 2 * a.circleLeftRightPadding;
            c.canvasHeight = 2 * a.circleRadius + a.circleLineWidth + a.behindCircleLineWidthExpand + 2 * a.circleTopBottomPadding;
            c.canvasOrigWidth = c.canvasWidth;
            c.canvasOrigHeight = c.canvasHeight; - 1 != y && 9 > y || (c.canvasDays = d(".canvasDays", C)[0], c.canvasDays.width = c.canvasWidth, c.canvasDays.height =
                c.canvasHeight, c.ctxDays = c.canvasDays.getContext("2d"), R("days", c.ctxDays, c.canvasDays, a.behindCircleAlphaDays, a.behindCircleColorDays, a.circleAlphaDays, a.circleColorDays, c, a, E, H, G, F, y, 0), c.canvasHours = d(".canvasHours", C)[0], c.canvasHours.width = c.canvasWidth, c.canvasHours.height = c.canvasHeight, c.ctxHours = c.canvasHours.getContext("2d"), R("hours", c.ctxHours, c.canvasHours, a.behindCircleAlphaHours, a.behindCircleColorHours, a.circleAlphaHours, a.circleColorHours, c, a, E, H, G, F, y, 0), c.canvasMinutes = d(".canvasMinutes",
                    C)[0], c.canvasMinutes.width = c.canvasWidth, c.canvasMinutes.height = c.canvasHeight, c.ctxMinutes = c.canvasMinutes.getContext("2d"), R("minutes", c.ctxMinutes, c.canvasMinutes, a.behindCircleAlphaMinutes, a.behindCircleColorMinutes, a.circleAlphaMinutes, a.circleColorMinutes, c, a, E, H, G, F, y, 0), c.canvasSeconds = d(".canvasSeconds", C)[0], c.canvasSeconds.width = c.canvasWidth, c.canvasSeconds.height = c.canvasHeight, c.ctxSeconds = c.canvasSeconds.getContext("2d"), R("seconds", c.ctxSeconds, c.canvasSeconds, a.behindCircleAlphaSeconds,
                    a.behindCircleColorSeconds, a.circleAlphaSeconds, a.circleColorSeconds, c, a, E, H, G, F, y, 0));
            c.totalRemainingSeconds--;
            c.intervalIDSeconds = setInterval(function() {
                c.totalRemainingSeconds--;
                R("seconds", c.ctxSeconds, c.canvasSeconds, a.behindCircleAlphaSeconds, a.behindCircleColorSeconds, a.circleAlphaSeconds, a.circleColorSeconds, c, a, E, H, G, F, y, 1);
                R("minutes", c.ctxMinutes, c.canvasMinutes, a.behindCircleAlphaMinutes, a.behindCircleColorMinutes, a.circleAlphaMinutes, a.circleColorMinutes, c, a, E, H, G, F, y, 1);
                R("hours", c.ctxHours,
                    c.canvasHours, a.behindCircleAlphaHours, a.behindCircleColorHours, a.circleAlphaHours, a.circleColorHours, c, a, E, H, G, F, y, 1);
                R("days", c.ctxDays, c.canvasDays, a.behindCircleAlphaDays, a.behindCircleColorDays, a.circleAlphaDays, a.circleColorDays, c, a, E, H, G, F, y, 1)
            }, 1E3);
            n = a.divBackgroundDays;
            L(a.divBackgroundDays) && (n = "url(" + a.divBackgroundDays + ")");
            r = 0;
            "" != a.borderTopColorDays && (r = "1px solid " + a.borderTopColorDays);
            A = 0;
            "" != a.borderRightColorDays && (A = "1px solid " + a.borderRightColorDays);
            N = 0;
            "" != a.borderBottomColorDays &&
                (N = "1px solid " + a.borderBottomColorDays);
            O = 0;
            "" != a.borderLeftColorDays && (O = "1px solid " + a.borderLeftColorDays);
            E.css({
                "border-top": r,
                "border-right": A,
                "border-bottom": N,
                "border-left": O,
                background: n
            });
            n = a.divBackgroundHours;
            L(a.divBackgroundHours) && (n = "url(" + a.divBackgroundHours + ")");
            r = 0;
            "" != a.borderTopColorHours && (r = "1px solid " + a.borderTopColorHours);
            A = 0;
            "" != a.borderRightColorHours && (A = "1px solid " + a.borderRightColorHours);
            N = 0;
            "" != a.borderBottomColorHours && (N = "1px solid " + a.borderBottomColorHours);
            O = 0;
            "" != a.borderLeftColorHours && (O = "1px solid " + a.borderLeftColorHours);
            H.css({
                "border-top": r,
                "border-right": A,
                "border-bottom": N,
                "border-left": O,
                background: n
            });
            n = a.divBackgroundMinutes;
            L(a.divBackgroundMinutes) && (n = "url(" + a.divBackgroundMinutes + ")");
            r = 0;
            "" != a.borderTopColorMinutes && (r = "1px solid " + a.borderTopColorMinutes);
            A = 0;
            "" != a.borderRightColorMinutes && (A = "1px solid " + a.borderRightColorMinutes);
            N = 0;
            "" != a.borderBottomColorMinutes && (N = "1px solid " + a.borderBottomColorMinutes);
            O = 0;
            "" != a.borderLeftColorMinutes &&
                (O = "1px solid " + a.borderLeftColorMinutes);
            G.css({
                "border-top": r,
                "border-right": A,
                "border-bottom": N,
                "border-left": O,
                background: n
            });
            n = a.divBackgroundSeconds;
            L(a.divBackgroundSeconds) && (n = "url(" + a.divBackgroundSeconds + ")");
            r = 0;
            "" != a.borderTopColorSeconds && (r = "1px solid " + a.borderTopColorSeconds);
            A = 0;
            "" != a.borderRightColorSeconds && (A = "1px solid " + a.borderRightColorSeconds);
            N = 0;
            "" != a.borderBottomColorSeconds && (N = "1px solid " + a.borderBottomColorSeconds);
            O = 0;
            "" != a.borderLeftColorSeconds && (O = "1px solid " +
                a.borderLeftColorSeconds);
            F.css({
                "border-top": r,
                "border-right": A,
                "border-bottom": N,
                "border-left": O,
                background: n
            });
            c.unitDivOrigWidthDays = parseInt(2 * a.circleRadius + a.circleLineWidth + a.behindCircleLineWidthExpand + 2 * a.circleLeftRightPadding, 10);
            c.unitDivOrigWidth = c.unitDivOrigWidthDays;
            c.unitDivOrigWidthHours = c.unitDivOrigWidthDays;
            c.unitDivOrigWidthMinutes = c.unitDivOrigWidthDays;
            c.unitDivOrigWidthSeconds = c.unitDivOrigWidthDays;
            r = 0; - 1 != y && 9 > y && (r = c.canvasHeight);
            d(".innerNumber", E).css({
                color: a.numberColorDays,
                "font-size": a.numberSize + "px",
                "line-height": a.numberSize + "px"
            });
            n = a.textColorBackgroundDays;
            L(a.textColorBackgroundDays) && (n = "url(" + a.textColorBackgroundDays + ")");
            d(".innerText", E).css({
                top: r + "px",
                color: a.textColorDays,
                "font-size": a.textSize + "px",
                "line-height": a.textSize + "px",
                "margin-top": a.textMarginTop + "px",
                "padding-top": a.textPadding + "px",
                "padding-bottom": a.textPadding + "px",
                background: n
            });
            d(".innerNumber", H).css({
                color: a.numberColorHours,
                "font-size": a.numberSize + "px",
                "line-height": a.numberSize +
                    "px"
            });
            n = a.textColorBackgroundHours;
            L(a.textColorBackgroundHours) && (n = "url(" + a.textColorBackgroundHours + ")");
            d(".innerText", H).css({
                top: r + "px",
                color: a.textColorHours,
                "font-size": a.textSize + "px",
                "line-height": a.textSize + "px",
                "margin-top": a.textMarginTop + "px",
                "padding-top": a.textPadding + "px",
                "padding-bottom": a.textPadding + "px",
                background: n
            });
            d(".innerNumber", G).css({
                color: a.numberColorMinutes,
                "font-size": a.numberSize + "px",
                "line-height": a.numberSize + "px"
            });
            n = a.textColorBackgroundMinutes;
            L(a.textColorBackgroundMinutes) &&
                (n = "url(" + a.textColorBackgroundMinutes + ")");
            d(".innerText", G).css({
                top: r + "px",
                color: a.textColorMinutes,
                "font-size": a.textSize + "px",
                "line-height": a.textSize + "px",
                "margin-top": a.textMarginTop + "px",
                "padding-top": a.textPadding + "px",
                "padding-bottom": a.textPadding + "px",
                background: n
            });
            d(".innerNumber", F).css({
                color: a.numberColorSeconds,
                "font-size": a.numberSize + "px",
                "line-height": a.numberSize + "px"
            });
            n = a.textColorBackgroundSeconds;
            L(a.textColorBackgroundSeconds) && (n = "url(" + a.textColorBackgroundSeconds + ")");
            d(".innerText", F).css({
                top: r + "px",
                color: a.textColorSeconds,
                "font-size": a.textSize + "px",
                "line-height": a.textSize + "px",
                "margin-top": a.textMarginTop + "px",
                "padding-top": a.textPadding + "px",
                "padding-bottom": a.textPadding + "px",
                background: n
            });
            f = parseInt(F.width() + G.width() + H.width() + E.width(), 10);
            "" != a.borderLeftColorDays && c.bordersW++;
            "" != a.borderRightColorDays && c.bordersW++;
            "" != a.borderLeftColorHours && c.bordersW++;
            "" != a.borderRightColorHours && c.bordersW++;
            "" != a.borderLeftColorMinutes && c.bordersW++;
            "" !=
            a.borderRightColorMinutes && c.bordersW++;
            "" != a.borderLeftColorSeconds && c.bordersW++;
            "" != a.borderRightColorSeconds && c.bordersW++;
            a.origWidth = f;
            a.prevOrigWidth = f;
            aa.css({
                width: f + c.bordersW + 1 + "px",
                "margin-top": a.allCirclesTopMargin + "px",
                "margin-bottom": a.allCirclesBottomMargin + "px"
            });
            C.css({
                "font-family": a.pluginFontFamily,
                width: aa.width()
            });
            ea.css({
                "font-family": a.pluginFontFamily,
                "font-size": a.h2Size + "px",
                "line-height": a.h2Size + "px",
                color: a.h2Color,
                "font-weight": a.h2Weight,
                "margin-top": a.h2TopMargin +
                    "px"
            });
            fa.css({
                "font-family": a.pluginFontFamily,
                "font-size": a.h3Size + "px",
                "line-height": a.h3Size + "px",
                color: a.h3Color,
                "font-weight": a.h3Weight,
                "margin-top": a.h3TopMargin + "px"
            });
            ga.css({
                "font-family": a.pluginFontFamily,
                "font-size": a.h4Size + "px",
                "line-height": a.h4Size + "px",
                color: a.h4Color,
                "font-weight": a.h4Weight,
                "margin-top": a.h4TopMargin + "px"
            });
            ba.css({
                "font-family": a.pluginFontFamily,
                "font-size": a.defaultTextSize + "px",
                "line-height": a.defaultTextSize + "px",
                color: a.defaultTextColor,
                "font-weight": a.defaultTextWeight,
                "margin-top": a.defaultTextTopMargin + "px"
            });
            ha.css({
                "font-family": a.pluginFontFamily,
                "font-size": a.defaultTextLinkSize + "px",
                "line-height": a.defaultTextLinkSize + "px",
                color: a.defaultTextLinkColor,
                "font-weight": a.defaultTextLinkWeight
            });
            da.css({
                width: f + "px",
                background: "url(" + a.lineSeparatorImg + ") bottom left repeat-x"
            });
            ca.css({
                width: f + "px",
                background: "url(" + a.lineSeparatorImg + ") top left repeat-x"
            });
            n = a.socialBgOFF;
            L(a.socialBgOFF) && (n = "url(" + a.socialBgOFF + ") no-repeat");
            d("li", e).css({
                background: n
            });
            d("li", e).mouseover(function() {
                n = a.socialBgON;
                L(a.socialBgON) && (n = "url(" + a.socialBgON + ") no-repeat");
                d(this).css({
                    background: n
                })
            });
            d("li", e).mouseout(function() {
                n = a.socialBgOFF;
                L(a.socialBgOFF) && (n = "url(" + a.socialBgOFF + ") no-repeat");
                d(this).css({
                    background: n
                })
            });
            c.unitDivOrigHeightDays = parseInt(2 * a.circleRadius + a.circleLineWidth + a.behindCircleLineWidthExpand + 2 * a.circleTopBottomPadding + d(".innerText", E).height() + 2 * a.textPadding + a.textMarginTop, 10);
            c.unitDivOrigHeight = c.unitDivOrigHeightDays;
            c.unitDivOrigHeightHours =
                c.unitDivOrigHeightDays;
            c.unitDivOrigHeightMinutes = c.unitDivOrigHeightDays;
            c.unitDivOrigHeightSeconds = c.unitDivOrigHeightDays;
            "" != a.borderTopColorDays && c.unitDivOrigHeightDays--;
            "" != a.borderBottomColorDays && c.unitDivOrigHeightDays--;
            E.css({
                height: c.unitDivOrigHeight + "px"
            });
            "" != a.borderTopColorHours && c.unitDivOrigHeightHours--;
            "" != a.borderBottomColorHours && c.unitDivOrigHeightHours--;
            H.css({
                height: c.unitDivOrigHeight + "px"
            });
            "" != a.borderTopColorMinutes && c.unitDivOrigHeightMinutes--;
            "" != a.borderBottomColorMinutes &&
                c.unitDivOrigHeightMinutes--;
            G.css({
                height: c.unitDivOrigHeight + "px"
            });
            "" != a.borderTopColorSeconds && c.unitDivOrigHeightSeconds--;
            "" != a.borderBottomColorSeconds && c.unitDivOrigHeightSeconds--;
            F.css({
                height: c.unitDivOrigHeight + "px"
            });
            setTimeout(function() {
                ma(a, c, E, H, G, F)
            }, 200);
            a.responsive && na(c, a, C, da, E, H, G, F, aa, ca, ea, fa, ga, ba, ha);
            var ka = !1;
            d(window).resize(function() {
                var f = T();
                doResizeNow = !0; - 1 != f && 9 == f && 0 == c.windowWidth && (doResizeNow = !1);
                c.windowWidth == d(window).width() && c.windowHeight == d(window).height() ?
                    doResizeNow = !1 : (c.windowWidth = d(window).width(), c.windowHeight = d(window).height());
                a.responsive && doResizeNow && (!1 !== ka && clearTimeout(ka), ka = setTimeout(function() {
                    na(c, a, C, da, E, H, G, F, aa, ca, ea, fa, ga, ba, ha);
                    var f = c,
                        e = a,
                        n = v,
                        r = B,
                        m = h,
                        y = K,
                        A = M,
                        D = z,
                        L = V;
                    f.winWidth = d(window).width();
                    f.winHeight = d(window).height();
                    responsiveWidth = b.parent().parent().width();
                    responsiveHeight = b.parent().parent().height();
                    e.responsiveRelativeToBrowser && (responsiveWidth = d(window).width(), responsiveHeight = d(window).height());
                    e.sliderWidth100Proc &&
                        (e.sliderWidth = responsiveWidth);
                    e.sliderHeight100Proc && (e.sliderHeight = responsiveHeight);
                    if (e.origSliderWidth != responsiveWidth || e.sliderWidth100Proc) {
                        e.origSliderWidth > responsiveWidth || e.sliderWidth100Proc ? e.sliderWidth = responsiveWidth : e.sliderWidth100Proc || (e.sliderWidth = e.origSliderWidth);
                        e.sliderHeight100Proc || (e.sliderHeight = e.sliderWidth / f.bannerRatio);
                        "" != e.countdownTexturePath && d(".my_counter").css({
                            "min-height": d(window).height() + "px"
                        });
                        m.width(e.sliderWidth);
                        m.height(e.sliderHeight);
                        q.width(e.sliderWidth);
                        q.height(e.sliderHeight);
                        g.width(e.sliderWidth);
                        g.height(e.sliderHeight);
                        l.css("margin-top", parseInt((e.sliderHeight - k.height()) / 2, 10) + "px");
                        contentHolderUnit = d(".contentHolderUnit", m);
                        contentHolderUnit.width(e.sliderWidth);
                        contentHolderUnit.height(e.sliderHeight);
                        holderWidth = e.sliderWidth * n;
                        for (i = 0; i < n; i++) Y(i, e, m, P, r, f);
                        g.width(holderWidth);
                        if ("bullets" == e.skin) {
                            switch (e.bottomNavPos) {
                                case "left":
                                    p.css({
                                        left: e.bottomNavLateralMargin + "px",
                                        top: e.sliderHeight + "px"
                                    });
                                    break;
                                case "right":
                                    p.css({
                                        left: parseInt(m.width() -
                                            L, 10) - e.bottomNavLateralMargin + "px",
                                        top: e.sliderHeight + "px"
                                    });
                                    break;
                                default:
                                    p.css({
                                        left: parseInt((m.width() - L) / 2, 10) + "px",
                                        top: e.sliderHeight + "px"
                                    })
                            }
                            e.sliderWidth100Proc && e.sliderHeight100Proc || p.css("margin-top", parseInt(e.thumbsWrapperMarginTop / (e.origSliderWidth / e.sliderWidth), 10) + "px")
                        } else pa(f, e, n, m, I, u, t, x, D, J, w);
                        y.css({
                            left: parseInt((e.sliderWidth - y.width()) / 2, 10) + "px",
                            top: parseInt((e.sliderHeight - y.height()) / 2, 10) + "px"
                        });
                        2 <= n ? (clearTimeout(f.timeoutID), Q(1, f, e, n, A, r, b, l, g, m, y, P, I, u, t, x, D)) :
                            d(".newFS", m).contents().unwrap();
                        e.sliderWidth100Proc && e.sliderHeight100Proc && e.setAsBg && qa(f, e, r, m)
                    }
                }, 300))
            })
        })
    };
    d.fn.countdown_with_background.defaults = {
        type: "version1",
        beginDate: "2012,2,30,22,30,10",
        launchingDate: "2014,8,30,14,12,10",
        nowDate: "",
        pluginFontFamily: "'PT Serif', serif",
        circleRadius: 85,
        circleLineWidth: 20,
        behindCircleLineWidthExpand: 6,
        circleTopBottomPadding: 5,
        circleLeftRightPadding: 15,
        numberSize: 35,
        numberAdditionalTopPadding: 2,
        textSize: 15,
        textMarginTop: 0,
        textPadding: 15,
        lineSeparatorImg: "countdown_images/line.png",
        allCirclesTopMargin: 0,
        allCirclesBottomMargin: 80,
        divBackgroundDays: "",
        borderTopColorDays: "",
        borderRightColorDays: "",
        borderBottomColorDays: "",
        borderLeftColorDays: "",
        circleColorDays: "#dd1e2f",
        circleAlphaDays: 100,
        behindCircleColorDays: "#000000",
        behindCircleAlphaDays: 30,
        numberColorDays: "#FFFFFF",
        textColorDays: "#6f6f6f",
        textColorBackgroundDays: "",
        divBackgroundHours: "",
        borderTopColorHours: "",
        borderRightColorHours: "",
        borderBottomColorHours: "",
        borderLeftColorHours: "",
        circleColorHours: "#ebb035",
        circleAlphaHours: 100,
        behindCircleColorHours: "#000000",
        behindCircleAlphaHours: 30,
        numberColorHours: "#FFFFFF",
        textColorHours: "#6f6f6f",
        textColorBackgroundHours: "",
        divBackgroundMinutes: "",
        borderTopColorMinutes: "",
        borderRightColorMinutes: "",
        borderBottomColorMinutes: "",
        borderLeftColorMinutes: "",
        circleColorMinutes: "#06a2cb",
        circleAlphaMinutes: 100,
        behindCircleColorMinutes: "#000000",
        behindCircleAlphaMinutes: 30,
        numberColorMinutes: "#FFFFFF",
        textColorMinutes: "#6f6f6f",
        textColorBackgroundMinutes: "",
        divBackgroundSeconds: "",
        borderTopColorSeconds: "",
        borderRightColorSeconds: "",
        borderBottomColorSeconds: "",
        borderLeftColorSeconds: "",
        circleColorSeconds: "#218559",
        circleAlphaSeconds: 100,
        behindCircleColorSeconds: "#000000",
        behindCircleAlphaSeconds: 30,
        numberColorSeconds: "#FFFFFF",
        textColorSeconds: "#6f6f6f",
        textColorBackgroundSeconds: "",
        socialBgOFF: "countdown_images/social_icons/socialCircleOFF.png",
        socialBgON: "countdown_images/social_icons/socialCircleON.png",
        h2Size: 36,
        h2Color: "#FFFFFF",
        h2Weight: "bold",
        h2TopMargin: 60,
        h3Size: 24,
        h3Color: "#6f6f6f",
        h3Weight: "normal",
        h3TopMargin: 0,
        h4Size: 14,
        h4Color: "#6f6f6f",
        h4Weight: "normal",
        h4TopMargin: 15,
        defaultTextSize: 20,
        defaultTextColor: "#FFFFFF",
        defaultTextWeight: "normal",
        defaultTextTopMargin: 0,
        defaultTextLinkSize: 20,
        defaultTextLinkColor: "#FFFFFF",
        defaultTextLinkWeight: "normal",
        complete: null,
        responsive: !0,
        responsiveRelativeToBrowser: !0,
        origWidth: 0,
        prevOrigWidth: 0,
        thumbsWrapperMarginBottom: 0,
        countdownTexturePath: "",
        skin: "bullets",
        sliderWidth: 1920,
        sliderHeight: 600,
        sliderWidth100Proc: !0,
        sliderHeight100Proc: !0,
        autoPlay: 6,
        fadeSlides: !0,
        loop: !0,
        setAsBg: !0,
        texturePath: "",
        horizontalPosition: "center",
        verticalPosition: "center",
        initialOpacity: 1,
        target: "_blank",
        pauseOnMouseOver: !1,
        showLineTimer: !0,
        lineTimerHeight: 4,
        lineTimerColor: "#ffffff",
        lineTimerAlpha: 40,
        numberOfThumbsPerScreen: 0,
        bottomNavPos: "right",
        bottomNavLateralMargin: 0,
        thumbsWrapperMarginTop: -110,
        thumbsWrapperBg: "",
        thumbsBorderColorON: "#000000",
        thumbsBorderColorOFF: "#7a7a7a",
        showAllControllers: !0,
        showNavArrows: !0,
        showOnInitNavArrows: !0,
        autoHideNavArrows: !0,
        showBottomNav: !0,
        showOnInitBottomNav: !0,
        autoHideBottomNav: !1,
        showPreviewThumbs: !0,
        enableTouchScreen: !0,
        absUrl: "",
        videoProportionWidth: 16,
        videoProportionHeight: 9,
        origSliderWidth: 0,
        origSliderHeight: 0,
        origThumbW: 0,
        origThumbH: 0,
        origthumbsHolderWrapperH: 0,
        origthumbsHolder_MarginTop: 0,
        windowOrientationScreenSize0: 0,
        windowOrientationScreenSize90: 0,
        windowOrientationScreenSize_90: 0,
        windowCurOrientation: 0
    }
})(jQuery);