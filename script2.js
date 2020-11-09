let query = window.location.search
let searchParams = new URLSearchParams(query)
let name = searchParams.get("name")

let text = "Congratulations " + name + ", you just commited to a new habit!"
document.querySelector('#myname').textContent = text

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();