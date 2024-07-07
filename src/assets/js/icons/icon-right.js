class IconRight extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
    <svg
      id="iconRight"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.1714 12.8584L8.22168 7.90863L9.63589 6.49442L15.9999 12.8584L9.63589 19.2223L8.22168 17.8081L13.1714 12.8584Z"
        fill="currenColor"
      />
    </svg>

      `;
  }
}
customElements.define("icon-right", IconRight);
