import initDropdown from "./modules/dropdown";
import initFuncionamento from "./modules/funcionamento";
import initMenuMobile from "./modules/menu-mobile";
import initAnimacaoScroll from "./modules/scroll-animacao";

import SmoothScroll from "./modules/smooth-scroll";
import Accordion from "./modules/accordion";
import TabNav from "./modules/tabNav";
import Modal from "./modules/modal";
import Tooltip from "./modules/tooltip";

import fetchAnimals from "./modules/fetch-animais";
import fetchBitcoin from "./modules/fetch-bitcoin";

const smoothScroll = new SmoothScroll("[data-menu='smooth'] a[href^='#']");
const accordion = new Accordion("[data-anime='accordion'] dt");
const tabNav = new TabNav("[data-tab='menu'] li", "[data-tab='content'] section");
const modal = new Modal("[data-modal='open']", "[data-modal='close']", "[data-modal='container']");
const tooltip = new Tooltip("[data-tooltip]");

smoothScroll.init();
accordion.init();
tabNav.init();
modal.init();
tooltip.init();

initDropdown();
initFuncionamento();
initMenuMobile();
initAnimacaoScroll();

fetchAnimals("../../animaisapi.json", ".numeros-grid");
fetchBitcoin("https://www.blockchain.com/ticker", ".btc-preco");
