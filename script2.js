let query = window.location.search
let searchParams = new URLSearchParams(query)
let name = searchParams.get("name")
let title = searchParams.get("title")

let text = "Congratulations " + name + ", you just commited to " + title
document.querySelector('#myname').textContent = text

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();