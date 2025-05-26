document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Exemplo de verificação simples (substituir por autenticação real)
    if (email === "admin@example.com" && password === "admin123") {
      window.location.href = "admin-dashboard.html"; // redireciona para o painel
    } else {
      document.getElementById("error-message").textContent = "Credenciais inválidas.";
    }
  });
    