//Day 11
/*
    Get the necessary indexes for a single swap to form a palindrome
*/
function getIndexsForPalindrome(word) {
    let indexes = []
    let wrongIndexes = []
    let cleanPalindrome = true
    let len = Math.floor(word.length / 2);
    for (let i = 0; i < len; i++) {
        if (word[i] !== word[word.length - i - 1]) {
            cleanPalindrome = false
            wrongIndexes.push(i)
            wrongIndexes.push(word.length - i - 1)
        }
    }

    if (cleanPalindrome == true) {
        return indexes
    }

    if (wrongIndexes.length == 4) {
        if (word.length == 4) {
            if (word[wrongIndexes[0]] == word[wrongIndexes[3]]) {
                if (word[wrongIndexes[2]] == word[wrongIndexes[1]]) {
                    indexes = [wrongIndexes[0], wrongIndexes[2]]
                    return indexes
                }
            }
        }
        if (word[wrongIndexes[0]] == word[wrongIndexes[2]]) {
            if (word[wrongIndexes[1]] == word[wrongIndexes[3]]) {
                indexes = [wrongIndexes[0], wrongIndexes[1]]
                return indexes
            }
        }
    }

    if (wrongIndexes.length == 2) {
        indexes = null
        let middle = Math.ceil((word.length - 1) / 2)
        if (word[wrongIndexes[0]] == word[middle]) {
            indexes = [middle, wrongIndexes[1]]
        }
        if (word[wrongIndexes[1]] == word[middle]) {
            indexes = [wrongIndexes[0], middle]
        }

        return indexes
    }

    return indexes = null
}

/* console.log(getIndexsForPalindrome('abab')); */

//Day 12
/*
    Validate if a string it's a descendant of another string based on a given hierarchy
*/
function checkIsValidCopy(original, copy) {
    if (original.length != copy.length) {
        return false
    }

    for (let i = 0; i < original.length; i++) {
        if (/[A-Z]/.test(original[i])) {
            if (!(original[i] == copy[i].toUpperCase() || /#|\+|:|\.|\s/.test(copy[i]))) {
                return false
            }
        }

        if (/[a-z]/.test(original[i])) {
            if (!(original[i] == copy[i] || /#|\+|:|\.|\s/.test(copy[i]))) {
                return false
            }
        }

        if (/#/.test(original[i])) {
            if (!(/#|\+|:|\.|\s/.test(copy[i]))) {
                return false
            }
        }

        if (/\+/.test(original[i])) {
            if (!(/\+|:|\.|\s/.test(copy[i]))) {
                return false
            }
        }

        if (/\+/.test(original[i])) {
            if (!(/\+|:|\.|\s/.test(copy[i]))) {
                return false
            }
        }

        if (/:/.test(original[i])) {
            if (!(/:|\.|\s/.test(copy[i]))) {
                return false
            }
        }

        if (/\./.test(original[i])) {
            if (!(/\.|\s/.test(copy[i]))) {
                return false
            }
        }

        if (/\s/.test(original[i])) {
            if (!(/\s/.test(copy[i]))) {
                return false
            }
        }

    }

    return true
}

/* console.log(checkIsValidCopy('Santa Claus is coming','s #ta Cl#us i+ comin#')); */

function calculateTime(deliveries) {
    let seconds = 0
    let minutes = 0
    let hours = 0
    let rawSeconds = 0
    for (let i = 0; i < deliveries.length; i++) {
        rawSeconds += Number(deliveries[i].slice(6))
        rawSeconds += Number(deliveries[i].slice(3, 5) * 60)
        rawSeconds += Number(deliveries[i].slice(0, 2) * 60 * 60)
    }

    let symbol = ""
    if (rawSeconds < 25200) {
        symbol = "-"
        rawSeconds = 25200 - rawSeconds
    } else rawSeconds = rawSeconds - 25200

    hours = Math.trunc(rawSeconds / (60 * 60))
    minutes = Math.trunc((rawSeconds % (60 * 60)) / 60)
    seconds = Math.trunc(rawSeconds % 60)


    return `${symbol}${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`

}

console.log(calculateTime(['04:10:00', '01:00:00', '03:30:00']));