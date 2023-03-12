const display = document.querySelector('.display')
let value = ''

document.addEventListener('click', (e) => {
    if (e.target.type == 'submit') {
        value = e.target.innerText
        if (value != '=') {
            if (value == '<=') {
                display.innerHTML = display.innerHTML.slice(0, -1)
            } else if (value == 'C') {
                display.innerHTML = 0
            } else {
                if (value == 'x') value = '*'
                setDisplay()
            }
        } else {
            let resultado = display.innerHTML.replaceAll(',', '.')
            display.innerHTML = eval(resultado)
        }
    }
});

function setDisplay() {
    display.innerHTML == 0 ? display.innerHTML = '' : ''
    display.innerHTML += value
}