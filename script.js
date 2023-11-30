document.addEventListener('DOMContentLoaded', function () {
  const loginBtn = document.getElementById('loginBtn')
  const loginModal = document.getElementById('loginModal')
  const closeBtn = document.getElementById('closeBtn')

  loginBtn.addEventListener('click', function () {
    loginModal.style.display = 'block'
  })

  closeBtn.addEventListener('click', function () {
    loginModal.style.display = 'none'
  })

  window.addEventListener('click', function (event) {
    if (event.target === loginModal) {
      loginModal.style.display = 'none'
    }
  })

  const loginSubmitBtn = document.getElementById('loginSubmitBtn')

  loginSubmitBtn.addEventListener('click', function () {
    const enteredUsername = document.getElementById('loginUsername').value
    const enteredPassword = document.getElementById('loginPassword').value

    // Check if the entered username and password are correct
    if (enteredUsername === 'sManager' && enteredPassword === '123') {
      // Redirect to the dashboard page
      window.location.href = 'ui-elements.html'
    } else {
      // Display an error message (you can customize this part)
      alert('Invalid username or password. Please try again.')
    }
  })
})
