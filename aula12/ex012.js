var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
console.log(`Agorta são exatamente ${hora}h${min}min`)
if (hora < 12){
    console.log('Bom dia')
}else if(hora <=18){
    console.log('Boa tarde')
}else{
    console.log('Boa notie')
}