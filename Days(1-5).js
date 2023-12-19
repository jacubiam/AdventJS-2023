//Day 1
/*
    Find the first repeated letter
*/
function findFirstRepeated(gifts) {
    let width = gifts.length;
    let repeated;
    for (let i = 0; i < gifts.length; i++) {
        let temp = gifts[i];
        for (let j = i + 1; j < gifts.length; j++) {
            if (temp == gifts[j]) {
                if (width >= j) {
                    width = j;
                    repeated = temp;
                }
            }
        }
    }

    if (repeated != undefined) {
        return repeated;
    } else {
        return -1;
    }
}

/* const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) */

//Day 2
/*
    Given a string (materials) create other strings (gifts)
*/
function manufacture(gifts, materials) {
    const finishGifts = [];
    for (let i = 0; i < gifts.length; i++) {
        let madeUpGift = [];
        for (let j = 0; j < gifts[i].length; j++) {
            for (let k = 0; k < materials.length; k++) {
                if (gifts[i].charAt(j) == materials[k]) {
                    madeUpGift.push(gifts[i].charAt(j))
                    break;
                }
            }
        }

        if (gifts[i].length == madeUpGift.length) {
            console.log(gifts[i]);
            finishGifts.push(madeUpGift.join(""));
        }
    }
    return finishGifts
}

/* const gifts = ['patineta', 'robot', 'libro']
const materials = 'nopor'
console.log(manufacture(gifts, materials)); */

//Day 3
/*
    Find a extra or missing letter in a string
*/
function findNaughtyStep(original, modified) {
    if (modified.length > original.length) {
        for (let i = 0; i < modified.length; i++) {
            if (!(original[i] == modified[i])) {
                return modified[i]
            }
        }
    }

    if (original.length > modified.length) {
        for (let i = 0; i < original.length; i++) {
            if (!(original[i] == modified[i])) {
                return original[i]
            }
        }
    }

    return ''
}

/* console.log(findNaughtyStep('stepfor', 'stepor')) // 'e' */

//Day 4
/*
    Turn the parentheses around, max nesting 2
*/
function decode(message) {
    let parentLeft = []
    let messageNested = message.split("")
    for (let i = 0; i < message.length; i++) {
        if (messageNested[i] == "(") {
            parentLeft.push(i)
        }
    }

    for (let i = parentLeft.length - 1; i >= 0; i--) {
        let parentRight = messageNested.indexOf(")", parentLeft[i] + 1);
        let reverseCount = parentRight - 1;
        let messageUnloop = messageNested.slice()
        for (let j = parentLeft[i] + 1; j < parentRight; j++) {
            messageNested[j] = messageUnloop[reverseCount]
            reverseCount--
        }
        messageNested.splice(parentRight, 1)
        messageNested.splice(parentLeft[i], 1)
    }

    return messageNested.join("")
}

/* const a = decode('((hello) (hello) (hello))!') //(olleh)!
console.log(a)  */

//Day 5
/*
    Simulate a linear road with barriers
*/
function cyberReindeer(road, time) {
    let roadmap = [road]
    let timeStamp = 0;
    let actualStep = road.split("")
    let pace = 1;
    for (let i = 1; i < time; i++) {
        if (timeStamp == 4) {
            actualStep = actualStep.map((element) => {
                if (element == "|") {
                    element = "*"
                }
                return element
            })
        }
        if (actualStep[pace] == ".") {
            if (!(actualStep[pace - 1] == "*")) {
                actualStep[pace - 1] = "."
            }
            actualStep[pace] = "S"
            roadmap.push(actualStep.join(""))
            timeStamp++
            pace++
        } else if (actualStep[pace] == "|") {
            roadmap.push(actualStep.join(""))
            timeStamp++
        } else if (actualStep[pace] == "*") {
            if (!(actualStep[pace - 1] == "*")) {
                actualStep[pace - 1] = "."
            }
            actualStep[pace] = "S"
            roadmap.push(actualStep.join(""))
            actualStep[pace] = "*"
            timeStamp++
            pace++
        }
    }

    return roadmap
}

/* const road = 'S..||..|..'
const time = 7 // units of time
const result = cyberReindeer(road, time)
console.log(result); */