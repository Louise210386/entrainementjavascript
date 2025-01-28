function calculatrice(a, b, c) {
    let operateur = c;
    switch (operateur) {
        case "+":
            console.log(a+b);
            break;
        case "*":
            console.log(a*b);
            break;
        case "-":
            console.log(a-b);
            break;
        default:
            console.log(a/b);
            
        }
      
}

// function calculatrice(a, b, c) {
//     let result
//     if (c == "+") {
//         result = a + b
//     }
//     else if (c == "-") {
//         result = a - b
//     }
//     else if (c == "*") {
//         result = a * b
//     }
//     else {if (b===0){
//         console.log("ERROR: impossible de calculer")}
//         result = a / b
//     }
//     console.log(result)
// }
console.log(calculatrice(40,10,"+"))