import { dispatch, addObserver, appState } from '../../store/index';
import { getEventsAction } from '../../store/actions';
import Events, { AttributeEvents } from '../events/events';
import '../events/events';

class ModifyEvents extends HTMLElement {
    private productsContainer?: HTMLElement;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        addObserver(this);
    }

    async connectedCallback() {
        if (appState.events.length === 0) {
            const action = await getEventsAction();
            if (action) {
                dispatch(action);
            }
        }
        this.render();
    }

    async renderProducts() {
        console.log(appState.events);
        if (!this.productsContainer) return; // Check if the container exists

        if (!appState.events || !Array.isArray(appState.events)) {
            console.log('No events found');
            return;
        }

        this.productsContainer.innerHTML = ''; // Clean container

        appState.events.forEach((event: any) => {
            console.log(event.id);
            const eventComponent = this.ownerDocument.createElement('events-component') as Events;
            eventComponent.setAttribute(AttributeEvents.url, event.url);
            eventComponent.setAttribute(AttributeEvents.titulo, event.titulo);
            eventComponent.setAttribute(AttributeEvents.fechayhora, event.fechayhora);
            eventComponent.setAttribute(AttributeEvents.fechayhora, event.fechayhora);
            eventComponent.setAttribute(AttributeEvents.ubicacion, event.ubicacion);
            eventComponent.setAttribute(AttributeEvents.numerodeasistntes, event.numerodeasistntes);
            eventComponent.classList.add('product');
            this.productsContainer?.appendChild(eventComponent);
        });
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ''; // Clean the shadowRoot

            const homeContainer = this.ownerDocument.createElement('section');
            homeContainer.className = 'home-container';

            // Reemplazo de botones por NavBar
            const navBar = this.ownerDocument.createElement('nav-bar');
            homeContainer.appendChild(navBar);

            this.productsContainer = this.ownerDocument.createElement('div');
            this.productsContainer.className = 'products-container';

            homeContainer.appendChild(this.productsContainer);
            this.shadowRoot.appendChild(homeContainer);

            this.renderProducts();
        }
    }
}

customElements.define('app-modify-events', ModifyEvents);
export default ModifyEvents;

