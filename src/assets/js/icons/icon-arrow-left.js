class IconArrowLeft extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
    <svg
      id="iconArrowLeft"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.1422 3.53553L15.91 5.3033L4.78188 16.4314L34.1091 16.4314L34.1091 18.9239L4.78187 18.9239L15.91 30.052L14.1422 31.8198L6.50065e-05 17.6777L14.1422 3.53553Z"
        fill="currentColor"
      />
    </svg>

      `;
  }
}
customElements.define("icon-arrow-left", IconArrowLeft);
