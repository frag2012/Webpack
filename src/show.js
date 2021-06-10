import { resetError } from './common.js';
const divTime = document.querySelector('#timeForm');
const divCalc = document.querySelector('#dateForm');

export const showCalc = () => {
   divCalc.classList.add('show');
   divCalc.classList.remove('hide');
   divTime.classList.add('hide');
   resetError();
};

export const showTime = () => {
   divTime.classList.add('show');
   divTime.classList.remove('hide');
   divCalc.classList.add('hide');
   resetError();


};