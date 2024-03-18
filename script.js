function firstNonRepeatedChar(str) {
 // Write your code here
	let a = str.length;

	// let myMap = new Map(); 
	// for(let char of str){
	// 	myMap.set(char,(myMap.get(char) || 0) + 1);
	// }

	// for(let )

	
	if(a === 0){
		return null;
	}
       
       let flag = false;
       for (let i = 0; i < a; i++) {
           let count = 0;
           for (let j = 0; j < a; j++) {
               if(i !== j){
                   if(str[i] == str[j]){
                       count++;
					   flag = true;
                       break;
                   }	
               }
           }
           if(count === 0){
               return str[i];
               break;
           }
       }
	if(flag === true){
	return null;
	}
       
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
