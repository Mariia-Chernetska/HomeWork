'use strict';


// ===========================================================================

//                              HOMEWORK




const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

let messageFirst = 'Отменено пользователем!';
let messageSecond = 'Доступ запрещен!';
let messageThird = 'Добро пожаловать!';

const userLogin = prompt('Введите Ваш Логин!');



if(userLogin === adminLogin){ // this is good
    //task 2
    const userPassword = prompt('Enter the password');
    if(adminPassword === userPassword){ // this is good
            alert(messageThird);
    } else { //this is not good
        if (!userPassword){
            alert(messageFirst);
          } else {
           alert(messageSecond);
          }
    }
} else { //this is not good
    if (!userLogin){
        alert(messageFirst);
      } else {
        alert(messageSecond);
      }
}

if (userLogin === adminLogin){
     const  userPassword = prompt('Введите Ваш пароль!');
         if (adminPassword === userPassword){
             alert(message3);
        } 
         if (!userPassword){
          alert(message1);
        } else {
         alert(message2);
        }
}
if (!userLogin){
    alert(message1);
  } else {
    alert(message2);
  }
