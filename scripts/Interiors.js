import { getInteriors, setInterior} from './database.js';

const interiors = getInteriors();

document.addEventListener('change', e => {
  if(e.target.name === 'interior') {
    setInterior(parseInt(e.target.value));
  }
});

export const Interiors = () => {
  let html = '<ul>';

  const listItems = interiors.map(interior => {
    return `<li>
    <input id="interior_button" name="interior" type="radio" value="${interior.id}" /> ${interior.type}
    </li>`;
  });

  html += listItems.join('');
  html += '</ul>';

  return html;

};