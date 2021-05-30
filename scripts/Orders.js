import { getPaintColors, getInteriors, getTechPacks, getWheelTypes, getOrders } from './database.js';

const paintColors = getPaintColors();
const interiors = getInteriors();
const techPacks = getTechPacks();
const wheelTypes = getWheelTypes();

const buildOrderListItem = order => {

  const foundPaintColor = paintColors.find(paintColor => {
    return paintColor.id === order.paintColorId;
  });

  const foundInterior = interiors.find(interior => {
    return interior.id === order.interiorId;
  });

  const foundTechPack = techPacks.find(techPack => {
    return techPack.id === order.techPackId;
  });

  const foundWheelType = wheelTypes.find(wheelType => {
    return wheelType.id === order.wheelTypeId;
  });

  let totalCost = foundPaintColor.price + foundInterior.price + foundTechPack.price + foundWheelType.price;

  return `<li>Order #${order.id} will cost a total of $${totalCost}.</li>`;
//    and includes the paint color is ${foundPaintColor.color}, the interior is ${foundInterior.type}, the technology package is the ${foundTechPack.package} and the wheel type is ${foundWheelType.type}
};

export const Orders = () => {

  const orders = getOrders();

  let html = '<ul>';

  const listItems = orders.map(buildOrderListItem);

  html += listItems.join('');
  html += '</ul>';

  return html;
};