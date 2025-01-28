// function calculatrice(a, b, c) {
//     let operateur = c;
//     switch (operateur) {
//         case "+":
//             console.log(a+b);
//             break;
//         case "*":
//             console.log(a*b);
//             break;
//         case "-":
//             console.log(a-b);
//             break;
//         default:
//             console.log(a/b);
            
//         }
      



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

function calculatrice(){
    let nb1=prompt("saisissez votre premier chiffre");
    let nb2=prompt("saisissez votre deuxieme chiffre")
    let operateur=prompt ("entrez le symbole de l'operation que vous souhaitez faire,+-*/")
    switch(operateur){
        case"+":
        console.log(nb1+nb2);
        break;
        case"-":
        console.log(nb1-nb2);
        break;
        case"x":
        console.log(nb1*nb2)
        break;
        default:console.log(nb1/nb2)
    }

}

console.log(calculatrice(40,10,"+"))