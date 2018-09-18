let button = document.createElement('button');
let buttonText = document.createTextNode('Add Square');
button.appendChild(buttonText);
document.body.appendChild(button);
let container = document.createElement('div');
container.className = 'container';
let num = 0;
let colors = ['red', 'blue', 'green', 'purple', 'pink', 'yellow', 'orange'];
let randomColor = colors[Math.floor(Math.random()*colors.length)];
button.addEventListener('click', function() {
    num++;
    let div = document.createElement('div');
    div.className = 'box';
    div.id = num;
    container.appendChild(div);
    document.body.appendChild(container);
    div.addEventListener('click', function() {
        div.style.backgroundColor = randomColor;
    });
    div.addEventListener('mouseover', function() {
    div.innerHTML = div.id
    });
    div.addEventListener('mouseleave', function() {
        div.innerHTML = " ";
    });
    
});


