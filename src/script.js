    document.addEventListener("DOMContentLoaded", function (){
                
        const display = document.getElementById('cal-display');
        const buttons = document.getElementsByClassName('btn');
        let operator = null;
        
        let currentValue = "";
        function evaluateResult(){
            console.log('currentValue:', currentValue)
            const convertedValue = currentValue
            .replace("×", "*")
            .replace("÷", "/")
            .replace("%", "*0.01")
            .replace('sin','Math.sin')
            .replace('cos','Math.cos')
            .replace('ln','Math.log')
            .replace('π','Math.PI')
            .replace('log','Math.log10')
            .replace('e','Math.E')
            .replace('tan','Math.tan')
            .replace('√','Math.sqrt');

            console.log('convertedValue:', convertedValue)
            const result = eval(convertedValue);
            currentValue = result.toString();
            display.value = currentValue;
        }
        function clearCalculator(){
            currentValue = "";
            display.value = currentValue;
        }
        function deleteLast() {
            currentValue = currentValue.slice(0, -1);
            display.value = currentValue;
        }

        for (let i = 0; i < buttons.length; i++){
            const button = buttons[i];
            button.addEventListener('click', function (){
                const value = button.innerText;
                
                

                    if (value == "AC"){
                        currentValue = "";
                        display.value = currentValue;
                    }else if(value == "="){
                        evaluateResult();
                    }  else if (value === "C") {
                        clearCalculator(); // Handle clear
                    } else if (value === "Del") {
                        deleteLast(); // Handle delete
                    } else{
                        currentValue += value;
                        //  console.log('currentValue:', currentValue);
                        display.value = currentValue;
                    }
                
            
            })
        }
    });
