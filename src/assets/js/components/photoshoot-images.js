class PhotoshootImages extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const image1 = this.getAttribute("data-image-1");
    const image2 = this.getAttribute("data-image-2");
    const image3 = this.getAttribute("data-image-3");
    const id = this.getAttribute("id");

    this.outerHTML = `
      <div class="photoshoot__images" id="photoshootImgList${id}">
        <div class="photoshoot__image">
          <img src="${image1}" alt="photoshoot" />
        </div>
        <div class="photoshoot__image">
          <img src="${image2}" alt="photoshoot" />
        </div>
        <div class="photoshoot__image">
          <img src="${image3}" alt="photoshoot" />
        </div>
      </div>
      `;
  }
}
customElements.define("photoshoot-images", PhotoshootImages);
