function reverseString(...str) {
    //return str.split("").reverse().join("")
    return str.reverse().join("");
}



console.log(reverseString(..."myname"));

// // function rev(str) {
    
// //     let reversedStr = "";

// //     for (let i = str.length -1; i>= 0; i--) {
// //        reversedStr += str[i];
    
// //     }
// //     return reversedStr;
// // }

// // console.log(rev("rebecka"));


let list = [..."rebecka"];

console.log(list)

// (0==0) ? console.log('true block') : console.log('false block')