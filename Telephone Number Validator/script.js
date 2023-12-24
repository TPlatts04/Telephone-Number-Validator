const checkBtn = document.getElementById('check-btn').addEventListener('click', () => {
  let input = document.getElementById('user-input')
  validateNumber(input.value);
  input.value = '';
})

const validateNumber = (input) => {
  if (input === ''){
    alert('Please provide a phone number')
    return;
  }
  const resultDiv = document.getElementById('results-div')
  const reg = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/
  
  const pTag = document.createElement('p')
  pTag.className = 'result';
  reg.test(input) ? (pTag.style.color = '#26580F') : (pTag.style.color = '#B80F0A')
  pTag.appendChild(document.createTextNode(`${reg.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`))
  resultDiv.appendChild(pTag)
}

const clearBtn = document.getElementById('clear-btn').addEventListener('click', () => {
  const resultDiv = document.getElementById('results-div');
  resultDiv.textContent = ""
})