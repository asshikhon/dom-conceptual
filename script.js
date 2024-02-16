const allBtn = document.getElementsByClassName('add-btn');
let count = 0;
for(const btn of allBtn){
    btn.addEventListener('click', function(e){
count++;

const placeNAme = e.target.parentNode.childNodes[1].innerText;
const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
const selectedContainer = document.getElementById('selected-place-container');
const li = document.createElement('li');
const p = document.createElement('p');
p.innerText = placeNAme;
const p2 = document.createElement('p');
p2.innerText = price;
li.appendChild(p)
li.appendChild(p2)
selectedContainer.appendChild(li)

const budget = document.getElementById('budget').innerText;
const convertedBudget = parseInt(budget);
if(convertedBudget - parseInt(price) < 0){
    alert('low budget')
    return;
}
document.getElementById('budget').innerText = convertedBudget - parseInt(price);



// const totalCost = document.getElementById('total-cost').innerText;
// const convertedTotaloCost = parseInt(totalCost);
// const sum = convertedTotaloCost + parseInt(price);

totalCost('total-cost', parseInt(price));

// const grandTotal = document.getElementById('grand-total').innerText;
// const convertedGrandTotal = parseInt(grandTotal);

// const sum2 = convertedGrandTotal + parseInt(price);

grandTotalCost('grand-total', parseInt(price))

// document.getElementById('total-cost').innerText = sum;

// document.getElementById('cart-count').innerText = count;
// shortcut section
setInnerText('cart-count', count);
// setInnerText('total-cost', sum);
// setInnerText('grand-total', sum);


    })
}


function totalCost(id, value){
    const totalCost = document.getElementById(id).innerText;
    const convertedTotaloCost = parseInt(totalCost);
    const sum = convertedTotaloCost + parseInt(value);
    setInnerText('total-cost', sum);
}
function grandTotalCost(category){
    const totalCost = document.getElementById('total-cost').innerText;
    const convertedTotaloCost = parseInt(totalCost);

    setInnerText('grand-total', convertedTotaloCost);
// validation 
if(category === 'bus'){
    setInnerText('grand-total', convertedTotaloCost + 100);
}
else if(category === 'train'){
    setInnerText('grand-total', convertedTotaloCost - 200);
}else if(category === 'flight'){
    setInnerText('grand-total', convertedTotaloCost + 500);
}else{
    setInnerText('grand-total', convertedTotaloCost);
}

}


function setInnerText(id, value){
    document.getElementById(id).innerText = value;

}