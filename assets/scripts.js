;(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const email = searchParams.get('email')
    console.log(email)
    const domEmail = document.querySelector('[data-email]')
    console.log(domEmail)
  
    if(domEmail) {
      domEmail.textContent = 'Thank you for your subscribing ' + email + '.'
    }
  })()