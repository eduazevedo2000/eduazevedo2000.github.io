'use scrict'

let backgroundLeft = document.getElementById('left')
let backgroundRight = document.getElementById('right')
let devName = document.getElementById('name')
let toggle = document.querySelector('button')

let switchTheme = () => {
  if (toggle.innerText === 'Dark') {
    devName.style.color = 'white'
    backgroundLeft.style.backgroundColor = 'black'
    backgroundRight.style.backgroundColor = 'black'
    backgroundLeft.style.color = 'white'
    backgroundRight.style.color = 'white'
    toggle.innerText = 'Light'
  } else if (toggle.innerText === 'Light') {
    devName.style.color = ''
    backgroundLeft.style.backgroundColor = ''
    backgroundRight.style.backgroundColor = ''
    backgroundLeft.style.color = ''
    backgroundRight.style.color = ''
    toggle.innerText = 'Dark'
  }
}

toggle.addEventListener('click', switchTheme)
