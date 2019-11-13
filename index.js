console.dir(document);
const mybutton = document.getElementById('my-button');

function alertWhenClickedOne (event){
    event.stopImmediatePropagation();
    alert("youve been alerted one");
}
function alertWhenClickedTwo (event){
    // console.log(event);
    // event.stopPropagation();
    alert("youve been alerted two");
}

// properties can be overwritten, only the second alertWhenClickedTwo will run
// document.getElementById('my-button').onclick = alertWhenClickedOne;
// document.getElementById('my-button').onclick = alertWhenClickedTwo;

// document.body.onclick = function(){
//     alert('the body was just clicked');
// };

mybutton.addEventListener('click', alertWhenClickedOne);
mybutton.addEventListener('click', alertWhenClickedTwo);

document.querySelector('form').onsubmit = function (even) {
    // prevent default action of a form (refreshing on button click)
    event.preventDefault();
    // select inputs being interacted with by the user
    const usernameInput = document.querySelector('#username-input');
    const passwordInput = document.querySelector('#password-input');
    // select target elements to inject user input values
    const usernameTarget = document.querySelector('#username');
    const passwordTarget = document.querySelector('#password');

    // inject user input into target elements
    usernameTarget.innerText = usernameInput.value;
    passwordTarget.innerText = passwordInput.value;
    // good user experience to clear inputs after successful submission
    usernameInput.value = '';
    passwordInput.value = '';
};

function makeLink() {
    // first create the element to be inserted into the document
    const newElement = document.createElement('a');
    // creating text to be inserted into the newly created element
    const text = document.createTextNode('Let Me Google That for You');
    // insert the new text into the new element 
    newElement.appendChild(text);
    // apply an href attribute to the newly created element
    newElement.setAttribute('href', 'https://lmgtfy.com');
    // apply classname to element, for easy selection and removal after it has been created
    newElement.setAttribute('class', 'made-link');
    console.log(newElement);
    // body is the parent node
    document.body.appendChild(newElement);
}

function removeMadeLink(){
    const elementToRemove = document.querySelector('.made-link');
    // body is the parent node reference line 51
    const parent = elementToRemove.parentNode
    console.log(parent);
    // finally pass the element to remove to the container parent node
    parent.removeChild(elementToRemove);
}

document.querySelector('.add-link').onclick = makeLink;
document.querySelector('.remove-link').onclick = removeMadeLink;