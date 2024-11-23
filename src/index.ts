// import * as components from './components/index';
import { addObserver, appState } from './store/index';
import { Screens } from './types/store';
import './screens/ADMIN/ADMIN';
import './screens/HOME/HOME';


class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        addObserver(this);
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = '';

            switch (appState.screen) {

                case Screens.HOME:
                    const home = this.ownerDocument.createElement('app-home');
                    this.shadowRoot.appendChild(home);
                    break;

                case Screens.ADMIN:
                    const AddProducts = this.ownerDocument.createElement('app-add-products');
                    this.shadowRoot.appendChild(AddProducts);
                    break;

                default:
                    break;
            }
            console.log('Current screen:', appState.screen);
        }
    }
}

customElements.define('app-container', AppContainer);