class IconRightTop extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
    <svg
      id="iconRightTop"
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 7.75024V10.2502H28.2375L7.5 30.9877L9.2625 32.7502L30 12.0127V27.7502H32.5V7.75024L12.5 7.75024Z"
        fill="currentColor"
      />
    </svg>
      `;
  }
}
customElements.define("icon-right-top", IconRightTop);
