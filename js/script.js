const display = document.getElementById('display');
const allButtons = document.querySelectorAll('button');

allButtons.forEach((button) => {
    button.addEventListener('click', () => {

        const clickedValue = button.innerText;

        if (clickedValue === 'AC') {
            display.value = '';
        } 
        else if (clickedValue === '=') {
            try {
                let formattedExpression = display.value.replace(/%/g, '/100');
                
                let calculate = new Function('return ' + formattedExpression);
                display.value = calculate();
            } catch (error) {
                display.value = 'Error';
            }
        } 
        else {
            display.value = display.value + clickedValue;
        }
    });
});