//random generate pin create and display
document.getElementById('generate-pin').addEventListener('click', function(){
    const randomPin = Math.round(1000 + Math.random() * 9000)
    document.getElementById('generate-pin-display').value = randomPin;
})

// checking pin create and display
document.getElementById('calculator').addEventListener('click', function(event){
    const inputCatch = event.target.innerText;
    const checkingPin = document.getElementById('checking-pin');
    if(isNaN(inputCatch)){
        if(inputCatch === 'C'){
            checkingPin.value = '';
        }else if(inputCatch === '<'){
            const digits = checkingPin.value.split('');
            digits.pop();
            const newcheckingPin = digits.join('');
            checkingPin.value = newcheckingPin;
        }
    }else{
        const newInputCatch = checkingPin.value + inputCatch;
       if(checkingPin.value.length < 4){
        checkingPin.value = newInputCatch;
       }
    }
})

//matching generate pin and checking pin
document.getElementById('matching').addEventListener('click', function(){
   const generateFinalPin = document.getElementById('generate-pin-display').value
   const checkingFinalPin = document.getElementById('checking-pin').value

   if(generateFinalPin === checkingFinalPin){
    document.getElementById('failure-message').style.display = 'none';
    document.getElementById('success-message').style.display = 'block';
   }else{
    document.getElementById('failure-message').style.display = 'block';
    document.getElementById('success-message').style.display = 'none';
    const tryMessage = document.getElementById('try-message').innerText
    const tryMessageNum = parseInt(tryMessage);
    if(tryMessageNum > 0){
        document.getElementById('try-message').innerText = tryMessageNum - 1;
    }else if(tryMessageNum === 0){
       const submitBtn = document.getElementById('matching')
             submitBtn.disabled = true;
             submitBtn.style.backgroundColor = 'gray';
    }
   }
})