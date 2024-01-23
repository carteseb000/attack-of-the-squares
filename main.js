import { Enemy } from "./src/Enemy.js";
import { Player } from "./src/Player.js";

var rocks = document.getElementsByClassName("rocks");
var jet = document.getElementById("jet");

var board = document.getElementById("board");
var score = document.getElementById("points");

var speed = 300;
// var generateSpeed = 1500;

var red_enemy = new Enemy();
var player = new Player();

player.input(score);

red_enemy.generateEnemies();
// pink_enemy.generateEnemies();

red_enemy.moveEnemies(speed, 25, rocks, score, 10);
// pink_enemy.moveEnemies(speed, 25, rocks, score, 15);