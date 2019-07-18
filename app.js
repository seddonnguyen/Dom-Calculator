document.addEventListener("DOMContentLoaded", () => {

  let screen = document.querySelector("#screen")
  let clear = document.querySelector("#clear")
  let equal = document.querySelector("#equals")
  let spans = document.querySelectorAll("span")

  Array.from(spans).forEach(function(element) {

    element.addEventListener('click', () => {
      if (screen.innerText !== "Error" && element.innerText !== "="
        && element.innerText !== "÷" && element.innerText !== "x") {
          screen.innerText = screen.innerText.concat(element.innerText)
      } else if(element.innerText === "÷") {
          screen.innerText = screen.innerText.concat('/')
      } else if(element.innerText === "x") {
          screen.innerText = screen.innerText.concat('*')
      }
    })
  })

  equal.addEventListener('click', () => {
    try {
      screen.innerText = eval(screen.innerText)
      if(screen.innerText === "Infinity" || screen.innerText === "NaN") {
        screen.innerText = "Error"
      }
    } catch(error){
      screen.innerText = "Error"
    }

  })

  clear.addEventListener('click', () => {
    screen.innerText = ""
  })

})

