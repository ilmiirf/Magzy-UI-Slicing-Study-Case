class IconClose extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
    <svg
      id="iconClose"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.16638 7.02407L17.8336 18.6913"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
      <path
        d="M17.8336 7.02407L6.16636 18.6913"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
    </svg>

      `;
  }
}
customElements.define("icon-close", IconClose);
