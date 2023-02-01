export default class TabNav {
  constructor(tabmenu, tabcontent) {
    this.tabMenu = document.querySelectorAll(tabmenu);
    this.tabContent = document.querySelectorAll(tabcontent);
    this.activeClass = "active";
  }

  // Activate the tab according to the index
  activeTab(index) {
    const direction = this.tabContent[index].dataset.anime;

    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass, direction);
    });
    this.tabContent[index].classList.add(this.activeClass, direction);
  }

  // Add the events on the tab
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // Activate the first item
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}
