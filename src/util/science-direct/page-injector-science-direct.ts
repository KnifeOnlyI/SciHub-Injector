import {BasePageInjector} from '../../core/base-page-injector';

/**
 * Injector for science direct websites
 */
export class PageInjectorScienceDirect extends BasePageInjector {
  protected injectIfValid(): void {
    setTimeout(() => {
      this.target.innerHTML += `
      <li class="RemoteAccessButton" id="RemoteAccessButton">
        <a class="link-button link-button-primary" role="button" href="${this.scihubUrl}" title="${this.config.sciHubLinkTitle}">
          <span class="link-button-text">
            <img class="inst-icon" src="${this.config.sciHubIcon}" alt="${this.config.sciHubLogoAlt}">
            <span class="remote-access-button-text">
              <p class="access-text">${this.config.sciHubLinkText}</p>
            </span>
          </span>
        </a>
      </li>`;
    }, 1000);
  }
}
