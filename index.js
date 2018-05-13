var vaisseau2 = document.getElementById('vaisseau2');
var alien2 = document.getElementById('alien2');
var pos = {x: 0, y: 0};

//deplacement vaisseau OU alien ok, ms SORT DU CADRE

// setInterval( () =>
// {
// 	pos.x -= 20;
//     pos.y -= 5;
    
// 	alien1.style.left = pos.x + 'px';
//     alien1.style.top = pos.y + 'px';
// }, 100);

// setInterval( () =>
// {
// 	pos.x += 10;
//     pos.y += 5;
// 	vaisseau1.style.left = pos.x + 'px';
//     vaisseau1.style.top = pos.y + 'px';
// }, 200);

var move = vaisseau2;

    var body_width = document.body.clientWidth;
    var body_height = document.body.clientHeight;
    function doMove() {

        var rect = move.getBoundingClientRect();
        
        if(rect.right > body_width) {
          return;
        }
    
        move.style.left = parseInt(move.style.left) + 2 + 'px';
        setTimeout(doMove);
    }
        
    
    function init() {
        move = document.getElementById("vaisseau2");
        move.style.left = "0px";
        doMove();
    }
    
init();

