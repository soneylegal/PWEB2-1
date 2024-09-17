let addRowBtn = document.getElementById('addRowBtn')
let infoTable = document.getElementById('infoTable')

addRowBtn.addEventListener('click', function () {
    let newRow = infoTable.insertRow()
    let nome = newRow.insertCell(0)
    let idade = newRow.insertCell(1)
    nome.textContent = "Davi"
    idade.textContent = "16"
})
//
let updateContentBtn = document.getElementById('updateContentBtn')
let contentDiv = document.getElementById('content')

updateContentBtn.addEventListener('click', function () {
    let h2 = contentDiv.querySelector('h2')
    h2.textContent = 'Conteúdo Atualizado'

    let newP = document.createElement('p')
    newP.textContent = 'Novo parágrafo'

    contentDiv.insertBefore(newP, h2.nextSibling)
})
//
let myLink = document.getElementById('myLink')
myLink.addEventListener('mouseover', function () {
    myLink.style.color = 'red'
})

myLink.addEventListener('mouseout', function () {
    myLink.style.color = 'blue'
})
//
let addDivBtn = document.getElementById('addDivBtn')

addDivBtn.addEventListener('click', function () {
    let newDiv = document.createElement('div')
    newDiv.id = 'newDiv'
    newDiv.textContent = 'Novo bloco'
    contentDiv.appendChild(newDiv)
})
//
let removeParagraphBtn = document.getElementById('removeParagraphBtn')

removeParagraphBtn.addEventListener('click', function () {
    let paragraph = contentDiv.querySelector('p')

    if (paragraph) {
        contentDiv.removeChild(paragraph)
    }
})