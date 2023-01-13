//alert("red");
let name='subhajit';
let age = 25;
let address = "Prestige Falcon City, Bangalore";
let personDetails =`personal details = My name is ${name} age is ${age} address is ${address}`;
let personDetails1 ="personal details = My name is " + name + "age is" + age + " address is" + address;
var str = "My name is Yash Prasad, age is 25, address is Prestige Falcon City, Bangalore";
console.log(personDetails1)
console.log(str.split(','))
//reverse a string
var str1="Mango eat";
var output=str1.split('');
const length=str1.length-1;
var revStr=[];
for(let i=length;i>=0;i--)
    revStr.push(output[i]);
console.log(revStr.join(''))
//max element in an array
var max= Number.MIN_SAFE_INTEGER;
var max1=Number.MIN_SAFE_INTEGER;
const arr=[1,2,33,3,99];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max)
        max=arr[i];
}
for(let i=0;i<arr.length;i++){
    if(arr[i]!=max){
    if(arr[i]>max1)
        max1=arr[i];
    }
}
console.log(max1)
//stack
class Stack { 
  
    // Array is used to implement stack 
    constructor() 
    { 
        this.items = []; 
    }
    // push function 
push(element) 
{ 
	// push element into the list items 
	this.items.push(element); 
} 
// pop function 
pop() 
{ 
	
	if (this.items.length == 0) 
		return "Underflow"; 
	return this.items.pop(); 
} 

// isEmpty function 
isEmpty() 
{ 
	// return true if stack is empty 
	return this.items.length == 0; 
} 

// peek function 
peek() 
{ 
	
	return this.items[this.items.length - 1]; 
} 

}
var stack = new Stack();
for(let i=0;i<4;i++)
    stack.push(i);
    while(!stack.isEmpty())
    console.log(stack.pop());
//ternary operator
const c=10;
const color=c==10?'red':'blue';
console.log(color)