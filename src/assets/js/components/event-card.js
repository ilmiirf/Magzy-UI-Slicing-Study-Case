class EventCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const id = this.getAttribute("id");
    const image = this.getAttribute("data-image");
    const title = this.getAttribute("data-title");
    const description = this.getAttribute("data-description");
    const href = this.getAttribute("data-href");
    const date = this.getAttribute("data-date");

    this.outerHTML = `
      <div class="event-list__content" id="${id}">
        <div class="event-list__image">
          <img src="${image}" alt="event" />
        </div>
        <div class="event-list__info">
          <div class="event-list__card">
            <div>
              <h5 class="h4-event-date">${date}</h5>
              <h2 class="display-3">${title}</h2>
              <h5 class="body-lg font-regular">${description}</h5>
            </div>
            <a class="button-link-text button-xl" href="${href}">Get Ticket Now</a>
          </div>
        </div>
        <div class="event-list__addition">
          <infinite-scroll></infinite-scroll>
        </div>
      </div>
      `;
  }
}
customElements.define("event-card", EventCard);
