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

/***/ "./src/components/deleteButton/deleteButton.ts":
/*!*****************************************************!*\
  !*** ./src/components/deleteButton/deleteButton.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n// import { dispatch } from \"../../store\";\n// import { deleteProductAction } from \"../../store/actions\";\n// import { Actions } from \"../../types/store\";\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// export enum Attribute {\n//     \"uid\" = \"uid\",\n// }\n// export class DeleteButton extends HTMLElement {\n//     uid?: string;\n//     static get observedAttributes() {\n//         return Object.keys(Attribute);\n//     }\n//     attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {\n//         this[propName] = newValue ? newValue : undefined; \n//     }   \n//     constructor() {\n//         super();\n//         this.attachShadow({ mode: 'open' });\n//     }\n//     connectedCallback() {\n//         this.render();\n//     }\n//     render() {\n//         if (this.shadowRoot) {\n//             const button = this.ownerDocument.createElement('button');\n//             button.textContent = 'Delete';\n//             button.className = 'delete-button';\n//             button.addEventListener('click', () => {\n//                 console.log(\"Delete UID\", this.uid);\n//                 dispatch(deleteProductAction(this.uid!));\n//             });\n//             this.shadowRoot.appendChild(button);\n//         }\n//     }\n// }\n// customElements.define('delete-button', DeleteButton);\n// export default DeleteButton;import { dispatch } from \"../../store\";\n// import { deleteProductAction } from \"../../store/actions\";\n// import { Actions } from \"../../types/store\";\n// export enum Attribute {\n//     \"uid\" = \"uid\",\n// }\n// export class DeleteButton extends HTMLElement {\n//     uid?: string;\n//     static get observedAttributes() {\n//         return Object.keys(Attribute);\n//     }\n//     attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {\n//         this[propName] = newValue ? newValue : undefined; \n//     }   \n//     constructor() {\n//         super();\n//         this.attachShadow({ mode: 'open' });\n//     }\n//     connectedCallback() {\n//         this.render();\n//     }\n//     render() {\n//         if (this.shadowRoot) {\n//             const button = this.ownerDocument.createElement('button');\n//             button.textContent = 'Delete';\n//             button.className = 'delete-button';\n//             button.addEventListener('click', () => {\n//                 console.log(\"Delete UID\", this.uid);\n//                 dispatch(deleteProductAction(this.uid!));\n//             });\n//             this.shadowRoot.appendChild(button);\n//         }\n//     }\n// }\n// customElements.define('delete-button', DeleteButton);\n// export default DeleteButton;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/deleteButton/deleteButton.ts?");

/***/ }),

/***/ "./src/components/eventsHome/eventsHome.ts":
/*!*************************************************!*\
  !*** ./src/components/eventsHome/eventsHome.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AttributeEventsHome = void 0;\nconst index_1 = __webpack_require__(/*! ../../store/index */ \"./src/store/index.ts\");\n__webpack_require__(/*! ../deleteButton/deleteButton */ \"./src/components/deleteButton/deleteButton.ts\");\nvar AttributeEventsHome;\n(function (AttributeEventsHome) {\n    AttributeEventsHome[\"url\"] = \"url\";\n    AttributeEventsHome[\"titulo\"] = \"titulo\";\n    AttributeEventsHome[\"fechayhora\"] = \"fechayhora\";\n    AttributeEventsHome[\"ubicacion\"] = \"ubicacion\";\n    AttributeEventsHome[\"numerodeasistntes\"] = \"quantity\";\n})(AttributeEventsHome = exports.AttributeEventsHome || (exports.AttributeEventsHome = {}));\n;\nclass EventsHome extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    static get observedAttributes() {\n        return Object.keys(EventsHome);\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            case AttributeEventsHome.url:\n                this.url = newValue;\n                break;\n            case AttributeEventsHome.titulo:\n                this.titulo = newValue;\n                break;\n            case AttributeEventsHome.fechayhora:\n                this.fechayhora = newValue;\n                break;\n            case AttributeEventsHome.ubicacion:\n                this.ubicacion = newValue;\n                break;\n            case AttributeEventsHome.numerodeasistntes:\n                this.numerodeasistntes = newValue;\n            default:\n                break;\n        }\n        this.render();\n    }\n    connectedCallback() {\n        this.render();\n        (0, index_1.addObserver)(this);\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = '';\n            const container = this.ownerDocument.createElement('div');\n            container.className = 'events-card';\n            const img = this.ownerDocument.createElement('img');\n            img.className = 'events-img';\n            img.src = this.url || 'No image available';\n            img.alt = this.titulo || 'No album available';\n            container.appendChild(img);\n            const titulo = this.ownerDocument.createElement('h2');\n            titulo.className = 'events-titulo';\n            titulo.textContent = this.titulo || 'No titulo available';\n            container.appendChild(titulo);\n            const fechayhora = this.ownerDocument.createElement('p');\n            fechayhora.className = 'events-fechayhora';\n            fechayhora.textContent = this.titulo || 'No titulo available';\n            container.appendChild(fechayhora);\n            const ubicacion = this.ownerDocument.createElement('p');\n            ubicacion.className = 'events-ubicacion';\n            ubicacion.textContent = this.ubicacion || 'No ubicacion available';\n            container.appendChild(ubicacion);\n            const numerodeasistntes = this.ownerDocument.createElement('p');\n            numerodeasistntes.className = 'events-numerodeasistntes';\n            numerodeasistntes.textContent = this.numerodeasistntes || 'No numerodeasistntes available';\n            container.appendChild(numerodeasistntes);\n            this.shadowRoot.appendChild(container);\n        }\n    }\n}\ncustomElements.define('events-home-component', EventsHome);\nexports[\"default\"] = EventsHome;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/eventsHome/eventsHome.ts?");

