

const modArray = ['hrs', 'min', 'sec', 'dec']

export const extractTimeUnit = (str, mod) => {
    // hrs, min, sec, mil
    // 00:00:00:000
    
    if(!str) { return '' }

    const strSplit = str.split(/[\:.]+/)
    const modLocation = modArray.indexOf(mod)

    return strSplit[modLocation]
}

export const buildTimeString = (timeValue, mod, originalString) => {
    
    if(!timeValue) { timeValue = '00' }

    timeValue = timeValue.trim()
    timeValue = timeValue.length < 2 ? '0' + timeValue : timeValue
    // mil has been removed
    //timeValue = mod === 'mil' ? '0' + timeValue : timeValue

    const modLocation = modArray.indexOf(mod)
    const timeArr = originalString.split(/[\:.]+/)
    timeArr[modLocation] = timeValue
    
    const subWhole = timeArr.join(':')
    const subOne   = subWhole.substring(0,8)
    const subTwo   = subWhole.substring(9,11)
    
    return `${subOne}.${subTwo}` 
}

export const incrementString = (numStr) => {
    let [numOne, numTwo] = numStr.split('')

    numTwo = numTwo === '9' ? '0' : (parseInt(numTwo) + 1).toString() 
    numOne = numTwo === '0' ? (parseInt(numOne) + 1).toString() : numOne

    //console.log(numOne, numTwo)
    return numOne + numTwo
}
