const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const currentValueText = $('.current')
const preValueText = $('.previous')
const numberBtns = $$('.btn-number')
const operationBtns = $$('.btn-operation')
const clearBtn = $('.btn-clear')
const deleteBtn = $('.btn-delete')
const equalBtn = $('.btn-equal')

class calculatorMain {
  constructor(currentValueText, preValueText) {
    this.currentValueText = currentValueText
    this.preValueText = preValueText
    this.clear()
  }

  clear() {
    this.currentValue = ""
    this.preValue = ""
    this.operation = ""
  }

  delete() {
    this.currentValue = this.currentValue.slice(0, -1)
  }

  addNumber(number) {
    if (number === '.' && this.currentValue.includes('.')) return
    this.currentValue +=  number
  }

  chooseOperation(operation) {
    if (this.currentValue === "") return
    if (this.preValue !== "") {
      this.calculate()
    }
    this.operation = operation
    this.preValue = this.currentValue
    this.currentValue = ""
  }

  calculate() {
    let result
    let prev = parseFloat(this.preValue)
    let current = parseFloat(this.currentValue)
    if (isNaN(prev) || isNaN(current)) return
    result = eval(`${prev} ${this.operation} ${current}`)
    if (result === Infinity) {
      this.currentValue = "Not a number"
    } else {
      this.currentValue = result
    }
    this.operation = ""
    this.preValue = ""
  }

  render() {
    this.currentValueText.innerText = this.currentValue.toLocaleString()
    if (this.operation != null) {
      this.preValueText.innerText = `${(this.preValue)} ${this.operation}`
    }
    else {
      this.preValueText.innerText = ""
    }
  }
}
const calculatorObj = new calculatorMain(currentValueText, preValueText)

numberBtns.forEach(number => {
  number.addEventListener('click', () => {
    calculatorObj.addNumber(number.innerHTML)
    calculatorObj.render()
  })
})
operationBtns.forEach( operation => {
  operation.addEventListener('click', () => {
    calculatorObj.chooseOperation(operation.innerHTML)
    calculatorObj.render()
  })
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
// type keyboard
document.addEventListener('keydown', e => {
  if ((e.keyCode >= 48 && e.keyCode <= 57 && !e.shiftKey)) {
    calculatorObj.addNumber(e.key)
    calculatorObj.render()
  }
  if (e.keyCode == 188 || (e.keyCode == 190 && !e.shiftKey)) {
    calculatorObj.addNumber(".")
    calculatorObj.render()
  }
  if ((e.keyCode == 189 && !e.shiftKey ) || ( e.keyCode == 187 && e.shiftKey ) || ( e.keyCode == 56 && e.shiftKey ) || ( e.keyCode == 191 && !e.shiftKey )) {
    calculatorObj.chooseOperation(e.key)
    calculatorObj.render()
  }
  if (e.keyCode == 13) {
    calculatorObj.calculate()
    calculatorObj.render()
  }
  if (e.keyCode == 8) {
    calculatorObj.delete()
    calculatorObj.render()
  }
  if (e.keyCode == 27) {
    calculatorObj.clear()
    calculatorObj.render()
  }
})
// nhap focus
// nhap = ban phim--done
// so thuc float--done
// infinity--done
// ()
// ghi de phep tinh


function anc() {
  let date = new Date();
  let abc = date.toString()
  let divItem = document.querySelector('.time')
  divItem.innerHTML = abc.slice(16,21);
}
anc()
setInterval(anc, 1000)


