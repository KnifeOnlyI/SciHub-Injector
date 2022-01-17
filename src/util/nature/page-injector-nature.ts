import {BasePageInjector} from '../../core/base-page-injector';

/**
 * Injector for nature websites
 */
export class PageInjectorNature extends BasePageInjector {
  protected injectIfValid(): void {
    this.target.innerHTML += `
    <div class="js-access-button">
			<a href="${this.scihubUrl}" class="c-article__button">
				<img style="width: 1.5rem; height: 1.5rem;" aria-hidden="true" src="${this.config.sciHubIcon}" alt="${this.config.sciHubLogoAlt}"/>
				<span class="c-article__button-text" style="margin-left: 8px;">Access on ${this.config.sciHubName}</span>
			</a>
	  </div>`;
  }
}
