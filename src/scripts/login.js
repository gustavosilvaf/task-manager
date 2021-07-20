$('#login-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const [name, email, url] = event.target;

  const isValid = (name, email) => name && email;

  if (!isValid(name.value, email.value))
    return alert('Nome ou email inserido incorreto')

  const user = {
    name: name.value,
    email: email.value,
    url: url.value
  }

  if (window.confirm(`Por favor, confirme seu email: ${email.value}`)) {
    localStorage.setItem('user', JSON.stringify(user));
    location.assign('/index.html')
  }
})