/***/ }),

/***/ "./src/components/navBar/navBar.ts":
/*!*****************************************!*\
  !*** ./src/components/navBar/navBar.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst index_1 = __webpack_require__(/*! ../../store/index */ \"./src/store/index.ts\");\nconst actions_1 = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\nconst store_1 = __webpack_require__(/*! ../../types/store */ \"./src/types/store.ts\");\nclass NavBar extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        this.navigateTo = this.navigateTo.bind(this); // Asegurar contexto\n    }\n    connectedCallback() {\n        this.render();\n    }\n    navigateTo(screen) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const response = yield (0, actions_1.navigate)(screen);\n                if (response) {\n                    (0, index_1.dispatch)(response);\n                    return true;\n                }\n                else {\n                    return false;\n                }\n            }\n            catch (error) {\n                console.error(`Error navigating to screen ${screen}:`, error);\n                return false;\n            }\n        });\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = '';\n            // Estilos encapsulados\n            const style = document.createElement('style');\n            style.textContent = `\r\n                .nav-bar {\r\n                    display: flex;\r\n                    justify-content: center;\r\n                    align-items: center;\r\n                    gap: 20px;\r\n                    background: linear-gradient(90deg, #4CAF50, #2196F3);\r\n                    padding: 15px 30px;\r\n                    border-radius: 10px;\r\n                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n                }\r\n                .nav-button {\r\n                    background-color: white;\r\n                    color: #333;\r\n                    border: none;\r\n                    padding: 12px 24px;\r\n                    font-size: 18px;\r\n                    font-family: Arial, sans-serif;\r\n                    font-weight: bold;\r\n                    cursor: pointer;\r\n                    border-radius: 8px;\r\n                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\r\n                    transition: transform 0.2s, background-color 0.3s;\r\n                }\r\n                .nav-button:hover {\r\n                    background-color: #f1f1f1;\r\n                    transform: scale(1.05);\r\n                }\r\n                .nav-button:active {\r\n                    transform: scale(0.95);\r\n                }\r\n            `;\n            // Contenedor de la barra de navegación\n            const navBar = document.createElement('div');\n            navBar.className = 'nav-bar';\n            // Botones\n            const buttons = [\n                { text: 'user', screen: store_1.Screens.HOME },\n                { text: 'admin', screen: store_1.Screens.ADMIN },\n            ];\n            buttons.forEach(({ text, screen }) => {\n                const button = document.createElement('button');\n                button.textContent = text;\n                button.className = 'nav-button';\n                button.addEventListener('click', () => this.navigateTo(screen));\n                navBar.appendChild(button);\n            });\n            // Añade los elementos al shadowRoot\n            this.shadowRoot.append(style, navBar);\n        }\n    }\n}\ncustomElements.define('nav-bar', NavBar);\nexports[\"default\"] = NavBar;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/navBar/navBar.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// import * as components from './components/index';\nconst index_1 = __webpack_require__(/*! ./store/index */ \"./src/store/index.ts\");\nconst store_1 = __webpack_require__(/*! ./types/store */ \"./src/types/store.ts\");\n__webpack_require__(/*! ./screens/ADMIN/ADMIN */ \"./src/screens/ADMIN/ADMIN.ts\");\n__webpack_require__(/*! ./screens/HOME/HOME */ \"./src/screens/HOME/HOME.ts\");\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        (0, index_1.addObserver)(this);\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = '';\n            switch (index_1.appState.screen) {\n                case store_1.Screens.HOME:\n                    const home = this.ownerDocument.createElement('app-home');\n                    this.shadowRoot.appendChild(home);\n                    break;\n                case store_1.Screens.ADMIN:\n                    const AddProducts = this.ownerDocument.createElement('app-add-products');\n                    this.shadowRoot.appendChild(AddProducts);\n                    break;\n                default:\n                    break;\n            }\n            console.log('Current screen:', index_1.appState.screen);\n        }\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/screens/ADMIN/ADMIN.ts":
