
// let logged = 0

// window.onload = () => {

//   localStorage.getItem('log')
  
//   digit = parseInt(localStorage.getItem('log'))
  
//   if(digit) {
//     logAdmin.style.display = 'none'
//     bodyWrap.style.display = 'none'
//     mainBody.style.display = 'flex'
//   }
// }
// const password = '360admin'

// const mainBody = document.getElementById('main-body')
// const submitLog = document.getElementById('submit-log')
// const bodyWrap = document.getElementById('body-wrap')

// submitLog.addEventListener('click', (e) => {
// e.preventDefault()
// const passwordValue = '360admin'
// if(passwordValue) {
//   if(passwordValue === password) {
//     logged = 1
//     localStorage.setItem('log', logged)
//     submitLog.innerHTML = 'Success'

//     setTimeout(function() {
//       logAdmin.style.display = 'none'
//       mainBody.style.display = 'flex'
//       submitLog.innerHTML = 'Login'
//       bodyWrap.style.display = 'none'
//     }, 1000 )
//   } else {
//   alert('Incorrect Password')
//   }
// }
// })

let count = 0

const counterElement = document.getElementById('aa')

const intervalId = setInterval(() => {
  count++;
  counterElement.textContent = count;

  if (count >= 28) {
    clearInterval(intervalId)
  }
}, 50)