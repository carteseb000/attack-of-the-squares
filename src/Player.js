export class Player {
    constructor() {
        
    }
    input(score) {
        window.addEventListener("keydown", (e) => {
            var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
            if (e.key == "ArrowLeft" && left > 0) {
                jet.style.left = left - 10 + "px";
            } else if (e.key == "ArrowRight" && left <= 460) {
                jet.style.left = left + 10 + "px";
            } else if (e.keyCode == 13) {
                alert("Paused");
            }

            if (e.key == "ArrowUp" || e.keyCode == 32) {
                var bullet = document.createElement("div");
                bullet.classList.add("bullets");
                board.appendChild(bullet);

                var movebullet = setInterval(() => {

                    var rocks = document.getElementsByClassName("rocks");
                    for (var i = 0; i < rocks.length; i++) {
                        var rock = rocks[i];

                        var rockbound = rock.getBoundingClientRect();
                        var bulletbound = bullet.getBoundingClientRect();

                        if (bulletbound.left >= rockbound.left &&
                            bulletbound.right <= rockbound.right &&
                            bulletbound.top <= rockbound.top &&
                            bulletbound.bottom <= rockbound.bottom
                        ) {
                            rock.parentElement.removeChild(rock);
                            //score
                            this.Score(score, 10)
                            bullet.parentElement.removeChild(bullet);
                        }
                    }

                    var bulletbottom = parseInt(window.getComputedStyle(bullet).getPropertyValue("bottom"));
                    // 
                    if (bulletbottom >= 500) {
                        bullet.parentElement.removeChild(bullet);
                        clearInterval(movebullet);
                    }

                    bullet.style.left = left + "px";
                    bullet.style.bottom = bulletbottom + 3 + "px";
                });
            }

        });
    }
    Score(score, amount) {
        score.innerHTML = parseInt(score.innerHTML) + amount;

        // if (score.innerHTML == 1000 ||
        //     score.innerHTML == 1500 ||
        //     score.innerHTML == 2000 ||
        //     score.innerHTML == 2500 ||
        //     score.innerHTML == 3000 ||
        //     score.innerHTML == 3500 ||
        //     score.innerHTML == 4000 ||
        //     score.innerHTML == 4500 ||
        //     score.innerHTML == 5000 ||
        //     score.innerHTML == 5500 ||
        //     score.innerHTML == 6000 ||
        //     score.innerHTML == 6500 ||
        //     score.innerHTML == 7000 ||
        //     score.innerHTML == 7500 ||
        //     score.innerHTML == 8000 ||
        //     score.innerHTML == 8500 ||
        //     score.innerHTML == 9000 ||
        //     score.innerHTML == 9500 ||
        //     score.innerHTML == 10000
        // ) {
        //     speedAmount = speedAmount + ;
        // }

        // if (score.innerHTML == 15000) {
            // score.innerHTML = parseInt(score.innerHTML) - 50;
        //     generateSpeed = generateSpeed - Math.floor(Math.random() * 10);
        // }
    }
}