/*!************************************!*\
  !*** ./src/screens/ADMIN/ADMIN.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst index_1 = __webpack_require__(/*! ../../store/index */ \"./src/store/index.ts\");\nconst actions_1 = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\nconst store_1 = __webpack_require__(/*! ../../types/store */ \"./src/types/store.ts\");\nconst actions_2 = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\n__webpack_require__(/*! ../../components/navBar/navBar */ \"./src/components/navBar/navBar.ts\"); // Importamos nav-bar\nclass AddEvents extends HTMLElement {\n    constructor() {\n        super();\n        this.credentials = {\n            id: this.generateUniqueId(),\n            url: '',\n            titulo: '',\n            fechayhora: '',\n            ubicacion: 0,\n            numerodeasistntes: 0,\n        };\n        this.attachShadow({ mode: 'open' });\n        this.submitForm = this.submitForm.bind(this);\n        this.changeUrl = this.changeUrl.bind(this);\n        this.changeTitulo = this.changeTitulo.bind(this);\n        this.changeFecha = this.changeFecha.bind(this);\n        this.changeUbicacion = this.changeUbicacion.bind(this);\n        this.changeNumero = this.changeNumero.bind(this);\n    }\n    generateUniqueId() {\n        const timestamp = new Date().getTime();\n        const random = Math.floor(Math.random() * 10000);\n        return `${timestamp}-${random}`;\n    }\n    changeUrl(e) {\n        const input = e.target;\n        this.credentials.url = input.value;\n    }\n    changeTitulo(e) {\n        const input = e.target;\n        this.credentials.titulo = input.value;\n    }\n    changeFecha(e) {\n        const input = e.target;\n        this.credentials.fechayhora = input.value;\n    }\n    changeUbicacion(e) {\n        const input = e.target;\n        this.credentials.ubicacion = Number(input.value);\n    }\n    changeNumero(e) {\n        const input = e.target;\n        this.credentials.numerodeasistntes = Number(input.value);\n    }\n    validateForm() {\n        const { url, titulo, fechayhora, ubicacion, numerodeasistntes } = this.credentials;\n        if (!url || !titulo || !fechayhora || !ubicacion || !numerodeasistntes) {\n            alert('Please fill all text fields');\n            return false;\n        }\n        return true;\n    }\n    submitForm() {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (!this.validateForm())\n                return;\n            if (!this.credentials.id) {\n                this.credentials.id = this.generateUniqueId();\n            }\n            const response = yield (0, actions_2.addEventsAction)(this.credentials);\n            if (response) {\n                (0, index_1.dispatch)(response);\n                (0, index_1.dispatch)((0, actions_1.navigate)(store_1.Screens.HOME));\n            }\n            else {\n                alert('Could not create the product');\n            }\n        });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (!this.shadowRoot)\n            return;\n        this.shadowRoot.innerHTML = ''; // Limpia el Shadow DOM\n        const formContainer = document.createElement('section');\n        formContainer.className = 'form-container';\n        // Formulario\n        const form = document.createElement('div');\n        form.className = 'form-div';\n        const title = document.createElement('h1');\n        title.innerText = 'Add Event';\n        form.appendChild(title);\n        // Campos del formulario\n        const fields = [\n            { label: 'URL', type: 'text', changeHandler: this.changeUrl },\n            { label: 'Titulo', type: 'text', changeHandler: this.changeTitulo },\n            { label: 'Fehca y hora', type: 'text', changeHandler: this.changeFecha },\n            { label: 'Ubicacion', type: 'text', changeHandler: this.changeUbicacion },\n            { label: 'Numero de sistentes', type: 'text', changeHandler: this.changeNumero },\n        ];\n        fields.forEach(({ label, type, changeHandler }) => {\n            const labelElement = document.createElement('label');\n            labelElement.innerText = label;\n            const inputElement = document.createElement('input');\n            inputElement.type = type;\n            inputElement.addEventListener('input', changeHandler);\n            form.appendChild(labelElement);\n            form.appendChild(inputElement);\n        });\n        // Botón de envío\n        const submitButton = document.createElement('button');\n        submitButton.innerText = 'Add Event';\n        submitButton.addEventListener('click', this.submitForm);\n        form.appendChild(submitButton);\n        formContainer.appendChild(form);\n        this.shadowRoot.appendChild(formContainer);\n    }\n}\ncustomElements.define('app-add-events', AddEvents);\nexports[\"default\"] = AddEvents;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/ADMIN/ADMIN.ts?");

