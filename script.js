const btnMenu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

btnMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

const form = document.getElementById("form_contato");
const statusEnvio = document.getElementById("status_envio");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  if (!email.includes("@") || !email.includes(".")) {
    statusEnvio.innerText = "Por favor, insira um e-mail válido.";
    statusEnvio.style.color = "#ff6b6b";
    return;
  }

  statusEnvio.innerText = `Obrigado, ${nome}! Entraremos em contato em breve via ${email}.`;
  statusEnvio.style.color = "#ffd700";
  form.reset();
});
