let newElement= document.createElement('h1');
newElement.textContent='This is the new element.';
newElement.setAttribute('id','para-1');//set id
newElement.setAttribute('class','class-s-m-x');
let referenceElement =document.getElementById('p1');
referenceElement.parentNode.insertBefore(newElement,referenceElement.nextSibling);




function personalbar(fname, Lname) {
    let firstName =fname;
    let lastName=lname;
  
    let getDetails_noaccess = function () {
      return (`First name is : ${firstname} Last
  name is: ${lastname} `);
    }
  
    this.getDetails_access = function () {
      return (`first name is : ${firstname}, Last
        name is: ${lastname}`);
    }
    }
  
    let personal=new persona ('mukul','latiyan');
    console.log(persona1.firstname);
    console.log(persona1.getDetails_noaccess);
    console.log(persona1.getDetails_access());