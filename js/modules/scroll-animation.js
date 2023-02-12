export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowHeight = window.innerHeight * 0.75;
    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.windowHeight < 0;

      if (isSectionVisible) section.classList.add("ativo");
      else if (section.classList.contains("ativo")) section.classList.remove("ativo");
    });
  }

  init() {
    if (this.sections.length) {
      this.animaScroll();
      window.addEventListener("scroll", this.animaScroll);
    }
    return this;
  }
}
