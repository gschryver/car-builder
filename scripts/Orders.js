import { getOrders, getPaints, getWheels, getTechnologies, getInteriors } from "./database.js"

const paints = getPaints()
const wheels = getWheels()
const technologies = getTechnologies()
const interiors = getInteriors()

const buildOrderListItem = (order) => {
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
    
    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

    const foundTech = technologies.find(
        (tech) => {
            return tech.id === order.techId
        }
    )

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    // add up all selections or display price for one selected option only
    let totalCost = 0
    if (foundPaint !== undefined) {
        totalCost += foundPaint.price; 
    }

    if (foundWheel !== undefined) {
        totalCost += foundWheel.price; 
    }

    if (foundTech !== undefined) {
        totalCost += foundTech.price; 
    }

    if (foundInterior !== undefined) {
        totalCost += foundInterior.price; 
    }
 
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
    ${foundPaint.color} car with ${foundWheel.wheelStyle} wheels, ${foundInterior.seatType} interior, and the ${foundTech.package} for a total cost of ${costString}.
    </li>`
}

export const Orders = () => {
    
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
