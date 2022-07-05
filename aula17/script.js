let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function adicionar() {
    if (num.value.length == 0 || Number(num.value) < 1 || Number(num.value) > 100){
        alert('Por Favor! Escolha um número entre 1 e 100!!')
    } else {
        let n = Number(num.value)
        valores.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        lista.appendChild(item)
        if (n == valores) {
            alert('Repetido')
        } else {
            alert('BÃO')
        }
    }
}