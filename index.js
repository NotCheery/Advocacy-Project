let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}
themeButton.addEventListener('click', toggleDarkMode);

// Add your query for the sign now button here
const signNowButton = document.getElementById('sign-now-button');

const addSignature = (person) => {
    // Write your code to manipulate the DOM here
 
  const newSignature = document.createElement('p');
  newSignature.textContent = `🖊️ ${person.name} from ${person.hometown} supports this.`;
  const signaturesSection = document.querySelector('.signatures');
  
  signaturesSection.appendChild(newSignature);
  //call toggle modal function
  toggleModal(person);
}


const validateForm = () => {

  let petitionInputs = document.getElementById("sign-petition").elements;
  let containsErrors = false;

  // TODO: Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    //Add a conditional in the for loop function
    if (petitionInputs[i].value.length < 2) {
      
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } 
    else {
      petitionInputs[i].classList.remove('error');
    }
  }
// Create person object
const person = {
  name: petitionInputs[0].value,
  hometown: petitionInputs[1].value,
  email: petitionInputs[2].value
  };

  // Out of for loop, check if containsErrors = false
  if (!containsErrors) {
    // Add signature
    addSignature(person);
    // Clear fields
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }
}

  // TODO: Validate the value of each input
signNowButton.addEventListener('click', validateForm);

//Adding animation (see unit 8)
let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};

let revealableContainers = document.querySelectorAll('.revealable');
function reveal() {
  for (let i = 0; i < revealableContainers.length; i++){
    //code logic for reveal goes here
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');/* add the active class to the revealableContainer's classlist */
    } else {
      revealableContainers[i].classList.remove('active');
      /* remove the active class to the revealableContainer's classlist */
    }
  }
    
}

// Call the reveal function when the page loads and when the user scrolls
document.addEventListener('DOMContentLoaded', reveal);
window.addEventListener('scroll', reveal); // Hooking up the reveal function to the scroll event listener for the window

//Modal
const toggleModal = (person) => {
  const modal = document.getElementById('thanks-modal');
  const modalContent = document.getElementById('thanks-modal-content');

  modal.style.display = 'flex'
  

  const intervalId = setInterval(scaleImage, 500);

  // Call setTimeout to hide the modal after a specified number of milliseconds
  // Call clearInterval after 4 seconds to stop the animation
  setTimeout(() => {
    clearInterval(intervalId);
    modal.style.display = 'none';
  }, 4000);
};


function scaleImage() {
  // Toggle image size between 1 and 0.8
  if (scaleFactor === 1) {
    scaleFactor = 0.8;
  } else {
    scaleFactor = 1;
  }

  // Apply scaleFactor to the image
  modalImage.style.transform = `scale(${scaleFactor})`;
}
