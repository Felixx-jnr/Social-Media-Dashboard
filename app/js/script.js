//VARIABLES
const darkBtn = document.querySelector('#dark');
const lightBtn = document.querySelector('#light');
const body = document.querySelector('body');

//FUNCTIONS
const darkMode = () => {
  body.classList.add('dark'); 
  body.classList.remove('light');
}

const lightMode = () => {
  body.classList.add('light'); 
  body.classList.remove('dark');
}

//LOCAL STORAGE FUNCTION
const getColorMode = () => {
  if (localStorage.getItem('colorMode') == 'dark'){
    darkMode();
    darkBtn.click()
  } else if(localStorage.getItem('colorMode') == 'light') {
    lightMode();
    lightBtn.click();
  } 
}

// Function to check and set color mode based on user's preference
const checkMode = () => {

  if (localStorage.getItem('colorMode') == null){
    
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      lightBtn.click();
    } else if(window.matchMedia('(prefers-color-scheme: light)').matches){
      darkBtn.click();
    }
  };
};

const checkModeChange = () => {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',(event)=>{
    checkMode();
  });  
};

//INVOKING THE LOCAL STORAGE FUNCTION
getColorMode();
checkMode();
checkModeChange();


//TOGGLING LIGHT/DARK MODE
darkBtn.addEventListener('click', ()=>{
  localStorage.setItem('colorMode' , 'dark');
  darkMode();

})

lightBtn.addEventListener('click', ()=>{
  localStorage.setItem('colorMode' , 'light');
  lightMode();
})


//  CARD FLIP EVENT WORKING

const frontCards = document.querySelectorAll('.card__front');
const backCards = document.querySelectorAll('.card__back');
const first = document.querySelector('.card--facebook')

const frontFlip = (card) => {
  card.style.transform += "rotateY(-270deg)";

}

const backFlip = (card) => {
  card.style.transform = "rotateY(270deg)";
}

frontCards.forEach((frontCard, index) => {
  frontCard.addEventListener('mouseenter', () => {
    backFlip(backCards[index]);
  });
});

frontCards.forEach((frontCard, index) => {
  frontCard.addEventListener('mouseleave', () => {
    frontFlip(backCards[index]);
  });
});
