
// 1. Ergänze die Funktion in [`twofer.js`](./twofer.js) so, dass sie "Two for me and one for you" zurückgibt, wenn keine Argumente übergeben werden.
// z.B.\
// `console.log(twofer("Fran")) ---> "Two for me and one for Fran" ` \
// `console.log(twofer()) ---> "Two for me and one for you" `
    





// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed

//  const twofer = who => {
//    if(who){
//    return `Two for me and one for ${who}`;
//    } else{
//      return `Two for me and one for you`;
//    }
//  };

 function twofer(...args){
 if (args.length != 0){
   return `Two for me and one for ${args[0]}`;

 } else{
   return `Two for me and one for you`;
 }
 }




console.log(twofer("Fran")); // -> "Two for me and one for Fran"
console.log(twofer()); // -> "Two for me and one for you"
