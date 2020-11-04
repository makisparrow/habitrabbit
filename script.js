function renderElement () {
  let pCheck = document.querySelector ('#titlebox p') 
   
  if (pCheck) { 
    pCheck.textContent = 'Another habit' 
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
function renderElement () {
let pCheck2 = document.querySelector ('#descriptionbox p')
  if (pCheck2) { 
  pCheck2.textContent = 'Another description' 
}
else {
  let habitDescription = document.createElement('p')
  habitDescription.textContent = 'hehfapfpijfåojåeofjkaskkdfjsidjfisdjfidjfidifjdifjdijfidjf'

let wrapperElement = document.getElementById('titlebox')
wrapperElement.appendChild(createElement)
let wrapperElement2 = document.getElementById('descriptionbox')
wrapperElement2.appendChild(habitDescription) 
wrapperElement2.classList.add('habit-description')

}
}
}


