

// Enemies our player must avoid
var Enemy = function() {

    //x position
    //y position


      this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    //if enemy is not passed boundary
        //move forward
        //increment x by speed * dt
    //else
      //reset position to start
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//new hero object

//init allEnemies Array
//for each enemy create and push new enemy object into above array


//Hero class
  //Constructor
      //properties
          //x position
          //y position
          //sprite image
      //methods
          //update position
            //checkCollisions
              //did play x and y collide with Enemy
            //check
              // did player x and y reach final tile?

          //render
            //draw sprite on current x and y position

          //handle keyboard input
           //update plyers x and y according to input

          //reset hero
            //set x and y to starting x and y

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
