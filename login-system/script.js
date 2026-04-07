function mostrarCadastro() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("cadastroBox").style.display = "block";
}

function mostrarLogin() {
  document.getElementById("loginBox").style.display = "block";
  document.getElementById("cadastroBox").style.display = "none";
}

function cadastrar() {
  const usuario = document.getElementById("cadUsuario").value;
  const senha = document.getElementById("cadSenha").value;
  const mensagem = document.getElementById("mensagem");

  if (usuario === "" || senha === "") {
    mensagem.textContent = "Preencha todos os campos!";
    mensagem.style.color = "red";
    return;
  }

  localStorage.setItem("usuario", usuario);
  localStorage.setItem("senha", senha);

  mensagem.textContent = "Cadastro realizado com sucesso!";
  mensagem.style.color = "lightgreen";

  mostrarLogin();
}

function login() {
  const usuario = document.getElementById("loginUsuario").value;
  const senha = document.getElementById("loginSenha").value;
  const mensagem = document.getElementById("mensagem");

  const usuarioSalvo = localStorage.getItem("usuario");
  const senhaSalva = localStorage.getItem("senha");

  if (usuario === usuarioSalvo && senha === senhaSalva) {
    mensagem.textContent = "Login realizado!";
    mensagem.style.color = "lightgreen";

    setTimeout(() => {
      window.location.href = "home.html";
    }, 1000);

  } else {
    mensagem.textContent = "Usuário ou senha incorretos.";
    mensagem.style.color = "red";
  }
}