/***/ }),

/***/ "./src/screens/HOME/HOME.ts":
/*!**********************************!*\
  !*** ./src/screens/HOME/HOME.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst index_1 = __webpack_require__(/*! ../../store/index */ \"./src/store/index.ts\");\nconst eventsHome_1 = __webpack_require__(/*! ../../components/eventsHome/eventsHome */ \"./src/components/eventsHome/eventsHome.ts\");\n__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../components/eventsHome/productsHome'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nclass Home extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        (0, index_1.addObserver)(this);\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            this.render();\n        });\n    }\n    renderEvents() {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (!this.eventsContainer)\n                return; // Check if the container exists\n            if (!index_1.appState.events || !Array.isArray(index_1.appState.events)) {\n                console.log('No events found');\n                return;\n            }\n            this.eventsContainer.innerHTML = ''; // Clean container\n            index_1.appState.events.forEach((event) => {\n                var _a;\n                const eventComponent = this.ownerDocument.createElement('events-home-component');\n                eventComponent.setAttribute(eventsHome_1.AttributeEventsHome.url, event.url);\n                eventComponent.setAttribute(eventsHome_1.AttributeEventsHome.titulo, event.titulo);\n                eventComponent.setAttribute(eventsHome_1.AttributeEventsHome.fechayhora, event.fechayhora);\n                eventComponent.setAttribute(eventsHome_1.AttributeEventsHome.ubicacion, event.ubicacion);\n                eventComponent.setAttribute(eventsHome_1.AttributeEventsHome.numerodeasistntes, event.numerodeasistntes);\n                eventComponent.classList.add('event');\n                (_a = this.eventsContainer) === null || _a === void 0 ? void 0 : _a.appendChild(eventComponent);\n            });\n        });\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ''; // Clean the shadowRoot\n            const homeContainer = this.ownerDocument.createElement('section');\n            homeContainer.className = 'home-container';\n            this.eventsContainer = this.ownerDocument.createElement('div');\n            this.eventsContainer.className = 'events-container';\n            homeContainer.appendChild(this.eventsContainer);\n            this.shadowRoot.appendChild(homeContainer);\n            this.renderEvents();\n        }\n    }\n}\ncustomElements.define('app-home', Home);\nexports[\"default\"] = Home;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/HOME/HOME.ts?");

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteEventsAction = exports.getEventsAction = exports.addEventsAction = exports.navigate = void 0;\nconst store_1 = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\nconst firebase_1 = __webpack_require__(/*! ../utils/firebase */ \"./src/utils/firebase.ts\");\nconst navigate = (screen) => {\n    return {\n        action: store_1.Actions.NAVIGATE,\n        payload: screen,\n    };\n};\nexports.navigate = navigate;\nconst addEventsAction = (events) => __awaiter(void 0, void 0, void 0, function* () {\n    const success = yield (0, firebase_1.addEvent)(events);\n    if (success) {\n        return {\n            action: store_1.Actions.ADDEVENTS,\n            payload: events,\n        };\n    }\n    return null;\n});\nexports.addEventsAction = addEventsAction;\nconst getEventsAction = () => __awaiter(void 0, void 0, void 0, function* () {\n    const events = yield (0, firebase_1.getEvent)();\n    return {\n        action: store_1.Actions.GETEVENTS,\n        payload: events,\n    };\n});\nexports.getEventsAction = getEventsAction;\nconst deleteEventsAction = (uid) => __awaiter(void 0, void 0, void 0, function* () {\n    yield (0, firebase_1.deleteEvent)(uid);\n    return {\n        action: store_1.Actions.DELETEPRODUCT,\n        payload: uid,\n    };\n});\nexports.deleteEventsAction = deleteEventsAction;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/actions.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.addObserver = exports.dispatch = exports.appState = void 0;\nconst reducer_1 = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.ts\");\nconst initialState = {\n    screen: 'HOME',\n    events: [],\n};\nexports.appState = initialState;\nlet observers = [];\nconst dispatch = (action) => {\n    const clone = JSON.parse(JSON.stringify(exports.appState));\n    const newState = (0, reducer_1.reducer)(action, clone);\n    exports.appState = newState;\n    observers.forEach((o) => o.render());\n};\nexports.dispatch = dispatch;\nconst addObserver = (ref) => {\n    observers = [...observers, ref];\n};\nexports.addObserver = addObserver;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.reducer = void 0;\nconst store_1 = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\nconst reducer = (currentAction, currentState) => {\n    const { action, payload } = currentAction;\n    switch (action) {\n        case store_1.Actions.NAVIGATE:\n            return Object.assign(Object.assign({}, currentState), { screen: payload });\n        case store_1.Actions.ADDEVENTS:\n            return Object.assign(Object.assign({}, currentState), { products: [...currentState.products, payload] });\n        case store_1.Actions.GETEVENTS:\n            return Object.assign(Object.assign({}, currentState), { products: payload || [] });\n        case store_1.Actions.DELETEPRODUCT:\n            return Object.assign(Object.assign({}, currentState), { products: [...currentState.events.filter((product) => product.uid !== payload)] });\n        default:\n            return currentState;\n    }\n};\nexports.reducer = reducer;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/reducer.ts?");

