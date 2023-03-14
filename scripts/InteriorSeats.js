import { getInteriors, setInteriors } from "./database.js"

const interiors = getInteriors ()

// event listener 
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "seats") {
            window.alert(`Customer selected ${event.target.value}`)
        }
    }
)

// set event listener
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "seats") {
            setInteriors(parseInt(event.target.value))
        }
    }
)

// html export 
export const InteriorSeats = () => {
    let html = "<select name='seats'><option value='menuChoice'>Select an interior material</option>"

    // Use .map() for converting objects to <li> elements
    const listItems = interiors.map(interior => {
        return `
            <option value="${interior.id}" /> ${interior.seatType}...$${interior.price} </option>
        `
    })

    html += listItems.join("")
    html += "</select>"

    return html
}