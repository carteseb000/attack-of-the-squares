export class Enemy {
    constructor(color, speed, speedAmount) {
        speed = this.speed;
        speedAmount = this.speedAmount;
        color = this.color;
    }
    generateEnemies() {
        setInterval(() => {
            var rock = document.createElement("div");
            rock.style.backgroundColor = this.color
            rock.classList.add("rocks");
            var rockleft = parseInt(window.getComputedStyle(rock).getPropertyValue("left"));
            
            rock.style.left = Math.floor(Math.random()*450) + "px";
        
            board.appendChild(rock);
        }, 1500);
    }
    moveEnemies(speed, speedAmount, rocks, score, scoreAmount) {
        setInterval(() => {
            if (rocks != undefined) {
                for(var i = 0; i < rocks.length; i++) {
                    var rock = rocks[i];
                    var rocktop = parseInt(
                        window.getComputedStyle(rock).getPropertyValue("top")
                    );
        
                    if (rocktop >= 475) {
                        // lives.innerHTML = parseInt(lives.innerHTML) - 1;
                        score.innerHTML = parseInt(score.innerHTML) - scoreAmount;
                        rock.parentElement.removeChild(rock);
                    }
                        // 475 => board - rockheight + 25
                    if (score.innerHTML == -10) {
                        // alert("Game Over");
                        clearInterval(this);
                        window.location.reload();
                    }
        
                    rock.style.top = rocktop + speedAmount + "px";
                }
            }
        }, 300);
    }
}
export class Red_Enemy extends Enemy {
    constructor() {

    }

}