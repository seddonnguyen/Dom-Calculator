document.addEventListener("DOMContentLoaded", () => {


  let screen = document.querySelector("#screen")
  let clear = document.querySelector("#clear")
  let equal = document.querySelector("#equals")

  let zero = document.querySelector("#zero")
  let one = document.querySelector("span:nth-Child(12)")
  let two = document.querySelector("span:nth-Child(13)")
  let three = document.querySelector("span:nth-Child(14)")
  let four = document.querySelector("span:nth-Child(8)")
  let five = document.querySelector("span:nth-Child(9)")
  let six = document.querySelector("span:nth-Child(10)")
  let seven = document.querySelector("span:nth-Child(4)")
  let eight = document.querySelector("span:nth-Child(5)")
  let nine = document.querySelector("span:nth-Child(6)")

  let divide = document.querySelector("span:nth-Child(2)")
  let multiply = document.querySelector("span:nth-Child(3)")
  let subtract = document.querySelector("span:nth-Child(7)")
  let add = document.querySelector(".operator:nth-Child(11)")

  equal.addEventListener('click', () => {
    try {
      let i = eval(screen.innerText)
        screen.innerText = i

        if(screen.innerText === "Infinity" ||screen.innerText === "NaN" ) {
          screen.innerText = "Error"
        }
    } catch {
      screen.innerText = "Error"
    }
  })

  clear.addEventListener('click', () => {
    screen.innerText = ""
  })

  zero.addEventListener('click', () => {
    if (screen.innerText != "Error") {
      screen.innerText = screen.innerText.concat(zero.innerText)
    }

  })

  one.addEventListener('click', () => {
    if (screen.innerText != "Error") {
      screen.innerText = screen.innerText.concat(one.innerText)
    }
  })

  two.addEventListener('click', () => {
    if (screen.innerText != "Error") {
      screen.innerText = screen.innerText.concat(two.innerText)
    }
  })

  three.addEventListener('click', () => {
    if (screen.innerText != "Error") {
      screen.innerText = screen.innerText.concat(three.innerText)
    }
  })

  four.addEventListener('click', () => {
    if (screen.innerText != "Error") {
      screen.innerText = screen.innerText.concat(four.innerText)
    }
  })

  five.addEventListener('click', () => {
    if (screen.innerText != "Error") {
      screen.innerText = screen.innerText.concat(five.innerText)
    }
  })

  six.addEventListener('click', () => {
    if (screen.innerText != "Error") {
      screen.innerText = screen.innerText.concat(six.innerText)
    }
  })

  seven.addEventListener('click', () => {
    if (screen.innerText != "Error") {
      screen.innerText = screen.innerText.concat(seven.innerText)
    }
  })

  eight.addEventListener('click', () => {
    if (screen.innerText != "Error") {
      screen.innerText = screen.innerText.concat(eight.innerText)
    }
  })

  nine.addEventListener('click', () => {
    if (screen.innerText != "Error") {
      screen.innerText = screen.innerText.concat(nine.innerText)
    }
  })

  divide.addEventListener('click', () => {
    if (screen.innerText != "Error") {
      screen.innerText = screen.innerText.concat('/')
    }
  })

  multiply.addEventListener('click', () => {
    if (screen.innerText != "Error") {
      screen.innerText = screen.innerText.concat('*')
    }
  })

  subtract.addEventListener('click', () => {
    if (screen.innerText != "Error") {
      screen.innerText = screen.innerText.concat('-')
    }
  })

  add.addEventListener('click', () => {
    if (screen.innerText != "Error") {
      screen.innerText = screen.innerText.concat('+')
    }
  })
})

