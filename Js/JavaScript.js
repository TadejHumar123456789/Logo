/*
const canvas = document.getElementById("logoCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "rgba(0,0,0,0)";
ctx.miterLimit = 4;
ctx.scale(0.3,0.3);

ctx.beginPath();

ctx.moveTo(143.9,22.4);
ctx.lineTo(103.7,117.2);
ctx.lineTo(92.6,92.9);
ctx.lineTo(113.1,37.2);
ctx.bezierCurveTo(114.6,32.8,120.0,30.8,129.1,30.8);
ctx.lineTo(132.3,22.4);
ctx.lineTo(84.6,22.4);
ctx.lineTo(81.5,30.8);
ctx.bezierCurveTo(88.3,30.8,91.1,32.8,90.0,37.2);
ctx.lineTo(79.8,65.5);
ctx.lineTo(59.8,22.4);
ctx.bezierCurveTo(56.1,17.8,58.0,15.5,65.2,15.5);
ctx.lineTo(65.2,5.5);
ctx.lineTo(19.1,5.5);
ctx.lineTo(19.1,15.5);
ctx.bezierCurveTo(27.7,15.5,33.1,17.8,35.4,22.4);
ctx.lineTo(69.2,94.4);
ctx.lineTo(53.4,136.7);
ctx.bezierCurveTo(53.1,142.4,44.1,145.2,26.9,145.2);
ctx.lineTo(23.7,153.6);
ctx.lineTo(155.4,153.6);
ctx.lineTo(173.7,114.7);
ctx.lineTo(164.2,114.7);
ctx.bezierCurveTo(155.2,134.9,144.9,145.2,133.4,145.2);
ctx.lineTo(72.9,145.2);
ctx.lineTo(81.8,121.3);
ctx.lineTo(89.5,136.7);
ctx.lineTo(106.8,136.7);
ctx.lineTo(155.4,22.4);
ctx.bezierCurveTo(157.7,15.5,163.7,11.8,173.1,11.8);
ctx.lineTo(173.1,2.8);
ctx.lineTo(133.4,2.8);
ctx.lineTo(133.4,11.8);
ctx.bezierCurveTo(145.4,11.8,148.8,15.5,143.9,22.4);

ctx.closePath();
ctx.fill("evenodd");*/

   var lastScrollTop = 0;
        navbar = document.getElementById("navbar");
        window.addEventListener("scroll", function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            navbar.style.top = "-100px";
        } else {
            navbar.style.top = "0";
            if (scrollTop === 0) {
                navbar.classList.remove("scrolled"); 
            } else {
                navbar.classList.add("scrolled"); 
                }
            }
        lastScrollTop = scrollTop;
        }
        );



//Accordian

        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                var panel = this.nextElementSibling;
                var isActive = this.classList.contains("active");

                // Close all accordion panels

                for (var j = 0; j < acc.length; j++) {
                    var otherPanel = acc[j].nextElementSibling;
                    if (otherPanel !== panel) {
                        otherPanel.style.maxHeight = null;
                        acc[j].classList.remove("active");
                    }
                }

                if (isActive) {
                    this.classList.remove("active");
                    panel.style.maxHeight = null;
                } else {
                    this.classList.add("active");
                    panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                }
            );
        }

