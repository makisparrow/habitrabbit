function randomElement(list) {
  const randomFloat = Math.random() * (list.length - 1)
  const randomIndex = Math.round(randomFloat)
  return list[randomIndex]
}

const listOfHabbits = [
  { title: 'Practice gratitude', description: 'It is so easy to get in the bad habit of envying what others have.  The grass often seems greener on the other side of the fence.  It is vitally important to learn gratitude.  Practice thinking about the things you have to be thankful about.  I do this with my daughter each evening when I put her to bed.  I ask her to recall the good things that happened that day.  We then take a few minutes and give thanks for those things.  This helps us both to train ourselves to be grateful.' },
  { title: 'Manage money wisely', description: 'Why don’t they teach a good personal finance class in school?  Students need to learn to earn, save, budget, track, and wisely spend money to be successful in life.  Good money habits can never start too early.  There are a lot of good resources out there to help.  I recommend taking a look at what Dave Ramsey has to offer for various ages.  Of course, you can also find a lot of fantastic money tips reading blogs!'},
  { title: 'Always tell the truth', description: 'The truth often comes out whether we want it to or not.  Lying generally just complicates the situation and makes us look bad.  Look at the scandals many of our politicians fall into because they fail to admit the truth.  It is much better to just develop the habit of telling the truth even when it is difficult.  This will save you a lot of heartache and misery in life.'},
  { title: 'Be punctual', description: 'Arriving on time is important to one’s success.  People always notice when you are late.  It is an indicator of whether you mean what you say and can be trusted.  Do not introduce doubt about this into people’s minds by showing up later than expected.  Create the habit of being punctual now and you won’t have to worry.' },
  { title: 'Be a regular reader', description: 'Being a good reader is a skill that often separates the good students from those that struggle.  Becoming a good reader takes practice.  The more you read and are read to, the better you get.  Reading has numerous benefits.  It builds one’s vocabulary, expands the imagination, and rekindles creativity.  Make reading a routine!' },
  { title: 'Keep water on your nightstand', description: 'Hydrating first thing in the morning is one of the best healthy habits to adopt, and the best way to ensure that happens is to keep a nice tall glass of water on your nightstand. It helps cleanse the digestive system and prepare it for the day.'},
  { title: 'Drink green tea', description: 'Not black with whole milk and honey. Not sugary, bottled concoctions. Green tea, plain and simple! The EGCG—a super potent nutrient found almost exclusively in green tea—has been shown to help break down fat and discourage new fat cells.'},
  { title: 'Count colors, not calories', description: 'Keeping portions under control is crucial to keeping weight at bay, one of the best ways to put together a well-balanced plate is actually by observing the variety of colors before you. Filling your dish with greens and reds and yellows will help you craft a nutrient-rich meal that will help fuel your body better for your workouts, muscle recovery, and weight loss.'},
  { title: 'Schedule workouts in advance', description: "Signing up for a cardio class ahead of time or scheduling sessions with your trainer for the week ahead is a good way to force yourself to stick to your fitness routine. We all have lazy days, but scheduling in your workouts helps ensure you won't skip them."},
  { title: "Don't overdo exercising", description: "It's possible to overdo it at the gym and exhaust yourself to the point where you're no longer productive. Taking days off to rest your body and to allow your body to recover is equally as important as working it out in the first place. Don't be afraid to give yourself a day off in between your workouts."}, 
  { title: 'Have Breakfast', description: "It's important for a bunch of reasons. It jump-starts your metabolism and stops you from overeating later. Plus, studies show that adults who have a healthy breakfast do better at work, and kids who eat a morning meal score higher on tests. If a big plateful first thing isn't for you, keep it light with a granola bar or a piece of fruit. Just don't skip it.", source:" https://www.webmd.com/fitness-exercise/ss/twelve-habits-super-healthy-people "}, 
  { title: 'Plan Your Meals', description: "It'll help you save time and money in the long run. Block out some time, then sit down and consider your goals and needs. Do you want to lose weight? Cut back on sugar, fat, or carbs? Add protein or vitamins? Meal prep keeps you in control. You know what you're eating and when. A bonus: It'll be that much easier to skip those doughnuts in the breakroom at work."},
  { title: 'Learn Something New', description: "New skills help keep your brain healthy. Sign up for a dance class or a creative writing workshop. Better yet, master a new language. The mental work it takes can slow the signs of aging and may even delay the effects of Alzheimer's disease."},
  { title: 'Sleep Well', description: "There are almost too many benefits to list. A good night's sleep keeps you in a better mood, sharpens memory and focus, and helps you learn new things. In the long term, it lowers your risk of heart disease and helps you keep trim. Aim to get 7 to 9 hours a night. For the best rest, do it on schedule -- turning in and waking up at about the same times every day."},
  { title: 'Head Outdoors', description:"A few minutes in the sunshine raises vitamin D levels, and that's good for your bones, your heart, and your mood. Plus, being outside means you're more likely to move your body instead of parking it in front of the TV or computer. Choose nature over city streets, if you can. One study found that people who strolled in urban green spaces were calmer than people who walked in built-up areas."},
  { title: 'Walk those 10,000 steps every day.', description:"Aiming to walk 10,000 steps a day (or any number that presents a challenge based on your current activity level), is a great way to motivate yourself to move more and to interrupt the time you spend sitting. As a result, it can have a tremendous impact on almost every part of your body.", source:"https://www.readersdigest.ca/health/fitness/walking-10000-steps-a-day/"},
  { title: 'Seek inspiration.', description:"It's often difficult to stay motivated for any considerable amount of time. We get discouraged and dissuaded from our goals when things arise in life that send us on tangents and veer us off track. But one of the absolute best ways you can stay motivated in life is to inspire yourself daily.", source: "https://www.entrepreneur.com/slideshow/299317"},
  { title: 'Confront your fears', description:"Breaking through your fears is quite possibly one of the most important habits that you could develop. Get used to doing one thing that makes you feel uncomfortable each and every single day. Talk to a stranger, give someone a compliment, or tell someone the truth about something that makes you feel uncomfortable."},
   

]

function clickAction() {
  let pCheck = document.querySelector('#titlebox p')
  let pCheck2 = document.querySelector('#descriptionbox p')

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
    
    acceptChallange.addEventListener("click", function () {
      let name = inputForm.value
      let title = randomHabbit.title
      if (inputForm.value.length == 0)
      { 
         alert("Please fill in your name");  	
         return false; 
      }  	
      location.href = "page2.html?name=" + name + "&" + "title=" + title
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