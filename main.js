function  $(elementId) {return document.getElementById(elementId);}
const scene = $('js--scene');
const camera = $('js--camera');
let status = [false, false];
const screen = $('screen');
const screenText = $('screenText');

flickLever = (event) => {
    const lever = $(event.target.id);
    if (event.target.id === 'lever2') {
      if (!status[1]) {
        lever.setAttribute('animation__click', 'property: rotation; to: 30 0 0; loop: false; dur: 1000');
        status[1] = true;
        updateScreen();
      } else{
        lever.setAttribute('animation__click', 'property: rotation; to: 0 0 0; loop: false; dur: 1000');
        status[1] = false;
          updateScreen();
      }
    }else if (event.target.id === 'lever1') {
      console.log('ttt');
      if (!status[0]) {
        lever.setAttribute('animation__click', 'property: rotation; to: 30 0 0; loop: false; dur: 1000');
        status[0] = true;
          updateScreen();
      } else{
        lever.setAttribute('animation__click', 'property: rotation; to: 0 0 0; loop: false; dur: 1000');
        status[0] = false;
          updateScreen();
      }
    }
};

updateScreen = () => {
    if (status[0] && status[1]) {
        //make computerscreen green
        screen.setAttribute('color', 'green');
        screenText.setAttribute('value', 'Core temp stable again');
        screenText.setAttribute('position', '-9 7 -13')
    } else {
        //make screen bad again
        screen.setAttribute('color', 'red');
        screenText.setAttribute('value', 'Core temp too high, lower asap');
        screenText.setAttribute('position', '-12.2 7 -13')
    }
};
