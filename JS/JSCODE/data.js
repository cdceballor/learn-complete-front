const img = document.getElementsByTagName('img');
console.log(img);

var hello = document.getElementById('test');
hello.innerHTML('Friend');

var newText = document.createElement('h1');
newText.innerHTML = 'Hello World';

hello.appendChild(newText);