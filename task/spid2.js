/*
// MANIPULATING THE DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();

const btn = document.querySelector('.btn');
// btn.style.background = 'red';


// EVENTS

// Mouse Event
btn.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});

// Keyboard Event
const titleInput = document.querySelector('#name');
titleInput.addEventListener('input', e => {
  document.querySelector('.container').append(titleInput.value);
});
*/

// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const titleInput = document.querySelector('#title');
const strDT = document.querySelector('#start');
const endDT = document.querySelector('#end');
const desInput = document.querySelector('#des');
const msg = document.querySelector('.msg');
const taskList = document.querySelector('#list');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(titleInput.value === '' || desInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`Title: ${titleInput.value}\nDescription: ${desInput.value}\nStarts: ${strDT.value}\nEnds: ${endDT.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    taskList.appendChild(li);

    // Clear fields
    titleInput.value = '';
    desInput.value = '';
    strDT.value = '';
    endDT.value = '';
  }
}