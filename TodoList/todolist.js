const li = document.getElementsByClassName('item');
const list = document.getElementsByClassName('list');
const quote = document.querySelector('#quote');
const newtodo = document.querySelector('#newtodo');
const button = document.querySelector('button')

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

let randomQuote = Math.floor(Math.random() * motivationalQuotes.length)
quote.textContent = motivationalQuotes[randomQuote];

const tasks = [];

function addNewTodo() {
    let li = document.createElement('li');
    let inputValue = document.getElementById('newtodo').value;
    let task = document.createTextNode(inputValue)
    li.appendChild(task)
    tasks.push(newtodo.value)

    if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.getElementById("ul").appendChild(li);
      }
    if(tasks.length == 10) {

    }
}

window.addEventListener('keydown',function(e){if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter'||e.keyCode==13){if(e.target.nodeName=='INPUT'&&e.target.type=='text'){e.preventDefault();return false;}}},true);
button.addEventListener('click', addNewTodo);


//checkbox if important, label red and push to top of list.
