/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselEntry = document.querySelector('.carousel-container')
function createCarousel(){
  const carousel = document.createElement('div'),
        leftButton = document.createElement('div'),
        mountainsPic = document.createElement('img'),
        computerPic = document.createElement('img'),
        treesPic = document.createElement('img'),
        turntablePic = document.createElement('img'),
        rightButton = document.createElement('div');

//Structure
  carousel.appendChild(leftButton);
  carousel.appendChild(mountainsPic);
  carousel.appendChild(computerPic);
  carousel.appendChild(treesPic);
  carousel.appendChild(turntablePic);
  carousel.appendChild(rightButton);

  // Classes
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  // Content
  leftButton.textContent = '<';
  mountainsPic.src = './assets/carousel/mountains.jpeg';
  computerPic.src = './assets/carousel/computer.jpeg';
  treesPic.src = './assets/carousel/trees.jpeg';
  turntablePic.src = './assets/carousel/turntable.jpeg';
  rightButton.textContent = '>';


  return carousel
}
carouselEntry.appendChild(createCarousel())