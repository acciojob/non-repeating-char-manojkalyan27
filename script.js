function firstNonRepeatedChar(str) {
 // Write your code here
	let a = str.length;
       
       
       for (let i = 0; i < a; i++) {
           let count = 0;
           for (let j = 0; j < a; j++) {
               if(i !== j){
                   if(str[i] == str[j]){
                       count++;
                       break;
                   }	
               }
           }
           if(count === 0){
               console.log(str[i]);
               break;
           }
       }
       
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
