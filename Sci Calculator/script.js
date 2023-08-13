
const calculatorScreen = document.getElementById('screen');
const calculatorButtons = document.querySelectorAll('.btn');


const handleClick = (event) => {
    const button = event.target; 
    console.log(`Button clicked: ${button.innerText}`);
    let buttonText = button.innerText;
    console.log(`Button text: ${buttonText}`);
    if(buttonText == 'x'){
        buttonText = '*';
    }
    if(buttonText == '÷'){
        buttonText = '/';
    }
   
    
   
    calculatorScreen.value += buttonText;
};

function sin(){
    calculatorScreen.value = Math.sin( calculatorScreen.value);
}
function cos(){
    calculatorScreen.value = Math.cos( calculatorScreen.value);
}

function tan(){
    calculatorScreen.value = Math.tan( calculatorScreen.value);
}
function expo(){
    calculatorScreen.value = Math.pow( calculatorScreen.value,2);
}
function sqrt(){
    calculatorScreen.value = Math.sqrt( calculatorScreen.value);
}
function backspc(){
    calculatorScreen.value = calculatorScreen.value.substr(0,calculatorScreen.value.length -1);
}



calculatorButtons.forEach(button => {
    button.addEventListener('click', handleClick);
});

