const btnDarkBlue = document.getElementById("btn-darkblue")
const btnCyan = document.getElementById("btn-cyan")
const btnLightBlue = document.getElementById("btn-lightblue")
const btnDelete = document.getElementById("btn-delete")

const btnDarkBlue2 = () => {
    const darkBlueClick = btnDarkBlue /* Peguei o valor do botão amarelo */
    const valueDarkBlue = document.getElementById("colors") /* Apliquei o valor do botão amarelo aqui */

    valueDarkBlue.style.backgroundColor = '#0036d0' /* Apliquei o estilo desejado */
}

const btnCyan2 = () => {
    const cyanClick = btnCyan
    const valueCyan = document.getElementById("colors")

    valueCyan.style.backgroundColor = '#24c6d8'
}

const btnLightBlue2 = () => {
    const lightBlueClick = btnLightBlue
    const valueLightBlue = document.getElementById("colors")

    valueLightBlue.style.backgroundColor = '#b3d3d9'
}

const btnDelete2 = () => {
    const deleteClick = btnDelete
    const valueDelete = document.getElementById("colors")

    valueDelete.style.backgroundColor = 'white'
}

btnDarkBlue.addEventListener('click', btnDarkBlue2)
btnCyan.addEventListener('click', btnCyan2)
btnLightBlue.addEventListener('click', btnLightBlue2)
btnDelete.addEventListener('click', btnDelete2)
