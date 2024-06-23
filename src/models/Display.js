
// Class Display

class Display {
    constructor(displayBefore, displayNow) {
        this.displayBefore = displayBefore;
        this.displayNow = displayNow;
        this.calculator = new Calculator();
        this.typeOperation = undefined;
        this.valueNow = '';
        this.valueBefore = '';
        this.sings = {
            addition: '+',
            subtraction: '-',
            multiplication: '*',
            division: '÷',
            percentage: '%'
        }
    };
    delete() {
        this.valueNow = this.valueNow.toString().slice(0,-1);
        this.printValue()
    };
    deleteAll() {
        this.valueNow = '';
        this.valueBefore = '';
        this.typeOperation = undefined;
        this.printValue();
    };
    computar(type) {
        this.typeOperation !== 'equal' && this.calculate();      
        this.typeOperation = type;
        this.valueBefore = this.valueNow || this.valueBefore;
        this.valueNow = '';
        this.printValue()
    };
    addNumber(number) {
        if(number === '.' && this.valueNow.includes('.')) return
        this.valueNow = this.valueNow.toString() + number.toString(); 
        this.printValue();
    };
    printValue() {
        this.displayNow.textContent = this.valueNow;
        this.displayBefore.textContent = `${this.valueBefore} ${this.sings[this.typeOperation] || ''}`;
    };
    calculate() {
        const valueBefore = parseFloat(this.valueBefore);
        const valueNow = parseFloat(this.valueNow);

        if(isNaN(valueNow) || isNaN(valueBefore) ) return 
        this.valueNow = this.calculator[this.typeOperation](valueBefore, valueNow ).toString(); 
    };
}