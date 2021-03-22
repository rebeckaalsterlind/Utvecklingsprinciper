// 1.
const cars = ['volvo', 'saab', 'bmw', 'tesla'];    
for (let car of cars){
    console.log(car);
};



//2
//const cars = ['volvo', 'saab', 'bmw', 'tesla'];  
const fruits = ['apple', 'banana', 'orange'];  

function logItems(items) {
    for(let item of items)
    console.log(item);
}

logItems(cars);
logItems(fruits);



//3
const flowers = ['rose', 'tulip', 'lily', 'orchid'];  

function printList(list) {  
    for (let i of list) {        
        console.log(i);      
    };    
};    

printList(flowers);

