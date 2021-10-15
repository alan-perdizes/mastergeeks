(function() {
  const page = document.querySelector(":root")
  // let hue = 0;

  // setInterval(() => {
  //   page.style.setProperty('--color-background', hue)
  //   hue++
  // }, 50)

  const valueBlur = document.querySelector('#value-blur')
  const valueBrightness = document.querySelector('#value-brightness')

  const buttonsEffects = document.querySelectorAll('.menu-effects-list li')
  
  const imagePreview = document.querySelector('#image-preview')
  const imageFilePreview = document.querySelector('#image-file-preview')

  let buttonEffectAtive = ""

  function stateDisplayEffects(enable = false) {
     document
        .querySelector(buttonEffectAtive.getAttribute("data-target"))
        .style.display = enable ? 'block' : 'none' // If ternário
  }

  imageFilePreview.addEventListener('change', (e) => {
    const [file] = e.target.files
    if (file)
      imagePreview.src = URL.createObjectURL(file)
  })

  buttonsEffects.forEach( button => {
    
    if(button.classList.contains("menu-effects-list-active")) {
      buttonEffectAtive = button
    }

    button.addEventListener('click', (e) => {
      // Mudando o painel de ajuste
      stateDisplayEffects()

      // Alterando o foco do botão
      buttonEffectAtive.classList.remove("menu-effects-list-active")
      button.classList.add("menu-effects-list-active")
      buttonEffectAtive = button

      stateDisplayEffects(true)
    })
  })

  valueBlur.addEventListener('change', (e) => {
    page.style.setProperty('--value-blur', `${valueBlur.value}px`)
  })

  valueBrightness.addEventListener('change', (e) => {
    page.style.setProperty('--value-brightness', `${valueBrightness.value}%`)
  })
})()