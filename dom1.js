var itemList=document.querySelector('#items');
itemList.parentElement.style.backgroundColor='yellow';
itemList.firstChild.textContent='firstChild'
//console.log(itemList.firstChild)
itemList.firstElementChild.textContent='firstElementChild';
itemList.lastElementChild.textContent='lastElementChild';
itemList.lastChild.textContent='Last child'
console.log(itemList.nextSibling)
console.log(itemList.nextElementSibling)
console.log(itemList.previousSibling)
itemList.previousElementSibling.style.color='magenta'
var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title', 'hello div');
var newDivText=document.createTextNode('hello world');
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv,h1);
