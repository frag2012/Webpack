import addMessage, { resetError as resetMessage, renderDiff, renderTime } from './common.js';
import { diffDates } from './calc.js';
import { showCalc, showTime } from './show.js';
import { Howl, Howler } from 'howler';



let sound = new Howl({
   src: ['sound.mp3', 'sound.wav'],
   autoplay: true,
   loop: true,
   volume: 0.5,
   onend: function () {
      alert('Finished!');
   }
});

sound.play();


const buttonCalc = document.querySelector('.calc');
buttonCalc.addEventListener('click', () => {
   showCalc();
   sound.play();
});
const buttonTimer = document.querySelector('.timer');
buttonTimer.addEventListener('click', () => {
   showTime();
   sound.play();
});

// timer
const formTimer = document.querySelector('#timeForm');
const stopTimer = document.querySelector('.buttonStop');



formTimer.addEventListener('submit', (event) => {
   event.preventDefault();
   resetMessage();
   const addInput = document.querySelector('.inputTimer');
   let valueInput = addInput.value;
   renderTime(valueInput);

   const getTime = () => {

      if (valueInput == 0) {
         clearInterval(intervalTimer);
         renderTime(valueInput);
      } else {
         valueInput--;
         renderTime(valueInput);
      }
   };

   const intervalTimer = setInterval(getTime, 1000);
   if (valueInput >= 0 && valueInput !== '') {

      getTime();
   }
   else {
      renderTime('Ошибка. Введите положительное число.');
      clearInterval(intervalTimer);
   }


   stopTimer.addEventListener('click', (event) => {
      event.preventDefault();
      clearInterval(intervalTimer);
   });
});


// calc
const formCalc = document.querySelector('#dateForm');

formCalc.addEventListener('submit', (event) => {
   event.preventDefault();
   resetMessage();

   const formdata = new FormData(event.target);
   let date1 = formdata.get('date1');
   let date2 = formdata.get('date2');

   if (!date1 || !date2 && date2 < date1) {
      addMessage('Ошибка');
   } else {
      if (date1 > date2) {
         [date1, date2] = [date2, date1];
      }
      const result = diffDates(date1, date2);
      renderDiff(result);


   }
});


export default 'form.js';