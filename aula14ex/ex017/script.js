function calcular(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados Válidos!!')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (i < f) {
            for(var c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`
            }
        
        } else if (i > f){
            for(var c = i; c > f; c -= p){
            res.innerHTML +=  `${c} \u{1F449}`   
            }
        } else {
            alert('Insira valores de Inicio e Fim DIFERENTES!')
        }
            res.innerHTML += ` \u{1F3C1}`
        }
}