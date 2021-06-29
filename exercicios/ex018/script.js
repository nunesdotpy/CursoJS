function adicionar(){
    let num = document.getElementById('n').value
    let res = document.getElementById('res')
    
    if (num <= 0 || num > 100){
        alert(`[ERRO] Valor inválido`)
    }else{
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        res.appendChild(item)
    }
}