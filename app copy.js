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
  }

  clear() {
    currentValueText.value = ""
  }

  delete() {
    currentValueText.value = currentValueText.value.slice(0, -1)
  }

  addNumber(number){
    currentValueText.value += number.trim()
  }

  checkDot(dot){
    if (currentValueText.value.includes('.')) {
      currentValueText.value += ''
    }
    else {
      currentValueText.value += dot.trim()
    }

    let valueInputArray = currentValueText.value.split('');
    let newArray = [];
    for (let i = 0; i < valueInputArray.length; i++) {
      newArray.push(valueInputArray[i]);
      if (newArray.includes('.') && newArray.lastIndexOf('.') != newArray.indexOf('.')) return false;
    }
    return true;
  }

  chooseOperation(operation) {
    currentValueText.value += operation.trim()
  }

  calculate() {
    currentValueText.value = eval(currentValueText.value)
  }

  render() {
  }
}
const calculatorObj = new calculatorMain(currentValueText)

numberBtns.forEach(number => {
  number.addEventListener('click', (e) => {
    calculatorObj.addNumber(number.value)
    // console.log(currentValueText.value);

  })
})

operationBtns.forEach(operation => {
  operation.addEventListener('click', (e) => {
    calculatorObj.addNumber(operation.value)
    // console.log(currentValueText.value);
  })
})
dotBtn.addEventListener('click', () => {
  calculatorObj.checkDot(dotBtn.value)
})

equalBtn.addEventListener('click', () => {
  calculatorObj.calculate()
})

clearBtn.addEventListener('click', () => {
  calculatorObj.clear()
})

deleteBtn.addEventListener('click', () => {
  calculatorObj.delete()
})

