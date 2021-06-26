function tabuada() {
    let num = document.getElementById('num')
    let res = document.getElementById('res')
    let n = Number(num.value)

    res.innerHTML = `<p>Resultado: </p>`
    if (num.value.length == 0){
        alert('[ERRO] Voce deve informar um valor!')
    }else{
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            res.appendChild(item)
        }
    }
}