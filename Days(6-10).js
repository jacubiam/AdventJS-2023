//Day 6
/*
    Calculate the max distance based on a string
*/
function maxDistance(movements) {
    let distance = 0;
    let wildcard = 0;
    for (let i = 0; i < movements.length; i++) {
        if (movements.charAt(i) == ">") {
            distance++
        } else if (movements.charAt(i) == "<") {
            distance--
        } else if (movements.charAt(i) == "*") {
            wildcard++
        }
    }

    if (distance > 0) {
        distance += wildcard
    } else if (distance < 0) {
        distance -= wildcard
    } else if (distance == 0) {
        distance = wildcard
    }

    return Math.abs(distance)
}

/* const movements = '****<'
const result = maxDistance("<<**>>")
console.log(result) // -> 2 */

//Day 7
/*
    Draw a 3D box (The ugliest challenge by far)
*/
function drawGift(size, symbol) {
    let box = []
    let s = " "
    let hash = "#"
    let sColumn = size - 1
    let hColumn = size
    for (let i = size * 2 - 1; i > 0; i--) {
        if (sColumn > 0) {
            box.push(s)
            sColumn--
        } else if (hColumn > 0) {
            box.push(hash)
            hColumn--
        }
    }

    box[box.length] = '\n'

    let upperBox = []
    for (let i = 0; i < size - 2; i++) {
        let sColumn = size - 2 - i
        let outerFace = size - 2
        let innerFace = i
        for (let j = 0; j < (size - 2 + size - 3) + 4; j++) {
            if (sColumn > 0) {
                upperBox.push(s)
                sColumn--
            } else if ((sColumn == 0)) {
                upperBox.push(hash)
                sColumn--
            } else if (outerFace > 0) {
                upperBox.push(symbol)
                outerFace--
            } else if ((outerFace == 0)) {
                upperBox.push(hash)
                outerFace--
            } else if (innerFace > 0) {
                upperBox.push(symbol)
                innerFace--
            } else {
                upperBox.push(hash)
            }
        }
        upperBox[upperBox.length] = "\n"
    }

    let middle = []
    let middleHash = size
    let middleSynbol = size - 2
    for (let i = 0; i < (size - 2 + size - 3) + 4; i++) {
        if (middleHash > 0) {
            middle.push(hash)
            middleHash--
        } else if (middleSynbol > 0) {
            middle.push(symbol)
            middleSynbol--
        } else {
            middle.push(hash)
        }
    }

    middle[middle.length] = "\n"

    let lowerBox = []
    for (let i = 0; i < size - 2; i++) {
        let sColumn = 0
        let outerFace = size - 2
        let innerFace = size - 3 - i
        for (let j = 0; j < (size - 2 + size - 3) + 4; j++) {
            if ((sColumn == 0)) {
                lowerBox.push(hash)
                sColumn--
            } else if (outerFace > 0) {
                lowerBox.push(symbol)
                outerFace--
            } else if ((outerFace == 0)) {
                lowerBox.push(hash)
                outerFace--
            } else if (innerFace > 0) {
                lowerBox.push(symbol)
                innerFace--
            } else {
                lowerBox.push(hash)
                break
            }
        }
        lowerBox[lowerBox.length] = "\n"
    }

    if (size == 1) {
        return "#\n"
    }

    return box.join("") + upperBox.join("") + middle.join("") + lowerBox.join("") + box.reverse().join("").trim() + "\n"
}

/* console.log(drawGift(2, '+')); */

//Day 8
/*
    Sort a string based on the amount of the given types
*/
function organizeGifts(gifts) {
    let amount = "";
    let chain = "";
    for (let i = 0; i < gifts.length; i++) {
        if (/[0-9]/.test(gifts.charAt(i))) {
            amount += gifts.charAt(i)
        } else {
            let type = gifts.charAt(i)
            let nAmount = Number(amount)

            let palletes = Math.floor(nAmount / 50)
            let boxes = Math.floor((nAmount - palletes * 50) / 10)
            let bag = nAmount - boxes * 10 - palletes * 50

            let typeSize = palletes + boxes + 1
            for (let j = 0; j < typeSize; j++) {
                if (palletes > 0) {
                    chain += `[${type}]`
                    palletes--
                } else if (boxes > 0) {
                    chain += `{${type}}`
                    boxes--
                } else if (bag > 0) {
                    chain += "("
                    for (let k = 0; k < bag; k++) {
                        chain += type
                    }
                    chain += ")"
                }
            }

            amount = ""
        }
    }
    return chain
}

/* const result1 = organizeGifts('76a11b')
console.log(result1) */

//Day 9
/*
    Calculate which are the minimun steps required for sort an array
*/
function adjustLights(lights) {
    let amountClockWise = 0
    let lightsClockwise = lights.slice()
    for (let i = 0; i < lightsClockwise.length; i++) {
        if (lightsClockwise[i] == lightsClockwise[i - 1]) {
            if (lightsClockwise[i] == '🟢') {
                lightsClockwise[i] = '🔴'
            } else {
                lightsClockwise[i] = '🟢'
            }
            amountClockWise++
        }
    }

    let amountCounterCW = 0
    for (let i = lights.length - 1; i >= 0; i--) {
        if (lights[i] == lights[i + 1]) {
            if (lights[i] == '🟢') {
                lights[i] = '🔴'
            } else {
                lights[i] = '🟢'
            }
            amountCounterCW++
        }
    }

    if (amountClockWise <= amountCounterCW) {
        return amountClockWise
    } else {
        return amountCounterCW
    }
}

/* console.log(adjustLights(["🔴", "🔴", "🟢", "🔴", "🟢"])); */

//Day 10
/*
    Draw a tree with the given heigth and a character as an ornament
*/
function createChristmasTree(ornaments, height) {
    let tree = ""
    let currentOrnament = 0
    for (let i = 0; i < height; i++) {
        let spaces = height - 1 - i
        let treeFloor = []
        for (let j = 0; j < height; j++) {
            if (spaces > 0) {
                treeFloor.push(" ");
                spaces--
            } else {
                for (let k = 0; k < i + 1; k++) {
                    treeFloor.push(ornaments.charAt(currentOrnament))
                    currentOrnament++
                    if (k < i) {
                        treeFloor.push(" ")
                    }
                    if (currentOrnament == ornaments.length) {
                        currentOrnament = 0;
                    }

                }
                break
            }
        }

        treeFloor.push("\n")
        tree += treeFloor.join("")
    }

    let spaces = height - 1
    let treeBase = []
    for (let j = 0; j < height; j++) {
        if (spaces > 0) {
            treeBase.push(" ");
            spaces--
        } else {
            treeBase.push("|")
        }
    }
    treeBase.push("\n")
    tree += treeBase.join("")

    return tree
}

/* console.log(createChristmasTree("123", 5)) */