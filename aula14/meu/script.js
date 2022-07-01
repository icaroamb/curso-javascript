function calcular(){

    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    //Imprimindo erro caso falte dados válidos

    if (inicio.value.length <= 0 || fim.value.length <= 0 || passo.value.length <= 0) {
        alert('[ERRO] Por favor! Insira dados válidos!')
    }   else{
            res.innerHTML = 'Contando: <br>'
            //Convertendo Strings para Number
            var i = Number(inicio.value)
            var f = Number(fim.value)
            var p = Number(passo.value)
            if(p <= 0){
                alert('Dado inválido para passo!! Considerando PASSO = 1')
                res.innerHTML += 'Impossível Contar'
                p = 1
            }else {
                alert('erro')
             }
        }
}




