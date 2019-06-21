var area = $('.arrow');
var arrow = $('#arrowObj');
var bow = $('#bow');
var bubble_0 = $('.bubble');
var bubble_1 = $('.bubble1');
var bubble_2 = $('.bubble2');
var currentBubbleX = 0;
var currentBubble1X = 0;
var currentBubble2X = 0;
var currentArrowX = 0;
var xAxis = 0;
var yAxis = 0;
var tries = 0;
var hit = 0;
var selector;
var cls=""

$(document).ready(function() {
    setInterval(createBrid, 2000);
    area.bind('mousemove',bowArrowMove);

    area.click(function(event) {
        area.unbind("mousemove");
        checkHit();

        arrow.animate({ "left": "1050px" }, 2000, function(){
            arrow.css({ "left": xAxis, "top": yAxis });
            area.bind('mousemove',bowArrowMove(event));
        });
    });    
});

function checkHit(){
    // Your Code goes here
    // Both Bird and Arrow are moving objects.
    var atext = ""
    var max = 9
    var func  = setInterval(function(){        

        if (parseInt(parseInt(bow.offset().top) - parseInt(bubble_0.offset().top)) >= -max && parseInt(parseInt(bow.offset().top) - parseInt(bubble_0.offset().top)) <=max){

            atext = "bubble_2"
            console.log(atext)
            change(bubble_2)
            clearInterval(func)
    }

        else if (parseInt(parseInt(bow.offset().top) - parseInt(bubble_1.offset().top)) >= -max && parseInt(parseInt(bow.offset().top) - parseInt(bubble_1.offset().top)) <=max){

            atext = "bubble_0"
            console.log(atext)
            change(bubble_0)
            clearInterval(func)
        }

            else if (parseInt(parseInt(bow.offset().top) - parseInt(bubble_2.offset().top)) >= -max && parseInt(parseInt(bow.offset().top) - parseInt(bubble_2.offset().top)) <=max){

            atext = "bubble_1"
            change(bubble_1)
            console.log(atext)
            clearInterval(func)
}
    } , 100);

    function change(item){
        item.css('background-image' , "url('../img/hit.png')")
        item.css('background-color' , "red")

    }
    
}

function bowArrowMove(event){
    xAxis = event.pageX - 40;
    yAxis = event.pageY;
    bow.css({ "left": xAxis, "top": yAxis });
    arrow.css({ "left": xAxis, "top": yAxis });
}

function createBrid() {
    selector = [bubble_0, bubble_1, bubble_2];
    for (var i = 0; i < 3; i++) {
        var p = [400, 600, 800];
        selector[i].css({
            "left": p[i] + "px",
            "top": parseInt(p[i] - 200) + "px"
        });

        selector[i].animate({
            "top": "50px"
        }, p[i] * parseInt(5));

        selector[i].animate({ "top": parseInt(p[i] - 200 )+ "px" }, p[i] * parseInt(10));
    }
}

