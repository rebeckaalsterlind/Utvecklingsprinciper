# Utvecklingsprinciper
Refaktorering / Utvecklingsprinciper
Dessa kod-exempel följer inte DRY (Don't Repeat Yourself) principen. 
Refaktorisera koden så den intebehöver upprepas.

Kod 1let cars = ['volvo', 'saab', 'bmw', 'tesla'];  
console.log(cars[0]);   
console.log(cars[1]);  
console.log(cars[2]);
console.log(cars[3]);

Kod 2
let cars = ['volvo', 'saab', 'bmw', 'tesla'];  
let fruits = ['apple', 'banana', 'orange'];  
console.log(cars[0]);   
console.log(cars[1]);  
console.log(cars[2]);  
console.log(cars[3]);
console.log(fruits[0]);  
console.log(fruits[1]);  
console.log(fruits[2]); 

Kod 3Den här koden må följa DRY-principen, men namn konventionen är inte den bästa. 
Kan du förbättraden?
let x = ['rose', 'tulip', 'lily', 'orchid'];  
functionasdasd(banana) {  
  for (let i = 0; i < banana.length; i++) {        
    console.log(banana[i]);      
  }    
}    

asdasd(x);
