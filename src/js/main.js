var valorDolar = prompt('Digite o valor em dólar:')
var cotacaoDolar = 4.87;

var valorReal = valorDolar * cotacaoDolar;
valorReal = valorReal.toFixed(2);
alert(`US${valorDolar} em real é igual a R$${valorReal}. Obrigado pela preferência!`);