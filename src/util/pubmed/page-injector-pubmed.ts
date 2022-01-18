import {BasePageInjector} from '../../core/base-page-injector';

/**
 * Injector for pubmed websites
 */
export class PageInjectorPubmed extends BasePageInjector {
  protected injectIfValid(): void {
    (this.target as HTMLElement).innerHTML += `
    <a class="link-item dialog-focus" href="${this.scihubUrl}" target="_blank" rel="noopener" title="title="${this.config.sciHubLinkTitle}"">
      <img src="${this.config.sciHubIcon}" alt="${this.config.sciHubLogoAlt}" width="24" height="24">
      <span>${this.config.sciHubLinkText}</span>
    </a>`;
  }
}
