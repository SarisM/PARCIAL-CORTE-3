import { addObserver, appState, dispatch } from "../../store/index";
// import DeleteButton, {Attribute as DeleteAttribute} from "../deleteButton/deleteButton";
// import "../deleteButton/deleteButton";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";

export enum AttributeEvents {
    'uid' = 'uid',
    'url' = 'url',
    'titulo' = 'titulo',
    'fechayhora' = 'fechayhora',
    'ubicacion' = 'ubicacion',
    'numerodeasistntes' = 'quantity',
};

class Events extends HTMLElement {
    uid?: string;
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
        return Object.keys(AttributeEvents) as Array<AttributeEvents>;
    }

    attributeChangedCallback(propName: AttributeEvents, oldValue: string | number | undefined, newValue: string | number | undefined) {
        switch (propName) {
            case AttributeEvents.url:
                this.url = newValue as string;
                break;
            case AttributeEvents.uid:
                this.uid = newValue as string;
                break;
            case AttributeEvents.titulo:
                this.titulo = newValue as string;
                break;
            case AttributeEvents.fechayhora:
                this.fechayhora = newValue as string;
                break;
            case AttributeEvents.ubicacion:
                this.ubicacion = newValue  as string; 
                break;
            case AttributeEvents.numerodeasistntes:
                this.numerodeasistntes = newValue  as string; 
                break;
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
            fechayhora.textContent = this.fechayhora || 'No fechayhora available';
            container.appendChild(fechayhora);

            const ubicacion = this.ownerDocument.createElement('p');
            ubicacion.className = 'events-ubicacion';
            ubicacion.textContent =  this.ubicacion || 'No ubicacion available';
            container.appendChild(ubicacion);

            const numerodeasistntes = this.ownerDocument.createElement('p');
            numerodeasistntes.className = 'events-numerodeasistntes';
            numerodeasistntes.textContent =  this.numerodeasistntes || 'No numerodeasistntes available';
            container.appendChild(numerodeasistntes);

            

            // const deleteButton = this.ownerDocument.createElement('delete-button') as DeleteButton;
            // deleteButton.setAttribute(DeleteAttribute.uid, this.uid || '');
            // container.appendChild(deleteButton);

            // this.shadowRoot.appendChild(container);
        }
    }
}
customElements.define('events-component', Events);
export default Events;