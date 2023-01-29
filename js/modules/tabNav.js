export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  const activeClass = "ativo";

  function activeTab(index) {
    const direction = tabContent[index].dataset.anime;

    tabContent.forEach((section) => {
      section.classList.remove(activeClass, direction);
    });
    tabContent[index].classList.add(activeClass, direction);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass, tabContent[0].dataset.anime);

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
