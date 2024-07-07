class IconLeft extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
    <svg
      id="iconLeft"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8284 12.8584L15.7782 17.8081L14.364 19.2223L8 12.8584L14.364 6.49442L15.7782 7.90863L10.8284 12.8584Z"
        fill="currentColor"
      />
    </svg>

      `;
  }
}
customElements.define("icon-left", IconLeft);
