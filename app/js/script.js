const body = document.querySelector("body")

const darkButton = document.getElementById("dark")
const lightButton = document.getElementById("light")

const setDarkMode = () => {
  body.classList = "dark"
}

const setLightMode = () => {
  body.classList = "light"
}

const radioButtons = document.querySelectorAll(".toggle__wrapper input")

radioButtons.forEach((button) => {
  button.onclick = () => {
    if (darkButton.checked) {
      localStorage.setItem("colorMode", "dark")
      setDarkMode()
    } else {
      localStorage.setItem("colorMode", "light")
      setLightMode()
    }
  }
})

const setPreferredMode = (
  event = window.matchMedia("(prefers-color-scheme: light)")
) => {
  if (event.matches) {
    lightButton.click()
  } else {
    darkButton.click()
  }
}

const setColorMode = () => {
  if (localStorage.getItem("colorMode") === "dark") {
    darkButton.click()
  } else if (localStorage.getItem("colorMode") === "light") {
    lightButton.click()
  } else {
    setPreferredMode()
  }
}

const checkModeChange = () => {
  window
    .matchMedia("(prefers-color-scheme: light)")
    .addEventListener("change", (event) => {
      setPreferredMode(event)
    })
}

setColorMode()
checkModeChange()
