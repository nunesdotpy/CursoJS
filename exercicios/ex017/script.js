function tabuada() {
    let num = document.getElementById('num')
    let res = document.getElementById('res')
    let n = Number(num.value)
    let op
    res.innerHTML = `<p>Resultado: </p>`
    if (num.value.length == 0){
        alert('[ERRO] Voce deve informar um valor!')
    }else{
        for (let c = 1; c <= 10; c++){
           op = n * c
           res.innerHTML += `${n} x ${c} = ${op} <br>`
        }
    }
}