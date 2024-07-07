class IconDown extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
    <svg
      id="iconDown"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9997 14.0291L16.9495 9.07938L18.3637 10.4936L11.9997 16.8576L5.63574 10.4936L7.04996 9.07938L11.9997 14.0291Z"
        fill="currentColor"
      />
    </svg>

      `;
  }
}
customElements.define("icon-down", IconDown);
