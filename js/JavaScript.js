
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "rgba(0,0,0,0)";
ctx.miterLimit = 4;
ctx.scale(0.42,0.42);

ctx.beginPath();

ctx.moveTo(144, 22);
ctx.lineTo(104, 117);
ctx.lineTo(93, 93);
ctx.lineTo(113, 37);
ctx.bezierCurveTo(113, 37, 120, 31, 129, 31);
ctx.lineTo(132, 22);
ctx.lineTo(85, 22);
ctx.lineTo(82, 31);
ctx.bezierCurveTo(82, 31, 91, 33, 90, 37);
ctx.lineTo(80, 66);
ctx.lineTo(60, 22);
ctx.bezierCurveTo(60, 22, 58, 16, 65, 16);
ctx.lineTo(65, 6);
ctx.lineTo(19, 6);
ctx.lineTo(19, 16);
ctx.bezierCurveTo(19, 16, 33, 18, 35, 22);
ctx.lineTo(69, 94);
ctx.lineTo(53, 137);
ctx.bezierCurveTo(53, 137, 44, 145, 27, 145);
ctx.lineTo(24, 154);
ctx.lineTo(155, 154);
ctx.lineTo(174, 115);
ctx.lineTo(164, 115);
ctx.bezierCurveTo(164, 115, 145, 145, 133, 145);
ctx.lineTo(73, 145);
ctx.lineTo(82, 121);
ctx.lineTo(90, 137);
ctx.lineTo(107, 137);
ctx.lineTo(155, 22);
ctx.bezierCurveTo(155, 22, 164, 12, 173, 12);
ctx.lineTo(173, 3);
ctx.lineTo(133, 3);
ctx.lineTo(133, 12);
ctx.bezierCurveTo(133, 12, 149, 16, 144, 22);


ctx.closePath();
ctx.fill("evenodd");

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

function initCanvasAndDraw() {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  SVGIcons["asd"].draw(ctx);
}
window.addEventListener('load', initCanvasAndDraw);


  const credits = document.getElementById("credits-overlay");
  const menuIcon = document.getElementById("menuTrigger");
  const menuText = document.getElementById("menuTriggerText");

  function toggleCredits(e) {
    e.preventDefault();
    credits.classList.toggle("active");
  }

  menuIcon.addEventListener("click", toggleCredits);
  menuText.addEventListener("click", toggleCredits);

  // Close when clicking outside the box
  credits.addEventListener("click", (e) => {
    if (!e.target.closest(".credits-box")) {
      credits.classList.remove("active");
    }
  });



