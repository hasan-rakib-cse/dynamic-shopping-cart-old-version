document.getElementById('phoneIncrease').addEventListener('click', function() {
  handlePhoneChange(true);
})

document.getElementById('phoneDecrease').addEventListener('click', function() {
  handlePhoneChange(false);
})

document.getElementById('caseIncrease').addEventListener('click', function() {
  handleCaseChange(true);
})

document.getElementById('caseDecrease').addEventListener('click', function() {
  handleCaseChange(false);
})


function handlePhoneChange(isIncrease) {
  const phoneInput = document.getElementById('phoneCount');
  const phoneCount = parseInt(phoneInput.value);
  let phoneNewCount = phoneCount;
  if(isIncrease == true) {
    phoneNewCount = phoneCount + 1
  }
  if(isIncrease == false && phoneNewCount > 0) {
    phoneNewCount = phoneCount - 1
  }
  phoneInput.value = phoneNewCount;
  const phoneTotal = (phoneNewCount * 200.20).toFixed(2);
  document.getElementById('phoneTotal').innerText = phoneTotal;
  calculateTotal()
}

function handleCaseChange(isIncrease) {
  const caseInput = document.getElementById('caseCount');
  const caseCount = parseInt(caseInput.value);
  let caseNewCount = caseCount;
  if(isIncrease == true) {
    caseNewCount = caseCount + 1
  }
  if(isIncrease == false && caseNewCount > 0) {
    caseNewCount = caseCount - 1
  }
  caseInput.value = caseNewCount;
  const caseTotal = (caseNewCount * 50.25).toFixed(2);
  document.getElementById('caseTotal').innerText = caseTotal;
  calculateTotal()
}

// calculate
function calculateTotal() {
  const phoneInput = document.getElementById('phoneCount');
  const phoneCount = parseInt(phoneInput.value)

  const caseInput = document.getElementById('caseCount');
  const caseCount = parseInt(caseInput.value);

  // sub total
  const subTotalPrice = parseFloat((phoneCount * 200.20 + caseCount * 50).toFixed(2));
  document.getElementById('subTotal').innerText = subTotalPrice;
  // note: toFixed() always return a string

  // tax
  const totalTax = parseFloat((subTotalPrice * 0.1).toFixed(2));
  document.getElementById('tax').innerText = totalTax;

  // grand total
  const grandTotal = parseFloat((subTotalPrice + totalTax).toFixed(2));
  document.getElementById('total').innerText = grandTotal;
}

