class InfiniteScroll extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
      <div class="infinite-scroll">
        <ul>
          <li>
            <span class="thunder-lc-light-48">FREE ENTRY</span>
            <icon-bullet></icon-bullet>
          </li>
           <li>
            <span class="thunder-lc-light-48">FREE ENTRY</span>
            <icon-bullet></icon-bullet>
          </li>
          <li>
            <span class="thunder-lc-light-48">FREE ENTRY</span>
            <icon-bullet></icon-bullet>
          </li>
          <li>
            <span class="thunder-lc-light-48">FREE ENTRY</span>
            <icon-bullet></icon-bullet>
          </li>
          <li>
            <span class="thunder-lc-light-48">FREE ENTRY</span>
            <icon-bullet></icon-bullet>
          </li>
          <li>
            <span class="thunder-lc-light-48">FREE ENTRY</span>
            <icon-bullet></icon-bullet>
          </li>
          <li>
            <span class="thunder-lc-light-48">FREE ENTRY</span>
            <icon-bullet></icon-bullet>
          </li>
          <li>
            <span class="thunder-lc-light-48">FREE ENTRY</span>
            <icon-bullet></icon-bullet>
          </li>
           <li>
            <span class="thunder-lc-light-48">FREE ENTRY</span>
            <icon-bullet></icon-bullet>
          </li>
          <li>
            <span class="thunder-lc-light-48">FREE ENTRY</span>
            <icon-bullet></icon-bullet>
          </li>
        </ul>
        <ul>
          <li>
            <span class="thunder-lc-light-48">FREE ENTRY</span>
            <icon-bullet></icon-bullet>
          </li>
          <li>
            <span class="thunder-lc-light-48">FREE ENTRY</span>
            <icon-bullet></icon-bullet>
          </li>
           <li>
            <span class="thunder-lc-light-48">FREE ENTRY</span>
            <icon-bullet></icon-bullet>
          </li>
          <li>
            <span class="thunder-lc-light-48">FREE ENTRY</span>
            <icon-bullet></icon-bullet>
          </li>
          <li>
            <span class="thunder-lc-light-48">FREE ENTRY</span>
            <icon-bullet></icon-bullet>
          </li>
          <li>
            <span class="thunder-lc-light-48">FREE ENTRY</span>
            <icon-bullet></icon-bullet>
          </li>
          <li>
            <span class="thunder-lc-light-48">FREE ENTRY</span>
            <icon-bullet></icon-bullet>
          </li>
          <li>
            <span class="thunder-lc-light-48">FREE ENTRY</span>
            <icon-bullet></icon-bullet>
          </li>
          <li>
            <span class="thunder-lc-light-48">FREE ENTRY</span>
            <icon-bullet></icon-bullet>
          </li>
          <li>
            <span class="thunder-lc-light-48">FREE ENTRY</span>
            <icon-bullet></icon-bullet>
          </li>
        </ul>
      </div>

      `;
  }
}
customElements.define("infinite-scroll", InfiniteScroll);
