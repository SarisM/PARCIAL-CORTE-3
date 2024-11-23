import { dispatch } from '../../store/index';
import { navigate } from '../../store/actions';
import { Screens } from '../../types/store';
import { addEventsAction } from '../../store/actions';
import '../../components/navBar/navBar'; // Importamos nav-bar

class AddEvents extends HTMLElement {
    private credentials = {
        id: this.generateUniqueId(),
        url: '',
        titulo: '',
        fechayhora: '',
        ubicacion: 0,
        numerodeasistntes: 0,
    };

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.submitForm = this.submitForm.bind(this);
        this.changeUrl = this.changeUrl.bind(this);
        this.changeTitulo = this.changeTitulo.bind(this);
        this.changeFecha = this.changeFecha.bind(this);
        this.changeUbicacion = this.changeUbicacion.bind(this);
        this.changeNumero = this.changeNumero.bind(this);
    }

    private generateUniqueId(): string {
        const timestamp = new Date().getTime();
        const random = Math.floor(Math.random() * 10000);
        return `${timestamp}-${random}`;
    }

    private changeUrl(e: Event) {
        const input = e.target as HTMLInputElement;
        this.credentials.url = input.value;
    }

    private changeTitulo(e: Event) {
        const input = e.target as HTMLInputElement;
        this.credentials.titulo = input.value;
    }

    private changeFecha(e: Event) {
        const input = e.target as HTMLInputElement;
        this.credentials.fechayhora = input.value;
    }

    private changeUbicacion(e: Event) {
        const input = e.target as HTMLInputElement;
        this.credentials.ubicacion = Number(input.value);
    }

    private changeNumero(e: Event) {
        const input = e.target as HTMLInputElement;
        this.credentials.numerodeasistntes = Number(input.value);
    }

    private validateForm(): boolean {
        const { url, titulo, fechayhora, ubicacion, numerodeasistntes } = this.credentials;
        if (!url || !titulo || !fechayhora || !ubicacion || !numerodeasistntes) {
            alert('Please fill all text fields');
            return false;
        }
        return true;
    }

    private async submitForm() {
        if (!this.validateForm()) return;

        if (!this.credentials.id) {
            this.credentials.id = this.generateUniqueId();
        }

        const response = await addEventsAction(this.credentials);
        if (response) {
            dispatch(response);
            dispatch(navigate(Screens.HOME));
        } else {
            alert('Could not create the product');
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (!this.shadowRoot) return;

        this.shadowRoot.innerHTML = ''; // Limpia el Shadow DOM

        const formContainer = document.createElement('section');
        formContainer.className = 'form-container';


        // Formulario
        const form = document.createElement('div');
        form.className = 'form-div';

        const title = document.createElement('h1');
        title.innerText = 'Add Event';
        form.appendChild(title);

        // Campos del formulario
        const fields = [
            { label: 'URL', type: 'text', changeHandler: this.changeUrl },
            { label: 'Titulo', type: 'text', changeHandler: this.changeTitulo },
            { label: 'Fehca y hora', type: 'text', changeHandler: this.changeFecha },
            { label: 'Ubicacion', type: 'text', changeHandler: this.changeUbicacion },
            { label: 'Numero de sistentes', type: 'text', changeHandler: this.changeNumero },
        ];

        fields.forEach(({ label, type, changeHandler }) => {
            const labelElement = document.createElement('label');
            labelElement.innerText = label;

            const inputElement = document.createElement('input');
            inputElement.type = type;
            inputElement.addEventListener('input', changeHandler);

            form.appendChild(labelElement);
            form.appendChild(inputElement);
        });

        // Botón de envío
        const submitButton = document.createElement('button');
        submitButton.innerText = 'Add Event';
        submitButton.addEventListener('click', this.submitForm);
        form.appendChild(submitButton);

        formContainer.appendChild(form);
        this.shadowRoot.appendChild(formContainer);
    }
}

customElements.define('app-add-events', AddEvents);
export default AddEvents;