import {BasePageInjector} from '../../core/base-page-injector';

/**
 * Injector for science direct websites
 */
export class PageInjectorScienceDirect extends BasePageInjector {
  protected injectIfValid(): void {
    setTimeout(() => {
      (this.target as HTMLElement).innerHTML += `
      <li class="RemoteAccess">
        <a class="link-button RemoteAccessButton accessbar-utility-component accessbar-utility-link link-button-primary" href="${this.scihubUrl}" title="${this.config.sciHubLinkTitle}">
          <img class="inst-icon" src="${this.config.sciHubIcon}" alt="${this.config.sciHubLogoAlt}">
          <span style="margin-left: 45px" class="link-button-text">${this.config.sciHubLinkText}</span>
        </a>
      </li>`;
    }, 1000);
  }
}
