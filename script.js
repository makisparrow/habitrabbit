function randomElement (list) {
  const randomFloat = Math.random() * (list.length - 1)
  const randomIndex = Math.round(randomFloat)
  return list[randomIndex]
}

const listOfHabbits = [
	{ title: 'Practice gratitude', description: 'It is so easy to get in the bad habit of envying what others have.  The grass often seems greener on the other side of the fence.  It is vitally important to learn gratitude.  Practice thinking about the things you have to be thankful about.  I do this with my daughter each evening when I put her to bed.  I ask her to recall the good things that happened that day.  We then take a few minutes and give thanks for those things.  This helps us both to train ourselves to be grateful.' }, 
  { title: 'Manage money wisely', description: 'Why don’t they teach a good personal finance class in school?  Students need to learn to earn, save, budget, track, and wisely spend money to be successful in life.  Good money habits can never start too early.  There are a lot of good resources out there to help.  I recommend taking a look at what Dave Ramsey has to offer for various ages.  Of course, you can also find a lot of fantastic money tips reading blogs!' },
  { title: 'Always tell the truth', description: 'The truth often comes out whether we want it to or not.  Lying generally just complicates the situation and makes us look bad.  Look at the scandals many of our politicians fall into because they fail to admit the truth.  It is much better to just develop the habit of telling the truth even when it is difficult.  This will save you a lot of heartache and misery in life.' },
  { title: 'Be punctual', description: 'Arriving on time is important to one’s success.  People always notice when you are late.  It is an indicator of whether you mean what you say and can be trusted.  Do not introduce doubt about this into people’s minds by showing up later than expected.  Create the habit of being punctual now and you won’t have to worry.' },
  { title: 'Be a regular reader', description: 'Being a good reader is a skill that often separates the good students from those that struggle.  Becoming a good reader takes practice.  The more you read and are read to, the better you get.  Reading has numerous benefits.  It builds one’s vocabulary, expands the imagination, and rekindles creativity.  Make reading a routine!' },
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
    acceptChallange.textContent = "Accept this habit"

    let acceptElement = document.getElementById('action-div')
    acceptElement.appendChild(acceptChallange)

    acceptChallange.classList.add('secondarybutton')

    acceptChallange.addEventListener("click", function() {
    location.href = "page2.html"    
  })

  }
    
  let buttonChange = document.querySelector("#toggleButton")  

if (buttonChange) {
    toggleButton.innerText = "Generate another habit"
  }

else {
    toggleButton.innerText = "Start a new habit"
  }

}
