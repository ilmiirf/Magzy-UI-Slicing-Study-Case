class IconUp extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
      <svg
        id="iconUp"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9997 11.9079L7.04995 16.8576L5.63575 15.4434L11.9997 9.07935L18.3637 15.4434L16.9495 16.8576L11.9997 11.9079Z"
          fill="currentColor"
        />
      </svg>

      `;
  }
}
customElements.define("icon-up", IconUp);
