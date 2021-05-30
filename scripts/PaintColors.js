import { getPaintColors, setPaintColor } from './database.js';

const paintColors = getPaintColors();

document.addEventListener('change', e => {
  if(e.target.name === 'paintColor') {
    setPaintColor(parseInt(e.target.value));
  }
});

export const PaintColors = () => {
  let html = '<ul>';

  const listItems = paintColors.map(paintColor => {
    return `<li>
    <input id="paintColor_button" type="radio" name="paintColor" value="${paintColor.id}"/> ${paintColor.color}
    </li>`;
  });

  html += listItems.join('');
  html += '</ul>';

  return html;
};