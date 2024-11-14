/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let excuse = document.getElementById("excuse");
  let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
  let randomWho = Math.floor(Math.random() * who.length);
  console.log(randomWho);

  let action = ["ate ", "peed ", "crushed ", "broke "];
  let randomAction = Math.floor(Math.random() * action.length);

  let what = ["my homework ", "my phone ", "the car "];
  let randomWhat = Math.floor(Math.random() * what.length);

  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  let randomWhen = Math.floor(Math.random() * when.length);

  excuse.innerHTML =
    who[randomWho] + action[randomAction] + what[randomWhat] + when[randomWhen];
};
