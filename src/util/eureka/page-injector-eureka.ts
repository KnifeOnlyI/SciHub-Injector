import {BasePageInjector} from '../../core/base-page-injector';

/**
 * Injector for Eureka websites
 */
export class PageInjectorEureka extends BasePageInjector {
  protected injectIfValid(): void {
    (this.target as HTMLElement).innerHTML += `
    <a class="btn btn-light bg-white btn-sm" href="${this.scihubUrl}" title="${this.config.sciHubLinkTitle}">
    <img class="inst-icon" src="${this.config.sciHubIcon}" style="width: 1.0rem; height: 1.0rem;" alt="${this.config.sciHubLogoAlt}">
      ${this.config.sciHubLinkText}
    </a>`;
  }
}
