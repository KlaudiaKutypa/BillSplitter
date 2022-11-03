const bill = document.querySelector('#bill');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const button = document.querySelector('.count');
const error = document.querySelector('.error');
const costinfo = document.querySelector('.cost-info');
const info = document.querySelector('.cost');
const reset = document.querySelector('.reset');

button.addEventListener('click', function(e) {

    if (bill.value == "" || people.value == "" || tip.value == "") {
        error.textContent = "Fill all the inputs";
        costinfo.style.display = "none";
    } else {
        error.textContent = "";
        countBill();
    }

})

const countBill = () => {

    const result = ( parseFloat(bill.value) + parseFloat(bill.value) * parseFloat(tip.value) ) / parseInt(people.value);
    
    costinfo.style.display = "block"
    info.innerHTML = result.toFixed(2)
}

reset.addEventListener('click', function() {
    bill.value = "";
    people.value = "";
    tip.value = "";

    costinfo.style.display = "none";
    error.textContent = "";
})