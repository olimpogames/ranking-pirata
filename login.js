function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  const msg = document.getElementById("msg");

  const USER_OK = "admin";
  const PASS_OK = "1234";

  if (user === USER_OK && pass === PASS_OK) {
    msg.style.color = "green";
    msg.innerText = "Acceso permitido...";

    // 👉 Abrir ambas pestañas
    window.open("pagina1.html", "_blank");
    window.open("pagina2.html", "_blank");

  } else {
    msg.style.color = "red";
    msg.innerText = "Usuario o contraseña incorrectos";
  }
}

