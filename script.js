let VAT = 7;

function pumpCalc() {
    let pump = document.forms["gas"]["pump"].value;
    let pricePLiter = document.forms["gas"][pump].value;
    let liters = document.forms["gas"]["liters"].value;
    let totalPrice = (pricePLiter * liters);
    let valueTax = (totalPrice * (VAT / 100));


    document.getElementById('petrolType').innerText = pump;
    document.getElementById('pricePerLiter').innerText = '$' + Number(pricePLiter).toFixed(2);
    document.getElementById('totalLiters').innerText = liters;
    document.getElementById('VAT').innerText = VAT + '%' + ` ($${valueTax.toFixed(2)})`;
    document.getElementById('totalPrice').innerText = '$' + (valueTax + totalPrice).toFixed(2);


}

pumpCalc()