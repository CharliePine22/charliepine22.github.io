const li = document.getElementsByClassName('item');
const list = document.getElementsByClassName('list');
const quote = document.querySelector('#quote');
const newtodo = document.querySelector('#newtodo');
const button = document.querySelector('#submit');
const trash = document.querySelector('i');
let count = document.getElementById('count');



const motivationalQuotes = [
'Your limitation—it’s only your imagination.',
'Push yourself, because no one else is going to do it for you.',
'Sometimes later becomes never. Do it now.',
'Great things never come from comfort zones.',
'Success doesn’t just find you. You have to go out and get it.',
'The harder you work for something, the greater you’ll feel when you achieve it.',
'Don’t stop when you’re tired. Stop when you’re done.',
'It’s going to be hard, but hard does not mean impossible.',
'Sometimes we’re tested not to show our weaknesses, but to discover our strengths.',
'The key to success is to focus on goals, not obstacles.'
];

//randomly loop through the quotes to decide which one displays.
let randomQuote = Math.floor(Math.random() * motivationalQuotes.length)
quote.textContent = motivationalQuotes[randomQuote];
totalItems = 0
const tasks = [];
//limit the todo list to 10 items, once it reaches 10, disable the submit button
if(tasks.length == 10) {
  button.disabled = true;
}
else {
  button.disabled = false;
}

function addNewTodo() {
  //create a new list item
  let li = document.createElement('li');
  //grab the value from the form
  let inputValue = document.getElementById('newtodo').value;
  let task = document.createTextNode(inputValue);
  //create a button to allow the removal of an item
  let button = document.createElement('button');
  button.innerHTML = 'Remove';
  li.appendChild(task);
  li.appendChild(button);
  button.className = 'delete'
  tasks.push(newtodo.value);
  if (inputValue === '') {
    alert("You must write something!");
  } 
  else {
    document.getElementById("ul").appendChild(li);
    totalItems++;
    } 
}

function deleteTodo(e) {
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
  // if(e.target.className == 'delete') deleteTodo(e);
}

document.getElementById('ul').addEventListener('click', function(e) {
  if(e.target && e.target.nodeName ==='LI') {
    e.target.classList.toggle('list-check');
  }
}) 

document.getElementById('ul').addEventListener('click', function(e) {
  if(e.target && e.target.className == 'delete') {
    deleteTodo(e);
  }
})




// parseInt(count).textContent = totalItems;

//call on the window to deactivate the enter key in the input tag
window.addEventListener('keydown',function(e){if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter'||e.keyCode==13){if(e.target.nodeName=='INPUT'&&e.target.type=='text'){e.preventDefault();return false;}}},true);
button.addEventListener('click', addNewTodo);
trash.addEventListener('click', deleteTodo);

//checkbox if important, label red and push to top of list.
//calander view with date times
