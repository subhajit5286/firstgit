//console.log(document.title);
//console.log(document.all[10]);
//document.all[10].textContent="hello"
//console.log(document.getElementById('items'));
var header=document.getElementById('main-header');
header.style.borderBottom='solid 4px black'
var item=document.getElementsByClassName('title')
console.log(item[0])

item[0].style.fontWeight='bold';
item[0].style.color='green';

var listitems=document.getElementsByClassName('list-group-item');
listitems[2].style.backgroundColor='green';
for(var i=0;i<listitems.length;i++){
    listitems[i].style.fontWeight='bold';
}
console.log('sb')
var li=document.getElementsByTagName('li');
console.log(li)
li[4].textContent='Last item';
li[4].style.backgroundColor='pink'