function tabuada() {
    let num = document.getElementById('txtn')
    let seltab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('[ERRO] Faltam dados!!')
         
    } else {
        let n = Number(num.value)
        let c = 1
        seltab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            seltab.appendChild(item)
            c++
        }
    }
}