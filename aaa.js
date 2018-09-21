var rock_item = $('#rock>.rock-item');

var autoAnimate = setInterval(newFunction, 5000);

function newFunction() {
    rock_item.stop(true,true);
    rock_item.animate(2000, function () {
        
        if (parseInt(rock_item.css('right')) >= 3320) {
            rock_item.animate({
                right: '0px'
            }, 2000);
        }
        else {
            rock_item.animate({
                right: '+=830px'
            }, 2000);
        }
        console.log(parseInt(rock_item.css('right')));
    });
}
var rock_thumbnail_item =$('#rock-thumbnail>.rock-thumbnail-item');
rock_thumbnail_item.mouseover(function () { 
    rock_thumbnail_item.removeClass('active');
    
    $(this).addClass('active');
    rock_item.stop(true,false);
    moveLoc(rock_thumbnail_item.index(this));
}).mouseleave(function () { 
    $(this).removeClass('active');
});
$('#rock-thumbnail').mouseover(
    function(){
        clearInterval(autoAnimate);
    }
).mouseleave(
    function(){
        autoAnimate = setInterval(newFunction, 5000);
    }
);

function moveLoc(num) {
    var loc = num*830+'px';
    rock_item.animate({
        right: loc
    }, 700);
}