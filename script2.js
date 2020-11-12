let query = window.location.search
let searchParams = new URLSearchParams(query)
let name = searchParams.get("name")
let title = searchParams.get("title")

let text = "Well done " + name + ", \n You have committed to " + title + " and you should be proud of yourself. \nBy inviting a new habit into your life, no matter how big or small, you have taken the first step towards a healthier life. \nAccording to science, you need about two months of daily practise until " + title + " becomes a natural part of your everyday routine."


document.querySelector('#myname').textContent = text


  


name.classlist.add('user-new-habit')
title.classlist.add('user-new.habit')

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();