/***/ }),

/***/ "./src/types/store.ts":
/*!****************************!*\
  !*** ./src/types/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Actions = exports.Screens = void 0;\nvar Screens;\n(function (Screens) {\n    Screens[\"HOME\"] = \"HOME\";\n    Screens[\"ADMIN\"] = \"ADMIN\";\n})(Screens = exports.Screens || (exports.Screens = {}));\nvar Actions;\n(function (Actions) {\n    Actions[\"NAVIGATE\"] = \"NAVIGATE\";\n    Actions[\"ADDEVENTS\"] = \"ADDEVENTS\";\n    Actions[\"GETEVENTS\"] = \"GETEVENTS\";\n    Actions[\"DELETEPRODUCT\"] = \"DELETEPRODUCT\";\n})(Actions = exports.Actions || (exports.Actions = {}));\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/types/store.ts?");

/***/ }),

/***/ "./src/utils/firebase.ts":
/*!*******************************!*\
  !*** ./src/utils/firebase.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteEvent = exports.getEvent = exports.addEvent = void 0;\nlet db;\n// Instance of Firebase FireStore\nconst getFirestoreInstance = () => __awaiter(void 0, void 0, void 0, function* () {\n    if (!db) {\n        const { initializeApp } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"node_modules_firebase_app_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\"));\n        const { getFirestore } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n        const firebaseConfig = {\n            apiKey: \"AIzaSyAGmPUQLXkmC5kwgKJR9HQcf5w6rLq_OFo\",\n            authDomain: \"parcial-corte-3.firebaseapp.com\",\n            projectId: \"parcial-corte-3\",\n            storageBucket: \"parcial-corte-3.firebasestorage.app\",\n            messagingSenderId: \"534588026588\",\n            appId: \"1:534588026588:web:b67942dc1eb271c61d0e19\"\n        };\n        const app = initializeApp(firebaseConfig);\n        db = getFirestore(app);\n    }\n    return db;\n});\n// Functions\nconst addEvent = (event) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const db = yield getFirestoreInstance();\n        const { setDoc, doc } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n        const docRef = doc(db, 'events', event.id);\n        yield setDoc(docRef, event);\n        return true;\n    }\n    catch (error) {\n        console.error(\"Error adding document:\", error);\n        return false;\n    }\n});\nexports.addEvent = addEvent;\nconst getEvent = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const db = yield getFirestoreInstance();\n        const { getDocs, collection } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n        const where = collection(db, 'events');\n        const querySnapshot = yield getDocs(where);\n        const data = [];\n        querySnapshot.forEach((doc) => {\n            data.push(doc.data());\n        });\n        return data;\n    }\n    catch (error) {\n        console.error(\"Error getting document:\", error);\n    }\n    ;\n});\nexports.getEvent = getEvent;\nconst deleteEvent = (uid) => __awaiter(void 0, void 0, void 0, function* () {\n    const db = yield getFirestoreInstance();\n    const { doc, deleteDoc } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n    const deleteRef = doc(db, 'events', uid);\n    yield deleteDoc(deleteRef).then(() => {\n        console.log(\"Document successfully deleted!\");\n    }).catch((error) => {\n        console.error(\"Error removing document: \", error);\n    });\n});\nexports.deleteEvent = deleteEvent;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/utils/firebase.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "dca_scoffolding:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdca_scoffolding"] = self["webpackChunkdca_scoffolding"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;