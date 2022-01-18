import {PageInjectorSpringerLink} from '../page-injector-springer-link';

/**
 * Injector for springer link (general) websites
 */
export class PageInjectorSpringerLinkGeneral extends PageInjectorSpringerLink {
  protected injectIfValid(): void {
    (this.target as HTMLElement).innerHTML += `
    <a href="${this.scihubUrl}" class="buybox__buy-button c-button c-button--blue" style="color: white">
      <img style="width: 1.5rem; height: 1.5rem;" aria-hidden="true" src="${this.config.sciHubIcon}" alt="${this.config.sciHubLogoAlt}"/>
      <span class="c-article__button-text" style="margin-left: 8px;">${this.config.sciHubLinkText}</span>
    </a>`;
  }
}
