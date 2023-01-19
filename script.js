
var redParagraph = document.createElement('p')
redParagraph.textContent = "Hey I'm red!"
redParagraph.style.color = 'red'

var head3 = document.createElement('h3')
head3.textContent = "I'm a blue h3!"
head3.style.color = 'blue'

var styledDiv = document.createElement('div')
styledDiv.style['border: 1 px solid black'] //Trying differents syntaxes
styledDiv.style.backgroundColor = 'pink'




var container = document.querySelector('#container')
container.appendChild(redParagraph)
container.appendChild(head3)

