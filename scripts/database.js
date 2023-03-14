const database = { 
    orderBuilder: {},
    paints: [
       { id: 1, color: "Silver", price: 300, },
       { id: 2, color: "Midnight Blue", price: 400, },
       { id: 3, color: "Firebrick Red", price: 500, },
       { id: 4, color: "Spring Green", price: 600  }
    ],
    interiors: [
        { id: 1, seatType: "Beige Fabric", price: 1000,  },
        { id: 2, seatType: "Charcoal Fabric", price: 1500, },
        { id: 3, seatType: "White Leather", price: 3750, },
        { id: 4, seatType: "Black Leather", price: 3800 } 
    ],
    technologies: [
        { id: 1, package: "Basic Package", price: 600 },
        { id: 2, package: "Navigation Package", price: 800, },
        { id: 3, package: "Visibility Package", price: 500, },
        { id: 4, package: "Ultra Package", price: 1400 }
    ],
    wheels: [
        { id: 1, wheelStyle: "17-inch Pair Radial (Silver)", price: 400, },
        { id: 2, wheelStyle: "17-inch Pair Radial (Black)", price: 450, },
        { id: 3, wheelStyle: "18-inch Pair Spoke (Silver)", price: 500, },
        { id: 4, wheelStyle: "18-inch Pair Spoke (Black)", price: 550 }
    ],
    customOrders: [
        {
            id: 1,
            paintId: 1,
            interiorId: 1,
            wheelId: 1,
            techId: 1
        }
    ]

}

/* get exports */
export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

/* set exports */
export const setPaints = (id) => {
    database.orderBuilder.paintId = id
}

export const setInteriors = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnologies = (id) => {
    database.orderBuilder.techId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

/* add order */
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}