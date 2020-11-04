function renderElement () {
  let createElement = document.createElement('p')
  createElement.textContent = 'New Habit'

  let habitDescription = document.createElement('p')
  habitDescription.textContent = 'Meow in empty rooms roll over and sun my belly poop in the plant pot thug cat . Cat cat moo moo lick ears lick paws destroy the blinds. So youre just gonna scroll by without saying meowdy?'

  let wrapperElement = document.getElementById('wrapper')
  wrapperElement.appendChild(createElement)
  let wrapperElement2 = document.getElementById('wrapper2')
  wrapperElement2.appendChild(habitDescription)
  wrapperElement2.classList.add('habit-description')
}

// function renderElement () {
//   let createElement = document.createElement('p')
//   createElement.textContent = 'Description'
  

//   let wrapperElement = document.getElementById('wrapper2')
//   wrapperElement.appendChild(createElement)
// }