function myFunction(x) {
  x.classList.toggle("change");
  var navigation = x.nextElementSibling;
  navigation.style.display = x.classList.contains("change") ? "block" : "none";
  document.addEventListener("click", function(event) {
    if (!x.contains(event.target) && !navigation.contains(event.target)) {
      x.classList.remove("change");
      navigation.style.display = "none";
    }
  });
}

const menuToggle = document.getElementById('menu-toggle')

menuToggle.addEventListener('click', function() {  
  document.getElementById('nav-menu').classList.toggle('active');  
});  


function hideSidebar() {
  document.getElementById('nav-menu').classList.toggle('active');  

}




const logAdmin = document.getElementById('login-admin')


const password = '360admin'
const mainBody = document.getElementById('main-body')
const submitLog = document.getElementById('submit-log')
const bodyWrap = document.getElementById('body-wrap')



submitLog.addEventListener('click', (e) => {
  e.preventDefault()
  const passwordValue = document.getElementById('password').value.trim()
  if(passwordValue === password) {
    submitLog.innerHTML = 'Sucess'

    setTimeout(function() {
      logAdmin.style.display = 'none'
      mainBody.style.display = 'flex'
      submitLog.innerHTML = 'Login'
      bodyWrap.style.display = 'none'
    }, )
  } else {
    console.log('not working')
  }
})

