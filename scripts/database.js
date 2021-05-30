const database = {
  paintColors: [
    {id: 1, color: 'Silver', price: 299.99},
    {id: 2, color: 'Midnight Blue', price: 199.99},
    {id: 3, color: 'Firebrick Red', price: 499.99},
    {id: 4, color: 'Spring Green', price: 199.99}
  ],
  interiors: [
    {id: 1, type: 'Beige Fabric', price: 139.99},
    {id: 2, type: 'Charcoal Fabric', price: 129.99},
    {id: 3, type: 'White Leather', price: 209.99},
    {id: 4, type: 'Black Leather', price: 209.99},
  ], 
  techPacks: [
    {id: 1, package:'Basic Package', price: 99.00},
    {id: 2, package: 'Navigation Package', price: 499.99},
    {id: 3, package: 'Visibility Package', price: 399.99},
    {id: 4, package: 'Ultra Package', price: 799.99}
  ],
  wheelTypes: [
    {id: 1, type: '17-inch Pair Radial', price: 199.99},
    {id: 2, type: '17-inch Radial Black', price: 249.99},
    {id: 3, type: '18-inch Pair Spoke Silver', price: 299.99},
    {id: 4, type: '18-inch Pair Spoke Black', price: 349.99},
  ],
  vehicles: [
      {id:1, type: 'Car'},
      {id:2, type: 'SUV'},
      {id:3, type: 'Truck'}
  ],
  orders: [
    // {id: 1, paintColorId: 3, interiorId: 2, techPackId: 4, wheelTypeId: 4}
  ],
  orderBuilder: {} 
};

//EXPORTS ALL ARRAY WITHIN DATABASE AS STAND ALONE ARRAYS. 
//.MAP METHOD OUTPUTS ARRAYS
export const getPaintColors = () => {
    return database.paintColors.map(paintColor => ({...paintColor}))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTechPacks = () => {
    return database.techPacks.map(techPack => ({...techPack}))
}
export const getWheelTypes = () => {
    return database.wheelTypes.map(wheelType => ({...wheelType}))
}
export const getOrders = () => {
    return database.orders.map(order => ({...order}))
}

//NEW
export const getVehicles = () => {
    return database.vehicles.map(vehicle => ({...vehicle}))
}

//EXPORT SET ID FUNCTIONS FOR ALL SEPERATED ARRAYS
export const setPaintColor = (id) => {
    return database.orderBuilder.paintColorId = id
}
export const setInterior = (id) => {
    return database.orderBuilder.interiorId = id
}
export const setTechPack = (id) => {
    return database.orderBuilder.techPackId = id
}
export const setWheelType = (id) => {
    return database.orderBuilder.wheelTypeId = id
}

//NEW
export const setVehicle = (id) => {
    return database.orderBuilder.vehicleId = id
}

//EXPORT ADDCUSTOMORDER
export const addCustomOrder = () => {

const newOrder = {...database.orderBuilder};

if (newOrder.paintColorId && newOrder.interiorId && newOrder.techPackId && newOrder.wheelTypeId){

const lastIndex = database.orders.length;
newOrder.id = lastIndex + 1;

database.orders.push(newOrder);

database.orderBuilder = {};

document.dispatchEvent(new CustomEvent("stateChanged"))
}
}