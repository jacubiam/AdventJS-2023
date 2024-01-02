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
