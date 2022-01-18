import {BasePageInjector} from '../../core/base-page-injector';

/**
 * Injector for nature websites
 */
export class PageInjectorNature extends BasePageInjector {
  protected injectIfValid(): void {
    (this.target as HTMLElement).innerHTML += `
    <div class="js-access-button">
			<a href="${this.scihubUrl}" class="c-article__button" title="${this.config.sciHubLinkTitle}">
				<img style="width: 1.5rem; height: 1.5rem;" aria-hidden="true" src="${this.config.sciHubIcon}" alt="${this.config.sciHubLogoAlt}"/>
				<span class="c-article__button-text" style="margin-left: 8px;">${this.config.sciHubLinkText}</span>
			</a>
	  </div>`;
  }
}
