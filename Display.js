class Display {
  constructor(displayPreviousValue, displayActualValue) {
    this.displayActualValue = displayActualValue;
    this.displayPreviousValue = displayPreviousValue;
    this.calculator = new Calculator();
    this.operationType = undefined;
    this.actualValue = "";
    this.previousValue = "";
    this.operators = {
      addition: "+",
      division: "/",
      multiplication: "x",
      subtraction: "-",
    };
  }

  delete() {
    this.actualValue = this.actualValue.toString().slice(0, -1);
    this.printValues();
  }

  deleteAll() {
    this.actualValue = "";
    this.previousValue = "";
    this.operationType = undefined;
    this.printValues();
  }

  operate(type) {
    this.operationType !== "equal" && this.calculate();
    this.operationType = type;
    this.previousValue = this.actualValue || this.previousValue;
    this.actualValue = "";
    this.printValues();
  }

  addNumber(number) {
    if (number === "." && this.actualValue.includes(".")) return;
    this.actualValue = this.actualValue.toString() + number.toString();
    this.printValues();
  }

  printValues() {
    this.displayActualValue.textContent = this.actualValue;
    this.displayPreviousValue.textContent = `${this.previousValue} ${
      this.operators[this.operationType] || ""
    }`;
  }

  calculate() {
    const previousValue = parseFloat(this.previousValue);
    const actualValue = parseFloat(this.actualValue);

    if (isNaN(actualValue) || isNaN(previousValue)) return;
    this.actualValue = this.calculator[this.operationType](
      previousValue,
      actualValue
    );
    if (this.actualValue.toString().includes(".")){
        this.actualValue = parseFloat(this.actualValue).toFixed(4);
    }
      
  }
}
