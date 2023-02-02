export default class Tooltip {
  constructor() {
    this.tooltips = document.querySelectorAll("[data-tooltip]");

    // object bind to callback
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Move the tooltip according to mouse's position
  onMouseMove(event) {
    if (event.pageX + 220 > window.innerWidth) {
      this.tooltipBox.style.left = "unset";
      this.tooltipBox.style.right = "20px";
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }

    this.tooltipBox.style.top = `${event.pageY + 20}px`;
  }

  // Remove the tooltip based on the mouseMove and mouseLeave
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // Create the tooltip and append that on the body
  createTooltip(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // Create the tooltip and add the mouseMove and mouseLeave to the target
  onMouseOver({ currentTarget }) {
    this.createTooltip(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  // Add the events when the user hover your mouse over the map
  addTooltipEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  // Initialize
  init() {
    if (this.tooltips.length) {
      this.addTooltipEvent();
    }
    return this;
  }
}
