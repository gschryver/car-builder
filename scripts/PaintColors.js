import { getPaints, setPaints } from "./database.js"

const paints = getPaints ()

// event listener 
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paints") {
            window.alert(`Customer selected ${event.target.value} paint`)
        }
    }
)

// set event listener
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paints") {
            setPaints(parseInt(event.target.value))
        }
    }
)

// html export 
export const PaintColors = () => {
    let html = "<select name='paints'><option value='menuChoice'>Select a paint color</option>"

    // .map()
    const listItems = paints.map(paint => {
        return `
            <option value="${paint.id}" /> ${paint.color}...$${paint.price} </option>
        `
    })

    html += listItems.join("")
    html += "</select>"

    return html
}
