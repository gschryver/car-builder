import { PaintColors } from "./PaintColors.js"
import { InteriorSeats } from "./InteriorSeats.js"
import { Orders } from "./Orders.js"
import { WheelStyles } from "./WheelStyles.js"
import { TechPacks } from "./TechPackages.js"
import { addCustomOrder } from "./database.js"


document.addEventListener("click", (event) => {
        if(event.target.id === "orderButton") {
            addCustomOrder();
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1>Cars 'R Us: Personal Car Builder</h1>
        <article class="choices">
            <section class="choices__metals options">
                <h2>Paints</h2>
                ${PaintColors()}
            </section>
            <section class="choices__sizes options">
                <h2>Interiors</h2>
                ${InteriorSeats()}
            </section>
            <section class="choices__styles options">
                <h2>Wheels</h2>
                ${WheelStyles()}
            </section>
            <section class="choices__styles options">
                <h2>Technologies</h2>
                ${TechPacks()}
            </section>
        </article>
        <article class="button">
            <button id="orderButton">Place Car Order</button>
        </article>      
        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}