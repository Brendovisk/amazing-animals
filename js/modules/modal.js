export default class Modal {
  constructor(btnOpen, btnClose, container) {
    this.btnOpen = document.querySelector(btnOpen);
    this.btnClose = document.querySelector(btnClose);
    this.containerModal = document.querySelector(container);

    // bind this to make reference to class object
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
  }

  clickOutsideModal(e) {
    if (e.target === this.containerModal) this.toggleModal(e);
  }

  toggleModal() {
    this.containerModal.classList.toggle("active");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  handleEvent() {
    this.btnOpen.addEventListener("click", this.eventToggleModal);
    this.btnClose.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.clickOutsideModal);
  }

  init() {
    if (this.btnOpen && this.btnClose && this.containerModal) {
      this.handleEvent();
    }
    return this;
  }
}
