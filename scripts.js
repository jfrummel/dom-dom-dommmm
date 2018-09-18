let button = document.createElement('button');
let buttonText = document.createTextNode('Add Square');
button.appendChild(buttonText);
document.body.appendChild(button);
let container = document.createElement('div');
container.className = 'container';
let num = 0;

button.addEventListener('click', function() {
    num++;
    let div = document.createElement('div');
    div.className = 'box';
    div.id = num;
    container.appendChild(div);
    document.body.appendChild(container);
    div.addEventListener('click', function() {
        let colors = ['red', 'blue', 'green', 'purple', 'pink', 'yellow', 'orange'];
        let randomColor = colors[Math.floor(Math.random()*colors.length)];
        div.style.backgroundColor = randomColor;
    });
    div.addEventListener('mouseover', function() {
        div.innerHTML = div.id
    });
    div.addEventListener('mouseleave', function() {
        div.innerHTML = " ";
    });
    div.addEventListener('dblclick', function() {
        let len = document.getElementsByClassName('box').length;
        let nextSquare = document.getElementById(div.id).nextElementSibling;
        let previousSquare = document.getElementById(div.id).previousElementSibling;
         if (div.id % 2 == 0) {
            if (div.id >= len) {
                alert("There are no boxes after this one!");
            } else {
                nextSquare.parentNode.removeChild(nextSquare); 
            }
        } else {
            if (previousSquare == null) {
                alert("There are no boxes before this one!");
            } else {
                previousSquare.parentNode.removeChild(previousSquare);
            }
        }   
    }); 
});


