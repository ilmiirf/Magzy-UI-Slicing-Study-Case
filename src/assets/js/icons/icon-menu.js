class IconMenu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
    <svg
      id="iconMenu"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1873_6562)">
        <path
          d="M3.75 12.8577H20.25"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M3.75 6.8577H20.25"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M3.75 18.8577H20.25"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1873_6562">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.857697)"
          />
        </clipPath>
      </defs>
    </svg>

      `;
  }
}
customElements.define("icon-menu", IconMenu);
