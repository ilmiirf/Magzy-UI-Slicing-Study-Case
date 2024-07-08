class PhotoshootInformation extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const id = this.getAttribute("id");
    const title = this.getAttribute("data-title");
    const creativeDirection = this.getAttribute("data-creative-direction");
    const photography = this.getAttribute("data-photography");
    const fashionDirection = this.getAttribute("data-fashion-direction");
    const hairAndMakeup = this.getAttribute("data-hair-and-makeup");
    const fashionModel = this.getAttribute("data-fashion-model");
    const href = this.getAttribute("data-href");

    this.outerHTML = `
        <div class="photoshoot__information" id="photoshootInformation${id}">
        <a class="h5 h5--not-responsive" href="#" id="photoshootTitle${id}">
          ${title}
        </a>
        <div class="photoshoot__description">
          <div class="photoshoot__name">
            <div class="text-left">
              <p class="body-normal font-light">
              Creative Direction
            </p>
            </div>
            <p class="body-normal font-medium">${creativeDirection}</p>
          </div>
          <div class="photoshoot__name">
            <div class="text-left">
              <p class="body-normal font-light">Photography</p>
            </div>
            <p class="body-normal font-medium">${photography}</p>
          </div>
          <div class="photoshoot__name">
            <div class="text-left">
              <p class="body-normal font-light "> Fashion Direction </p>
            </div>
            <p class="body-normal font-medium">${fashionDirection}</p>
          </div>
          <div class="photoshoot__name">
            <div class="text-left"><p class="body-normal font-light">
              Hair & Makeup</p>
          </div>
            <p class="body-normal font-medium">${hairAndMakeup}</p>
          </div>
          <div class="photoshoot__name">
            <div class="text-left">
              <p class="body-normal font-light">Model</p>
            </div>
            <p class="body-normal font-medium">${fashionModel}</p>
          </div>
        </div>
        <div class="button-link-text">
          <a class="button-normal" href="${href}">View more</a>
        </div>
      </div>
      `;
  }
}
customElements.define("photoshoot-information", PhotoshootInformation);
