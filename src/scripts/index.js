window.onload = function () {
  let user = localStorage.getItem("user");
  if (!user) {
    location.assign('/src/pages/login.html');
    alert('Usuário não logado, redirecionando para registro!')
  }
}