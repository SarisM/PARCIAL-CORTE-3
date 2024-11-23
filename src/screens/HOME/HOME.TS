import { dispatch, addObserver, appState } from '../../store/index';
import ProductsHome, { AttributeEventsHome } from '../../components/eventsHome/eventsHome';
import '../../components/eventsHome/productsHome';
import EventsHome from '../../components/eventsHome/eventsHome';

class Home extends HTMLElement {
    private eventsContainer?: HTMLElement;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        addObserver(this);
    }

    async connectedCallback() {
        this.render();
    }

    async renderEvents() {
        if (!this.eventsContainer) return; // Check if the container exists

        if (!appState.events || !Array.isArray(appState.events)) {
            console.log('No events found');
            return;
        }

        this.eventsContainer.innerHTML = ''; // Clean container

        appState.events.forEach((event: any) => {
            const eventComponent = this.ownerDocument.createElement('events-home-component') as EventsHome;
            eventComponent.setAttribute(AttributeEventsHome.url, event.url);
            eventComponent.setAttribute(AttributeEventsHome.titulo, event.titulo);
            eventComponent.setAttribute(AttributeEventsHome.fechayhora, event.fechayhora);
            eventComponent.setAttribute(AttributeEventsHome.ubicacion, event.ubicacion);
            eventComponent.setAttribute(AttributeEventsHome.numerodeasistntes, event.numerodeasistntes);
            eventComponent.classList.add('event');
            this.eventsContainer?.appendChild(eventComponent);
        });
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ''; // Clean the shadowRoot

            const homeContainer = this.ownerDocument.createElement('section');
            homeContainer.className = 'home-container';


            this.eventsContainer = this.ownerDocument.createElement('div');
            this.eventsContainer.className = 'events-container';

            homeContainer.appendChild(this.eventsContainer);
            this.shadowRoot.appendChild(homeContainer);

            this.renderEvents();
        }
    }
}

customElements.define('app-home', Home);
export default Home;