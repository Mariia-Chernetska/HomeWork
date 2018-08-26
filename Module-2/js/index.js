 'use strict'

 let userInput;
 const numbers = [];
 let total = 0;
    
do{
userInput = prompt ('Enter  a number!');

     if (parseInt(userInput) === Number(userInput)){
             numbers.push(userInput);
     console.log("numbers: ", numbers);    
         } else  {
             if(userInput !== null){  
                 alert ('Было введено не число, попробуйте еще раз');
             } 
           
         }                

}while (userInput !== null);  

     for (let i of numbers){
         total+= + i;
     }

     alert (`Общая сумма чисел равна ${total}`);
     console.log(`Общая сумма чисел равна ${total}`);

