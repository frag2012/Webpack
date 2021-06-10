import addMessage, { resetError as resetMessage, renderDiff, renderTime } from './common.js';
import { diffDates } from './calc.js';
import { showCalc, showTime } from './show.js';


const buttonCalc = document.querySelector('.calc');
buttonCalc.addEventListener('click', () => {
   showCalc();
});
const buttonTimer = document.querySelector('.timer');
buttonTimer.addEventListener('click', () => {
   showTime();
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
   const intervalTimer = setInterval(getTime, 1000);
   function getTime() {

      if (valueInput == '0') {

      } else {
         valueInput -= 1;
         renderTime(valueInput);
      }
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