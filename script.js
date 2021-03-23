const totalTime = 7500;
const breathInTime = ( totalTime / 5 )* 2;
const holdTime = totalTime / 5;

const text = document.querySelector('#text');
const container = document.querySelector('#container');

const displayText = (myString) => text.innerText = `${myString}`;

function breathAnimation() {
  displayText(`Breath In!`);
  container.className = 'container grow';

  setTimeout(() => {
    displayText(`Hold!`);

    setTimeout(() => {
      displayText(`Breath Out!`);
      container.className = 'container shrink';
    }, holdTime);

  }, breathInTime);
}

breathAnimation();

setInterval(breathAnimation, totalTime);