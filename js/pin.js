function getPin(){
    const randomPin = generatePin();
    const pin = randomPin + '';
    if(pin.length === 4){
        return pin;
    }
    else{
        // console.log('3 digit pin found'+pin);
        return getPin();
    }
}

function generatePin (){
    const random = Math.round(Math.random()*10000)
    return random;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
    const pinField = document.getElementById('display-pinField');
    pinField.value = pin;
})

document.getElementById('numbers').addEventListener('click',function(event){
    const digitInputField = document.getElementById('digit-input-Field');
    const digit = event.target.innerText;
    if(isNaN(digit)){
        if(digit === 'C'){
            digitInputField.value = '';
        }
        else if(digit === '<'){
            const previousInput = digitInputField.value.split('');
            previousInput.pop();
            const digit = previousInput.join('');
            digitInputField.value = digit;
        }
    }
    else{
        const previousInput = digitInputField.value;
        const newInput = previousInput + digit;
        digitInputField.value = newInput;
    }
})

document.getElementById('btn-verify').addEventListener('click',function(){
    const notifySuccess = document.getElementById('notify-success');
    const notifyFailure = document.getElementById('notify-failure');

    const displayPinField = document.getElementById('display-pinField');
    const displayPin = displayPinField.value;

    const digitInputField = document.getElementById('digit-input-Field');
    const digitInput = digitInputField.value;

    if(displayPin === digitInput){
        notifyFailure.style.display = 'none';
        notifySuccess.style.display = 'block';
    }
    else{
        notifySuccess.style.display = 'none';
        notifyFailure.style.display = 'block';
    }
})
