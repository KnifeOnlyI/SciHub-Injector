import {BasePageInjector} from '../../core/base-page-injector';

/**
 * Injector for BMJ websites
 */
export class PageInjectorBmj extends BasePageInjector {
  protected injectIfValid(): void {
    (this.target as HTMLElement).innerHTML += `
    &nbsp;
    <a href="${this.scihubUrl}" class="citation-rr-link" title="${this.config.sciHubLinkTitle}">
      <img class="inst-icon" src="${this.config.sciHubIcon}" style="width: 2.0rem; height: 2.0rem;" alt="${this.config.sciHubLogoAlt}">
      ${this.config.sciHubLinkText}
    </a>`;
  }
}
