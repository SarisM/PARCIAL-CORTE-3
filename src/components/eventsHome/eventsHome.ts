import { addObserver } from "../../store/index";
import "../deleteButton/deleteButton";

export enum AttributeEventsHome {
    'url' = 'url',
    'titulo' = 'titulo',
    'fechayhora' = 'fechayhora',
    'ubicacion' = 'ubicacion',
    'numerodeasistntes' = 'quantity',
};

class EventsHome extends HTMLElement {
    url?: string;
    titulo?: string;
    fechayhora?: string;
    ubicacion?: string;
    numerodeasistntes?: string;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return Object.keys(EventsHome) as Array<AttributeEventsHome>;
    }

    attributeChangedCallback(propName: AttributeEventsHome, oldValue: string | number | undefined, newValue: string | number | undefined) {
        switch (propName) {
            case AttributeEventsHome.url:
                this.url = newValue as string;
                break;
            case AttributeEventsHome.titulo:
                this.titulo = newValue as string;
                break;
            case AttributeEventsHome.fechayhora:
                this.fechayhora = newValue as string;
                break;
            case AttributeEventsHome.ubicacion:
                this.ubicacion = newValue as string;
                break;
            case AttributeEventsHome.numerodeasistntes:
                this.numerodeasistntes = newValue as string;
            default:
                break;
        }
        this.render();
    }

    connectedCallback() {
        this.render();
        addObserver(this);
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = '';
            const container = this.ownerDocument.createElement('div');
            container.className = 'events-card';

            const img = this.ownerDocument.createElement('img');
            img.className = 'events-img';
            img.src = this.url || 'No image available';
            img.alt = this.titulo || 'No album available';
            container.appendChild(img);

            const titulo = this.ownerDocument.createElement('h2');
            titulo.className = 'events-titulo';
            titulo.textContent = this.titulo || 'No titulo available';
            container.appendChild(titulo);

            const fechayhora = this.ownerDocument.createElement('p');
            fechayhora.className = 'events-fechayhora';
            fechayhora.textContent = this.titulo || 'No titulo available';
            container.appendChild(fechayhora);

            const ubicacion = this.ownerDocument.createElement('p');
            ubicacion.className = 'events-ubicacion';
            ubicacion.textContent = this.ubicacion || 'No ubicacion available';
            container.appendChild(ubicacion);

            const numerodeasistntes = this.ownerDocument.createElement('p');
            numerodeasistntes.className = 'events-numerodeasistntes';
            numerodeasistntes.textContent = this.numerodeasistntes || 'No numerodeasistntes available';
            container.appendChild(numerodeasistntes);

            this.shadowRoot.appendChild(container);
        }
    }
}
customElements.define('events-home-component', EventsHome);
export default EventsHome;