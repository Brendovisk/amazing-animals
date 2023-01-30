import initAnimaNumeros from "./modules/anima-numeros";
import initAccordion from "./modules/accordion";
import initDropdown from "./modules/dropdown";
import initFetchAnimais from "./modules/fetch-animais";
import initFetchBitcoin from "./modules/fetch-bitcoin";
import initFuncionamento from "./modules/funcionamento";
import initMenuMobile from "./modules/menu-mobile";
import initModal from "./modules/modal";
import initAnimacaoScroll from "./modules/scroll-animacao";
import SmoothScroll from "./modules/smooth-scroll";
import initTabNav from "./modules/tabNav";
import initTooltip from "./modules/tooltip";

const smoothScroll = new SmoothScroll("[data-menu='smooth'] a[href^='#']");
smoothScroll.init();

initAccordion();
initDropdown();
initAnimaNumeros();
initFetchAnimais();
initFetchBitcoin();
initFuncionamento();
initMenuMobile();
initModal();
initAnimacaoScroll();
initTabNav();
initTooltip();
