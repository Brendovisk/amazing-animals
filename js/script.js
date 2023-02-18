import SmoothScroll from "./modules/smooth-scroll";
import Accordion from "./modules/accordion";
import TabNav from "./modules/tabNav";
import Modal from "./modules/modal";
import Tooltip from "./modules/tooltip";
import ScrollAnimation from "./modules/scroll-animation";
import Dropdown from "./modules/dropdown";
import MenuMobile from "./modules/menu-mobile";
import BusinessHours from "./modules/business-hours";
import { SlideNav } from "./modules/slide";

import fetchAnimals from "./modules/fetch-animais";
import fetchBitcoin from "./modules/fetch-bitcoin";

const smoothScroll = new SmoothScroll("[data-menu='smooth'] a[href^='#']");
const accordion = new Accordion("[data-anime='accordion'] dt");
const tabNav = new TabNav("[data-tab='menu'] li", "[data-tab='content'] section");
const modal = new Modal("[data-modal='open']", "[data-modal='close']", "[data-modal='container']");
const tooltip = new Tooltip("[data-tooltip]");
const scrollAnimation = new ScrollAnimation("[data-anime='scroll']");
const dropdown = new Dropdown("[data-dropdown]");
const menuMobile = new MenuMobile("[data-menu='button']", "[data-menu='list']");
const businessHours = new BusinessHours("[data-semana]", "aberto");
const slide = new SlideNav(".slide", ".slide-wrapper");

smoothScroll.init();
accordion.init();
tabNav.init();
modal.init();
tooltip.init();
scrollAnimation.init();
dropdown.init();
menuMobile.init();
businessHours.init();
slide.init();
slide.addControl(".custom-controls");

fetchAnimals("../animaisapi.json", ".numeros-grid");
fetchBitcoin("https://www.blockchain.com/ticker", ".btc-preco");
