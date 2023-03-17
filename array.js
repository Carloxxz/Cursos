let gueslist = [`Angela`, `Jack`, `Pam`, `James`, `Lara`, `Jason`];
let guestName = prompt(`¿Cuál es tu nombre?`);

if (gueslist.includes(guestName)) {
    alert(`Welcome!`);
}else {
    alert(`Lo siento, quizá en otra ocasión`);
}