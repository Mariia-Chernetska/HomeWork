 'use strict'

 const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
  };

 function Cashier(name, productDatabase){
    this.name = name,
    this.productDatabase = productDatabase,
    this.customerMoney = 0 // customerMoney:0
        this.getCustomerMoney = function(value){
            this.customerMoney = value ;
            console.log (this.customerMoney);
    }; 

    this.countTotalPrice = function(order){ 
        console.log(order);
            let totalPrice = 0;
            for (let key in order){
             if(this.productDatabase.hasOwnProperty(key)){
                 totalPrice += order[key] * productDatabase[key];
             }    
            }
           return totalPrice;
    };
    
    this.countChange = function(totalPrice){
        let change = 0;
    if (this.customerMoney > totalPrice){
            change = this.customerMoney - totalPrice;      
    }else{
        this.onError();
        return null;
    }

    return change;
    }

    this.onSuccess = function(change){
        console.log (`Спасибо за покупку, ваша сдача ${change}!`);
    }

    this.onError = function() {
        console.log('Очень жаль, вам не хватает денег на покупки');
    }

    this.reset = function(){
        this.customerMoney = 0;
    }
    
 };

 const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1
  };

 const mango = new Cashier('Mango', products);
console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0

const totalPrice = mango.countTotalPrice(order);
console.log(totalPrice); // 110

mango.getCustomerMoney(300);
const change = mango.countChange(totalPrice);
console.log(change); // 190

if(change !== null) {
    // При успешном обслуживании вызываем метод onSuccess
   mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
 } else {
   // При неудачном обслуживании вызываем метод onError   
   mango.onError(); // Очень жаль, вам не хватает денег на покупки
 }
 
 // Вызываем reset при любом исходе обслуживания
 mango.reset();
 
 // Проверяем значения после reset
 console.log(mango.customerMoney);