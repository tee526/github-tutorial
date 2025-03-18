let newElement= document.createElement('h1');
newElement.textContent='This is the new element.';
newElement.setAttribute('id','para-1');//set id
newElement.setAttribute('class','class-s-m-x');
let referenceElement =document.getElementById('p1');
referenceElement.parentNode.insertBefore(newElement,referenceElement.nextSibling);