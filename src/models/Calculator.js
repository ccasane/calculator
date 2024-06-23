// Class Calculator

class Calculator {
    
    addition( num1, num2){
        return (num1 + num2);
    };

    subtraction( num1, num2 ) {
        return (num1 - num2);
    };

    multiplication( num1, num2) {
        return (num1 - num2);
    }

    division( num1, num2)  {
        num2 === 0 ? console.log('No se puede dividir entre 0') : ''

        return (num1 / num2);
    };

    percentage( num1, num2) {
        return (num1 % num2) 
    };
}