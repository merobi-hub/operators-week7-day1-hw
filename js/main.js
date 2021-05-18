//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(str,words){
    for(let i = 0; i < words.length; i++){
        if (str.includes(words[i]) == true){
            //console.log(words[i])
            return "Matched dog_name"
        } else {
            //console.log(words[i])
            return "No Matches"
        }
    }
}

//Call method here with parameters

console.log(findWords(dog_string,dog_names))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++){
        if ( i % 2 == 0){
            arr.splice(i,1,'even index')
        }
    }
    return arr
}

console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//============Code Wars #1: Abbreviate a Two Word Name==============//
/*
Write a function to convert a name into initials. This kata strictly takes two words 
with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
Patrick Feeney => P.F
*/

function abbrevName(n){
    for (let i = 0; i < n.length; i++){
        if (i == 0){
            var first = n[i].toUpperCase();
        } else if (n[i] == ' '){
            var second = n[i+1].toUpperCase();
        }
    }
    return `${first}.${second}`
}

console.log(abbrevName("Sam Harris"))
console.log(abbrevName("Patrick feeney"))

//===============Code Wars #2: Do you speak 'English'?======================//
/*
Given a string of arbitrary length with any ascii characters. Write a function 
to determine whether the string contains the whole word "English".
The order of characters is important -- a string "abcEnglishdef" is correct but 
"abcnEglishsef" is not correct.
Upper or lower case letter does not matter -- "eNglisH" is also correct.
Return value as boolean values, true for the string to contains "English", false 
for it does not.
*/

function doSpeakEnglish(str){
    var test = 'english'
    if (str.toLowerCase().includes(test) == true){
        return true
    }
    return false
}

console.log(doSpeakEnglish("1234english"))
console.log(doSpeakEnglish("English12345"))
console.log(doSpeakEnglish("Egnlish12345"))



