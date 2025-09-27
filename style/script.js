

    const btn = document.getElementById("modo-btn");

    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      
      if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "☀️ Modo claro";
      } else {
        btn.textContent = "🌙 Modo oscuro";
      }
    });
 