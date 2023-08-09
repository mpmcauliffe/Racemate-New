

export const reconstitute = str => {
    if (!str) { return [ ] }

    let setArr = str.split(':')

    if(setArr[0].includes(',')) {
        setArr = setArr.map(item => [item])
        setArr = setArr.map(item => item[0].split(','))
    }

    return setArr
}
// FOR CLIENT
// "x,1,y,2:x,3,y,4:x,5,y,6" 
// split string on ':'
// a = z.split(':')
// RETURNS ["x,1,y,2", "x,3,y,4", "x,5,y,6"]

// rebuild object literals
// b = a.map((unit, i) => ({ x: unit[2], y: unit[6] }))
// RETURNS [{x: "1", y: "2"}, {x: "3", y: "4"}, {x: "5", y: "6"}] 
export const reconstituteObj = str => {
    if (!str) { return [ ] }

    let initArr = str.split(':')

    return initArr.map((unit, i) => ({ 
        time: unit[2] ? unit[2] : '', 
        distance: unit[6] ? unit[6] : '',
    }))
}

