import {PageInjectorSpringerLink} from '../page-injector-springer-link';

/**
 * Injector for springer link (article) websites
 */
export class PageInjectorSpringerLinkArticle extends PageInjectorSpringerLink {
  protected injectIfValid(): void {
    this.target.innerHTML += `
    <a class="c-article-info-details__cite-as" href="${this.scihubUrl}" title="${this.config.sciHubLinkTitle}">
      <img src="${this.config.sciHubIcon}" width=24 height=24 style="vertical-align:bottom" alt="${this.config.sciHubLogoAlt}"/>
      ${this.config.sciHubLinkText}
    </a>`;
  }
}
