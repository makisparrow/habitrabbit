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

    //Title and Description

    let createElement = document.createElement('p')
    createElement.textContent = randomHabbit.title

    let habitDescription = document.createElement('p')
    habitDescription.textContent = randomHabbit.description

    let wrapperElement = document.getElementById('titlebox')
    wrapperElement.appendChild(createElement)

    let wrapperElement2 = document.getElementById('descriptionbox')
    wrapperElement2.appendChild(habitDescription) 
    wrapperElement2.classList.add('habit-description')

    //Input field
    
    let inputForm = document.createElement('input')
    inputForm.setAttribute("placeholder", "Your name")

    let inputName = document.getElementById('action-div')
    inputName.appendChild(inputForm)

    inputForm.classList.add('inputfield')

    //Accept button

    let acceptChallange = document.createElement('button')
    acceptChallange.textContent = "Accept Challange"

    let accpetElement = document.getElementById('action-div')
    accpetElement.appendChild(acceptChallange)

    // accpetElement.addEventListener("click", querySelector("#linkpage2"))

    acceptChallange.classList.add('secondarybutton')

  }
    let buttonChange = document.querySelector("#toggleButton")  
  // console.dir(toggleButton);

if (buttonChange) {
    toggleButton.innerText = "Generate a new habit"
  }

else {
    toggleButton.innerText = "Start a new habit"
  }

}
