function adicionar(){
    var numero = document.getElementById('txtn')
    var seltab = document.getElementById('seltab')

    if (numero.value.length == 0){
        alert('Por favor Insira um número')

    } else {
        var n = Number(numero.value)
        if (n < 1 || n > 100) {
            alert('Por favor! Insira um número entre 1 e 100')
        } else {
            var vetor = [n] //ARRAY
            var item = document.createElement('option')
            item.text = `Recebi o valor ${n}`
            seltab.appendChild(item)

            if (n >= n){
                alert('Repetido')
            } else {
                alert('OOOK')
            }
        }

        
    }
}

        
        