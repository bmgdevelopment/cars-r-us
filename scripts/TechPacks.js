import { getTechPacks, setTechPack } from './database.js';

const techPacks = getTechPacks();

document.addEventListener('change', e => {
  if(e.target.name === 'techPack') {
    setTechPack(parseInt(e.target.value));
  }
});

export const TechPacks = () => {
  let html = '<ul>';

  const listItems = techPacks.map(techPack => {
    return `<li>
        <input type="radio" name="techPack" id="techPack_button" value="${techPack.id}"/> ${techPack.package}
      </li>`;
  });

  html += listItems.join('');
  html += '</ul>';
 
  return html;
};
