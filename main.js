/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\n  const accordionList = document.querySelectorAll(\"[data-anime='accordion'] dt\");\n  const activeClass = \"ativo\";\n\n  function activeAccordion() {\n    this.classList.toggle(activeClass);\n    this.nextElementSibling.classList.toggle(activeClass);\n  }\n\n  if (accordionList.length) {\n    accordionList[0].classList.add(activeClass);\n    accordionList[0].nextElementSibling.classList.add(activeClass);\n\n    accordionList.forEach((item) => {\n      item.addEventListener(\"click\", activeAccordion);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\n  function animaNumeros() {\n    const numeros = document.querySelectorAll(\"[data-numero]\");\n\n    numeros.forEach((numero) => {\n      const total = +numero.innerText;\n      const incremento = Math.floor(total / 100);\n      let start = 0;\n\n      const timer = setInterval(() => {\n        start += incremento;\n        numero.innerText = start;\n        if (start > total) {\n          numero.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    });\n  }\n\n  let observer;\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains(\"ativo\")) {\n      observer.disconnect();\n      animaNumeros();\n    }\n  }\n\n  observer = new MutationObserver(handleMutation);\n  const observerTarget = document.querySelector(\".numeros\");\n  observer.observe(observerTarget, { attributes: true });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/dropdown.js":
/*!********************************!*\
  !*** ./js/modules/dropdown.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdown)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\n\nfunction initDropdown() {\n  const dropdownMenus = document.querySelectorAll(\"[data-dropdown]\");\n\n  function handleClick(event) {\n    event.preventDefault();\n    this.classList.add(\"active\");\n    (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, [\"touchstart\", \"click\"], () => {\n      this.classList.remove(\"active\");\n    });\n  }\n\n  dropdownMenus.forEach((menu) => {\n    [\"touchstart\", \"click\"].forEach((userEvent) => {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropdown.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\n\nfunction initFetchAnimais() {\n  function createAnimal(animal) {\n    const div = document.createElement(\"div\");\n    div.classList.add(\"numero-animal\");\n    div.innerHTML = `\n      <h3>${animal.especie}</h3>\n      <span data-numero>${animal.total}</span>\n    `;\n    return div;\n  }\n\n  async function fetchAnimais(url) {\n    try {\n      const animaisResponse = await fetch(url);\n      const animaisJson = await animaisResponse.json();\n      const numerosGrid = document.querySelector(\".numeros-grid\");\n\n      animaisJson.forEach((animal) => {\n        const divAnimal = createAnimal(animal);\n        numerosGrid.appendChild(divAnimal);\n      });\n      (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    } catch (error) {\n      // eslint-disable-next-line no-console\n      console.log(error);\n    }\n  }\n\n  fetchAnimais(\"./animaisapi.json\");\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ e)\n/* harmony export */ });\nfunction e() {\n  async function fetchBtc() {\n    try {\n      const btcResponse = await fetch(\"https://www.blockchain.com/ticker\");\n      const btcValues = await btcResponse.json();\n      const donateRealValue = 100;\n      const btcBRLDonate = (donateRealValue / btcValues.BRL.buy).toFixed(5);\n      const btcPreco = document.querySelector(\".btc-preco\");\n\n      btcPreco.innerText = btcBRLDonate;\n    } catch (error) {\n      // eslint-disable-next-line no-console\n      console.log(error);\n    }\n  }\n\n  fetchBtc();\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  const funcionamento = document.querySelector(\"[data-semana]\");\n  const diasSemana = funcionamento.dataset.semana.split(\",\").map(Number);\n  const horarioSemana = funcionamento.dataset.horario.split(\",\").map(Number);\n  const dataAgora = new Date();\n  const diaAgora = dataAgora.getDay();\n  const horarioAgora = dataAgora.getHours();\n  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\n  const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\n\n  if (semanaAberto && horarioAberto) {\n    funcionamento.classList.add(\"aberto\");\n  }\n}\n\ninitFuncionamento();\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\n\nfunction initMenuMobile() {\n  const menuButton = document.querySelector(\"[data-menu='button']\");\n  const menuList = document.querySelector(\"[data-menu='list']\");\n  const eventos = [\"click\", \"touchstart\"];\n\n  function openMenu() {\n    menuButton.classList.add(\"active\");\n    menuList.classList.add(\"active\");\n    (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\n      menuButton.classList.remove(\"active\");\n      menuList.classList.remove(\"active\");\n    });\n  }\n\n  if (menuButton) {\n    eventos.forEach((evento) => {\n      menuButton.addEventListener(evento, openMenu);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  const containerModal = document.querySelector(\"[data-modal='container']\");\n  const botaoAbrir = document.querySelector(\"[data-modal='abrir']\");\n  const botaoFechar = document.querySelector(\"[data-modal='fechar']\");\n\n  function toggleModal(e) {\n    e.preventDefault();\n    containerModal.classList.toggle(\"ativo\");\n  }\n\n  function clickForaModal(e) {\n    if (e.target === this) toggleModal(e);\n  }\n\n  if (botaoAbrir && botaoFechar && containerModal) {\n    botaoAbrir.addEventListener(\"click\", toggleModal);\n    botaoFechar.addEventListener(\"click\", toggleModal);\n    containerModal.addEventListener(\"click\", clickForaModal);\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outside-click.js":
/*!*************************************!*\
  !*** ./js/modules/outside-click.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = \"data-outside\";\n\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      setTimeout(() => {\n        html.addEventListener(userEvent, handleOutsideClick);\n      });\n    });\n    element.setAttribute(outside, \"\");\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outside-click.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll() {\n  const sections = document.querySelectorAll(\"[data-anime='scroll']\");\n  const windowHeight = window.innerHeight * 0.75;\n\n  function animaScroll() {\n    sections.forEach((section) => {\n      const sectionTop = section.getBoundingClientRect().top;\n      const isSectionVisible = sectionTop - windowHeight < 0;\n\n      if (isSectionVisible) section.classList.add(\"ativo\");\n      else if (section.classList.contains(\"ativo\")) section.classList.remove(\"ativo\");\n    });\n  }\n\n  if (sections.length) {\n    animaScroll();\n    window.addEventListener(\"scroll\", animaScroll);\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\nfunction initScrollSuave() {\n  const linksInternos = document.querySelectorAll(\"[data-menu='smooth'] a[href^='#']\");\n\n  function scrollToSection(event) {\n    event.preventDefault();\n    const href = event.currentTarget.getAttribute(\"href\");\n    const section = document.querySelector(href);\n\n    section.scrollIntoView({\n      behavior: \"smooth\",\n      block: \"start\",\n    });\n  }\n\n  linksInternos.forEach((link) => {\n    link.addEventListener(\"click\", scrollToSection);\n  });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabNav.js":
/*!******************************!*\
  !*** ./js/modules/tabNav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\n  const tabMenu = document.querySelectorAll(\"[data-tab='menu'] li\");\n  const tabContent = document.querySelectorAll(\"[data-tab='content'] section\");\n  const activeClass = \"ativo\";\n\n  function activeTab(index) {\n    const direction = tabContent[index].dataset.anime;\n\n    tabContent.forEach((section) => {\n      section.classList.remove(activeClass, direction);\n    });\n    tabContent[index].classList.add(activeClass, direction);\n  }\n\n  if (tabMenu.length && tabContent.length) {\n    tabContent[0].classList.add(activeClass, tabContent[0].dataset.anime);\n\n    tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener(\"click\", () => {\n        activeTab(index);\n      });\n    });\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tabNav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\n  const tooltips = document.querySelectorAll(\"[data-tooltip]\");\n  const onMouseMove = {\n    handleEvent(event) {\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\n    },\n  };\n  const onMouseLeave = {\n    handleEvent() {\n      this.tooltipBox.remove();\n      this.element.removeEventListener(\"mouseleave\", onMouseLeave);\n      this.element.removeEventListener(\"mousemove\", onMouseMove);\n    },\n  };\n\n  function criarTooltip(element) {\n    const tooltipBox = document.createElement(\"div\");\n    const text = element.getAttribute(\"aria-label\");\n    tooltipBox.classList.add(\"tooltip\");\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    return tooltipBox;\n  }\n\n  function onMouseOver(event) {\n    const tooltipBox = criarTooltip(this);\n    tooltipBox.style.top = `${event.pageY}px`;\n    tooltipBox.style.left = `${event.pageX}px`;\n\n    onMouseLeave.tooltipBox = tooltipBox;\n    onMouseLeave.element = this;\n    this.addEventListener(\"mouseleave\", onMouseLeave);\n    onMouseMove.tooltipBox = tooltipBox;\n    this.addEventListener(\"mousemove\", onMouseMove);\n  }\n\n  if (tooltips) {\n    tooltips.forEach((item) => {\n      item.addEventListener(\"mouseover\", onMouseOver);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_anima_numeros__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/anima-numeros */ \"./js/modules/anima-numeros.js\");\n/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dropdown */ \"./js/modules/dropdown.js\");\n/* harmony import */ var _modules_fetch_animais__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/fetch-animais */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/fetch-bitcoin */ \"./js/modules/fetch-bitcoin.js\");\n/* harmony import */ var _modules_funcionamento__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/funcionamento */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_menu_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menu-mobile */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/modal */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_scroll_animacao__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/scroll-animacao */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_scroll_suave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/scroll-suave */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_tabNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/tabNav */ \"./js/modules/tabNav.js\");\n/* harmony import */ var _modules_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/tooltip */ \"./js/modules/tooltip.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_accordion__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_dropdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_anima_numeros__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_fetch_animais__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_fetch_bitcoin__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_funcionamento__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_menu_mobile__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_scroll_animacao__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_scroll_suave__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_tabNav__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n(0,_modules_tooltip__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;