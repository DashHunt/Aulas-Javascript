const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[4] || 'Não existe')

//Adição de elementos
valores[4] = 10
console.log(valores)

//Tamanho do array
console.log(valores.length)

//Adição de elementos no final
valores.push(false, null, 'teste')
console.log(valores)

//Retirar elementos
console.log(valores.pop()) //Retirar elemento do final
delete valores[0]
console.log(valores)