const btn = document.getElementById('start');
const result = document.getElementById('result');
const resultIva = document.getElementById('result-iva');
const resultWithIva = document.getElementById('result-with-iva')

function askPrice(){
  let price = prompt('Por favor ingrese el valor del producto.');
  
  if(price === null || !price){
    return;
  };
  
  if(isNaN(price)){

    alert('Por favor ingrese un precio valido,  el IVA es opcional (solo se aceptan numeros.');

  } else{
    price = parseInt(price);
    result.innerHTML = `El valor de su producto: "${price}".`

  };

  return price;

};

function askIva(){
  let iva = prompt('Por favor ingrese el valor del IVA.');
  iva = parseInt(iva);

  if(iva === null){
    iva = 21;
  } else {
    resultIva.innerHTML = `El IVA de su producto es: "${iva}".`;
  }

  return iva;
}

/**
 * This function calculate the tax for a price.
 * 
 * @param {number} price - price to calculate the tax.
 * @param {number} [iva] - tax percentage by default.
 */
function calculateTax(price, iva ) {
  return price + (price * iva / 100);
};



btn.addEventListener('click', () => {
  let priceResult = askPrice();
  let ivaResult = askIva()
  let resultComplete = calculateTax(priceResult, ivaResult);

  resultWithIva.innerHTML = `${resultComplete}`
});

