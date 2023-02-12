import AnimateNumbers from "./animate-numbers";

export default function fetchAnimals(url, target) {
  const numerosGrid = document.querySelector(target);

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `
      <h3>${animal.especie}</h3>
      <span data-numero>${animal.total}</span>
    `;
    return div;
  }

  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animateAnimalNumbers() {
    const animateNumbers = new AnimateNumbers("[data-numero]", ".numeros", "ativo");
    animateNumbers.init();
  }

  async function createAnimals() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      animaisJson.forEach((animal) => fillAnimals(animal));
      animateAnimalNumbers();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  return createAnimals();
}
