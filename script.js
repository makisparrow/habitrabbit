function randomElement (list) {
  const randomFloat = Math.random() * (list.length - 1)
  const randomIndex = Math.round(randomFloat)
  return list[randomIndex]
}

const listOfHabbits = [
	{ title: 'my title 1', description: 'my description 1' }, 
  { title: 'my title 2', description: 'my description 2' },
  { title: 'my title 3', description: 'my description 3' }
]

function clickAction () {
  let pCheck = document.querySelector ('#titlebox p') 
  let pCheck2 = document.querySelector ('#descriptionbox p')
  const randomHabbit = randomElement(listOfHabbits)
  
  if (pCheck) { 
    pCheck.textContent = randomHabbit.title
  }

  if (pCheck2) { 
    pCheck2.textContent = randomHabbit.description
  }

  else {
    let createElement = document.createElement('p')
    createElement.textContent = randomHabbit.title

    let habitDescription = document.createElement('p')
    habitDescription.textContent = randomHabbit.description

    let wrapperElement = document.getElementById('titlebox')
    wrapperElement.appendChild(createElement)

    let wrapperElement2 = document.getElementById('descriptionbox')
    wrapperElement2.appendChild(habitDescription) 
    wrapperElement2.classList.add('habit-description')

    
  }
}

// Objects
// Person


// Title styling
// console.log('*****', randomHabbit.title, '*****')

// Description styling
// console.log('-----', randomHabbit.description, '-----')


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