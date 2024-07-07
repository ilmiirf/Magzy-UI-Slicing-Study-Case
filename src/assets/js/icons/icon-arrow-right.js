class IconArrowRight extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
    <svg
      id="iconArrowRight"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5355 3.53553L19.7678 5.3033L30.8959 16.4314L1.5686 16.4314L1.56861 18.9239L30.8959 18.9239L19.7678 30.052L21.5355 31.8198L35.6777 17.6777L21.5355 3.53553Z"
        fill="currentColor"
      />
    </svg>

      `;
  }
}
customElements.define("icon-arrow-right", IconArrowRight);
