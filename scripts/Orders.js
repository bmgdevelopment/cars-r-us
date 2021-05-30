import { getPaintColors, getInteriors, getTechPacks, getWheelTypes, getOrders, getVehicles } from './database.js';

const paintColors = getPaintColors();
const interiors = getInteriors();
const techPacks = getTechPacks();
const wheelTypes = getWheelTypes();
const vehicles = getVehicles();

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

  const foundVehicle = vehicles.find(vehicle => {
    return vehicle.id === order.vehicleId;
  });

  let totalCost = foundPaintColor.price + foundInterior.price + foundTechPack.price + foundWheelType.price;

  if (foundVehicle.id === 1) {
    return `<li>
        Order #${order.id} will cost a total of $${totalCost}
        </li>`;
  } else if (foundVehicle.id === 2) {
    let totalCost2 = (totalCost * 1.5);
    return `<li>
    Order #${order.id} will cost a total of $${totalCost2.toFixed(2)}
    </li>`;
  } else if (foundVehicle.id === 3) {
    let totalCost3 = (totalCost * 2.25);
    return `<li>
    Order #${order.id} will cost a total of $${totalCost3.toFixed(2)}
    </li>`;
  }
  //   return `<li>Order #${order.id} will cost a total of $${totalCost}.</li>`;
};

export const Orders = () => {

  const orders = getOrders();

  let html = '<ul>';

  const listItems = orders.map(buildOrderListItem);

  html += listItems.join('');
  html += '</ul>';

  return html;
};