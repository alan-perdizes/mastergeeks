(function () {
  const counter = document.querySelector("#counter")
  const button = document.querySelector("#button-counter")
  const viewCounter = document.querySelector("#view-counter")

  let time = 0

  button.addEventListener('click', (event) => {
    
    time = parseInt(counter.value)
    
    if(time === 0) {
      alert("Digite um número maior que 0")
      return
    }
    
    button.setAttribute("disabled", "")

    setInterval(() => {
      if(time >= 0) {
        viewCounter.innerHTML = time
        time = time - 1
      } else {
        button.removeAttribute("disabled")
        clearInterval()
      }
    }, 1000);
  })
})()