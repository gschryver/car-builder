import { getTechnologies, setTechnologies } from "./database.js"

const technologies = getTechnologies ()

// event listener 
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "tech-packs") {
            window.alert(`Customer selected ${event.target.value}`)
        }
    }
)

// set event listener
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "tech-packs") {
            setTechnologies(parseInt(event.target.value))
        }
    }
)

// html export
export const TechPacks = () => {
    let html = "<select name='tech-packs'><option value='menuChoice'>Select a technology package</option>"

    // .map()
    const listItems = technologies.map(tech => {
        return `
            <option value="${tech.id}" /> ${tech.package}...$${tech.price} </option>
        `
    })

    html += listItems.join("")
    html += "</select>"

    return html
}