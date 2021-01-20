let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
];
let whoIndex = Math.floor(Math.random() * who.length);
let actionIndex = Math.floor(Math.random() * action.length);
let whatIndex = Math.floor(Math.random() * what.length);
let whenIndex = Math.floor(Math.random() * when.length);

function randomExcuse() {
    for (let i = 0; i <= 4; i++) {
        let randomNumber = Math.floor(Math.random(i) * 4) + 1;
        console.log(randomNumber);
    }
    return (
        who[whoIndex] +
        " " +
        action[actionIndex] +
        " " +
        what[whatIndex] +
        " " +
        when[whenIndex]
    );
}
document.getElementById("excuse").innerHTML = randomExcuse();