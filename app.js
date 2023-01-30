function anc() {
    let date = new Date();
    let abc = date.toString()
    let divItem = document.querySelector('.time')
    divItem.innerHTML = abc.slice(16,21);
  }
  anc()
  setInterval(anc, 1000)


const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const currentValueText = $('.screen_input')
const numberBtns = $$('.btn-number')
const operationBtns = $$('.btn-operation')
const clearBtn = $('.btn-clear')
const deleteBtn = $('.btn-delete')
const equalBtn = $('.btn-equal')
const dotBtn = $('.btn-dot')

class calculatorMain {
  constructor(currentValueText) {
    this.currentValueText = currentValueText
    this.clear()
  }

  clear() {
    this.currentValue = ""
  }

  delete() {
    this.currentValue = this.currentValue.slice(0, -1)
  }

  addNumber(number){
    this.currentValueText += number.trim()
    console.log(this.currentValueText)
  }

  // checkDot(dot){
  //   if (currentValueText.value.includes('.')) {
  //     currentValueText.value += ''
  //   }
  //   else {
  //     currentValueText.value += dot.trim()
  //   }

  //   let valueInputArray = currentValueText.value.split('');
  //   let newArray = [];
  //   for (let i = 0; i < valueInputArray.length; i++) {
  //     newArray.push(valueInputArray[i]);
  //     if (newArray.includes('.') && newArray.lastIndexOf('.') != newArray.indexOf('.')) return false;
  //   }
  //   return true;
  // }

  chooseOperation(operation) {
    this.currentValueText += operation.trim()
  }

  calculate() {
    this.currentValueText = eval(currentValueText)
    console.log(this.currentValueText);
  }

  render() {
    this.currentValueText.innerHTML = this.currentValue.toLocaleString()
  }
}
const calculatorObj = new calculatorMain(currentValueText)

numberBtns.forEach(number => {
  number.addEventListener('click', (e) => {
    calculatorObj.addNumber(number.value)
    // calculatorObj.render()
    // console.log(currentValueText.value);

  })
})

operationBtns.forEach(operation => {
  operation.addEventListener('click', (e) => {
    calculatorObj.addNumber(operation.value)
    calculatorObj.render()
    // console.log(currentValueText.value);
  })
})
dotBtn.addEventListener('click', () => {
  calculatorObj.checkDot(dotBtn.value)
})

equalBtn.addEventListener('click', () => {
  calculatorObj.calculate()
  calculatorObj.render()
})

clearBtn.addEventListener('click', () => {
  calculatorObj.clear()
  calculatorObj.render()
})

deleteBtn.addEventListener('click', () => {
  calculatorObj.delete()
  calculatorObj.render()
})

