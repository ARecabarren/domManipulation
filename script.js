
var redParagraph = document.createElement('p')
redParagraph.textContent = "Hey I'm red!"
redParagraph.style.color = 'red'

var head3 = document.createElement('h3')
head3.textContent = "I'm a blue h3!"
head3.style.color = 'blue'

var styledDiv = document.createElement('div')
styledDiv.style.border = '1px solid black' //Trying differents syntaxes
styledDiv.style.backgroundColor = 'pink'

let lyerHeader = document.createElement('h1')
lyerHeader.textContent = "I'm a div"

let lyerPar = document.createElement('p')
lyerPar.textContent = "ME TOO!"

styledDiv.appendChild(lyerHeader)
styledDiv.appendChild(lyerPar)


var container = document.querySelector('#container')
container.appendChild(redParagraph)
container.appendChild(head3)
container.appendChild(styledDiv)

