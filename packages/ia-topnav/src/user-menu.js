import { html } from 'lit';
import DropdownMenu from './dropdown-menu';
import userMenuCSS from './styles/user-menu';

class UserMenu extends DropdownMenu {
  static get styles() {
    return [DropdownMenu.styles, userMenuCSS];
  }

  static get properties() {
    const props = {
      ...DropdownMenu.properties,
      username: { type: String },
      screenName: { type: String },
    };
    return props;
  }

  constructor() {
    super();
    this.username = '';
  }

  render() {
    return html`
      <div class="nav-container">
        <nav
          class="${this.menuClass}"
          aria-hidden="${this.ariaHidden}"
          aria-expanded="${this.ariaExpanded}"
        >
          <h3>${this.screenName}</h3>
          <ul>
            ${this.dropdownItems}
          </ul>
        </nav>
      </div>
    `;
  }
}

customElements.define('user-menu', UserMenu);
