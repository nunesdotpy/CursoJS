function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'kidm.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'youngm.png')
            }else if (idade < 65){
                //adulto
                img.setAttribute('src', 'adultm.png')
            }else{
                // idoso
                img.setAttribute('src', 'oldman.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'kidf.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'youngf.png')
            }else if (idade < 65){
                //adulto
                img.setAttribute('src', 'adultf.png')
            }else{
                //idoso
                img.setAttribute('src', 'oldlady.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}