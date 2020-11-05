function renderElement () {
  let pCheck = document.querySelector ('#titlebox p') 
  let pCheck2 = document.querySelector ('#descriptionbox p')
  
  if (pCheck) { 
    pCheck.textContent = 'Another habit' 
  }

  if (pCheck2) { 
    pCheck2.textContent = 'Another description' 
  }

  else {
    let createElement = document.createElement('p')
    createElement.textContent = 'New Habit'

    let habitDescription = document.createElement('p')
    habitDescription.textContent = 'Meow in empty rooms roll over and sun my belly poop in the plant pot thug cat . Cat cat moo moo lick ears lick paws destroy the blinds. So youre just gonna scroll by without saying meowdy?'

    let wrapperElement = document.getElementById('titlebox')
    wrapperElement.appendChild(createElement)

    let wrapperElement2 = document.getElementById('descriptionbox')
    wrapperElement2.appendChild(habitDescription) 
    wrapperElement2.classList.add('habit-description')
  }
}

// var habitTitle = new Array("Habit1", "Habit2", "Habit3");
// var habitDescription = new Array("Description1", "Description2", "Description3");

var habits = [
  {title: "Habit1", description: "Description1"},
  {title: "#Habit2", description: "Description2"},
  {title: "#Habit3", description: "Description3"},
];


$(document).ready(function() {
  $('#clickMe').click(function(){
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    $('#title').text('Color: ' + randomQuote.title);
    $('#description').text('Quote: ' + randomQuote.description);

  })
});
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<button type="button" id="clickMe">Click for a random quote</button>
<p id ="color"></p>
<p id ="quote"></p>
<p id ="author"></p>








// else {
//   let createElement = document.createElement('p')
//   createElement.textContent = 'New Habit'

//   let habitDescription = document.createElement('p')
//   habitDescription.textContent = 'Meow in empty rooms roll over and sun my belly poop in the plant pot thug cat . Cat cat moo moo lick ears lick paws destroy the blinds. So youre just gonna scroll by without saying meowdy?'

//   let wrapperElement = document.getElementById('titlebox')
//   wrapperElement.appendChild(createElement)

//   let wrapperElement2 = document.getElementById('descriptionbox')
//   wrapperElement2.appendChild(habitDescription) 
//   wrapperElement2.classList.add('habit-description')
// }
// }