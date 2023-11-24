// InteractiveComponent
class InteractiveComponent extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <button id="myButton">Haz clic</button>
      `;

      this.shadowRoot.querySelector('#myButton').addEventListener('click', () => {
        const customEvent = new CustomEvent('informacion-cambiada', {
          bubbles: true,
          composed: true,  // Añade esta línea
          detail: { mensaje: 'Información actualizada' },
        });
        this.dispatchEvent(customEvent);
      });
    }
}

customElements.define('interactive-component', InteractiveComponent);
