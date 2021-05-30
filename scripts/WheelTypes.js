import { getWheelTypes, setWheelType } from './database.js';

const wheelTypes = getWheelTypes();

document.addEventListener('change', e => {
  if(e.target.name === 'wheelType') {
    setWheelType(parseInt(e.target.value));
  }
});

export const WheelTypes = () => {
  let html = '<ul>';

  const listItems = wheelTypes.map(wheelType => {
    return `<li>
      <input type="radio" name="wheelType" id="wheelType_button" value="${wheelType.id}" />${wheelType.type}
      </li>`;
  });

  html += listItems.join('');
  html += '</ul>';
    
  return html;
};