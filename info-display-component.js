// InfoDisplayComponent
class InfoDisplayComponent extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <div id="infoDisplay">Esperando información...</div>
      `;

      // Mover el listener al documento
      document.addEventListener('informacion-cambiada', (event) => {
        console.log('Evento recibido:', event.detail);
        this.shadowRoot.querySelector('#infoDisplay').innerText = event.detail.mensaje;
      });
    }
}

customElements.define('info-display-component', InfoDisplayComponent);
