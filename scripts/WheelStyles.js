import { getWheels, setWheels } from "./database.js"

const wheels = getWheels ()

// event listener 
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheels") {
            window.alert(`Customer selected ${event.target.value}`)
        }
    }
)

// set event listener
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheels") {
            setWheels(parseInt(event.target.value))
        }
    }
)

// html export 
export const WheelStyles = () => {
    let html = "<select name='wheels'><option value='menuChoice'>Select a wheel style</option>"

    // .map()
    const listItems = wheels.map(wheel => {
        return `
            <option value="${wheel.id}" /> ${wheel.wheelStyle}...$${wheel.price} </option>
        `
    })

    html += listItems.join("")
    html += "</select>"

    return html
}