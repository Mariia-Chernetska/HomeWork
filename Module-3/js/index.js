 'use strict'

 const loginsMass = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

 const addLogin = function (newLogin, logins){
 
     if(isLoginValid(newLogin)){
         if(isLoginUnique(logins, newLogin)){
             logins.push(newLogin);
             return  'Логин успешно добавлен!';
         }
         else{
             return 'Такой логин уже используется!';
         }
     }
     else{
         return 'Ошибка! Логин должен быть от 4 до 16 символов';
     }
 };
 
 const isLoginValid = function(login) {
     let min = 4;;
     let max = 16;
     if (login.length < min || login.length > max){
         return false;
     }else{
         return true;
     } 
 };
 
 const isLoginUnique = function(allLogins, login){
     if(!allLogins.includes(login)){
             return true;
     }else{
         return false;
     }
 };
 
 
 console.log(addLogin('Zod2', loginsMass));
 console.log(addLogin('Poly', loginsMass));
 console.log(addLogin('Zod', loginsMass));
 console.log(addLogin('jqueryisextremelyfast', loginsMass));