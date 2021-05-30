/* eslint-disable no-console */
import { CarsRUs } from './Cars-R-Us.js';
import { addCustomOrder } from './database.js';

const mainContainer = document.querySelector('#container');

const renderAllHTML = () => {
  mainContainer.innerHTML = CarsRUs();
};

renderAllHTML();

document.addEventListener('click', e => {
  if(e.target.id === 'orderButton') {
    console.log('The order button has been pushed!');
    addCustomOrder();
  }
});

document.addEventListener('stateChanged', () => {
  console.log('State of data has changed. Regenerating HTML...');
  renderAllHTML();
});