export default function initModal() {
  const containerModal = document.querySelector("[data-modal='container']");
  const botaoAbrir = document.querySelector("[data-modal='abrir']");
  const botaoFechar = document.querySelector("[data-modal='fechar']");

  function toggleModal(e) {
    e.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function clickForaModal(e) {
    if (e.target === this) toggleModal(e);
  }

  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickForaModal);
  }
}
