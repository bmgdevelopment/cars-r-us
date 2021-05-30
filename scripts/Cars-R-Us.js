import { Interiors } from './Interiors.js';
import { Orders } from './Orders.js';
import { PaintColors } from './PaintColors.js';
import { TechPacks } from './TechPacks.js';
import { WheelTypes } from './WheelTypes.js';
import { Vehicles } from './Vehicles.js';

export const CarsRUs = () => {
  return `
    <h1>Cars-R-Us</h1>

    <article class='choices'>
    <section class='choices__paintColor options'>
    <h2>Paint Colors</h2>
    ${PaintColors()}
    </section>
    <section class='choices__interior options'>
    <h2>Interiors</h2>
    ${Interiors()}
    </section>
    <section class='choices__techPack options'>
    <h2>Technology Packages</h2>
    ${TechPacks()}
    </section>
    <section class='choices__wheelType options'>
    <h2>Wheels</h2>
    ${WheelTypes()}
    </section>
    </article>

    <article>
    <section class="carSection">
    ${Vehicles()}
    </section>
    </article>

    <article class="buttonArticle">
    <button id='orderButton'>Create Custom Car</button>
    </article>

    <article>
    <section class="options">
    <h2>Custom Car Orders</h2>
    ${Orders()}
    </section>
    </article>
    `;
};