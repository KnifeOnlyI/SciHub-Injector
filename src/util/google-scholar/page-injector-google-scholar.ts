import {BasePageInjector} from '../../core/base-page-injector';

/**
 * Injector for google scholar websites
 */
export class PageInjectorGoogleScholar extends BasePageInjector {
  protected injectIfValid(): void {
    for (let i = 0; i < this.doi.length; i++) {
      if (this.doi[i]) {
        (this.target as Array<HTMLElement>)[i].innerHTML += `
        <a href="${this.config.scihubUrl}/${this.doi[i]}" class="gs_nph">
          <img class="inst-icon" src="${this.config.sciHubIcon}" style="width: 1.0rem; height: 1.0rem;" alt="${this.config.sciHubLogoAlt}">
          ${this.config.sciHubLinkText}
        </a>
      `;
      }
    }
  }
}
