

/**
 * Brute force--BARBARIC--code for building an object dynamically
 * @param {*Object to build onto} obj 
 * @param {*How many key/values are added} depth 
 * @param {*Name for key key} name 
 * @param {*Generic value} value 
 */

export const buildObject = (obj, depth, name, value) => {
    if (Object.keys(obj).length === depth) {
        return obj
    }

    const mod = Object.keys(obj).length + 1

    return buildObject(
        {
            ...obj,
            [`${name}_${mod}`]: value
        },
        depth,
        name,
        value,
    )
}

export const removeObjKeys = (obj, newQuantity, name) => {
    if (Object.keys(obj).length === newQuantity) {
        return obj
    }

    const mod = Object.keys(obj).length

    delete obj[`${name}_${mod}`]

    return removeObjKeys(obj, newQuantity, name)
}

export const refillObjValues = (obj, size, name, val1, val2, ) => {
    if (size === 0) { return obj }

    if (Array.isArray(obj[Object.keys(obj)[0]])) {
        obj[`${name}_${size}`] = val1
        return refillObjValues(obj, --size, name, val1)
    }
    obj[`${name}_${size}`] = val2
    return refillObjValues(obj, --size, name, val1, val2)
}

// BUT THIS IS THE MONSTROSITY I CREATED FOR ADDING AND REMOVING ARRAYS FROM AND ARRAY
    // state.baseSets.length > action.payload 
    //     ? state.baseSets.slice(0, action.payload)
    //     : [
    //         ...state.baseSets, 
    //         ...[...Array(action.payload - state.baseSets.length)].map(set => {
    //             return [...Array(parseInt(state.repValue)).fill('10')]
    //         })
    //     ]
// [...a, ...[...Array(2)].map(emptySet => { return [...Array(2).fill(8)] })]


// parseInt(action.payload) > Object.keys(state.baseArray).length 
//                     ? buildObject(state.baseArray, parseInt(action.payload), 'set', state.baseValue) 
//                     : removeObjKeys(state.baseArray, parseInt(action.payload), 'set')