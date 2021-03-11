function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        // Bom dia
        img.src = 'dia.png'
        document.body.style.background = '#fcd8b2'
    }else if (hora >= 12 && hora < 18){
        // Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#fead24'
    }else{
        // Boa noite
        document.body.style.background = '#1a3453'
        img.src = 'noite.png'
        
    }
}