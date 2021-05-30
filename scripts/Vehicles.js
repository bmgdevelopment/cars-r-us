import { getVehicles, setVehicle } from './database.js';

document.addEventListener('change', e => {
  if(e.target.name === 'vehicle') {
    setVehicle(parseInt(e.target.value));    
  }
});

const vehicles = getVehicles();

export const Vehicles = () => {
  let html = '<ul>';

  const listItems = vehicles.map(vehicle => {
    return `<li>
    <input type="radio" value="${vehicle.id}" name="vehicle" id="vehicle_button" />${vehicle.type}
    </li>`;
  });

  html += listItems.join('');
  html += '</ul>';

  return html;
};