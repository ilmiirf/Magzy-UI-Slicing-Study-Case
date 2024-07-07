class IconStar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
  <svg
    id="iconStar"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 12.2502C15.9995 14.46 14.2097 16.2498 12 24.2502C9.79028 16.2498 8.00046 14.46 0 12.2502C8.00046 10.0405 9.79028 8.2507 12 0.250244C14.2097 8.2507 15.9995 10.0405 24 12.2502Z"
      fill="currentColor"
    />
  </svg>
      `;
  }
}
customElements.define("icon-star", IconStar);
