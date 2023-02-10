 function mega(qtd = 6, numeros = []) {
  if (qtd < 6 && qtd > 60) {
    throw "Quantidade invalida"
  }

  if(numeros.length === qtd){
    return numeros.sort((n1,n2) => n1-n2)
  }

  const numeroAleatorio = parseInt(Math.random() * 60) + 1
  if(!numeros.includes(numeroAleatorio)){
    return mega(qtd, [...numeros, numeroAleatorio])
  }else{
    return mega(qtd, numeros)
  }
}

console.log(mega())