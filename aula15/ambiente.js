let num = [5, 8, 2, 9, 3]

num[3] = 6

num.push(7)

num.length

num.sort()
console.log(`Nosso vetor é o ${num}`)

console.log(`Nosso vetor agora é ${num}`)

console.log(`Nosso vetor tem ${num.length} posições`)

let pos = num.indexOf(2)
if (pos == -1){
    console.log('O valor não foi encontrado!')
}else{
console.log(`O valor 2 está na posição ${pos}`)
}