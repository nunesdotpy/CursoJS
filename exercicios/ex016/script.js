var inicio = document.getElementById('ini')
var fim = document.getElementById('fim')
var passo = document.getElementById('pas')
var mostrar = document.getElementById('show')

while (inicio <= fim){
    mostrar.innerText = `${inicio}`
    inicio += passo
}
