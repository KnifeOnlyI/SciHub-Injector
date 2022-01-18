import {BasePageInjector} from '../../core/base-page-injector';

/**
 * Injector for Taylor & Francis websites
 */
export class PageInjectorTandfonline extends BasePageInjector {
  protected injectIfValid(): void {
    (this.target as HTMLElement).innerHTML += `
    <li role="tab" aria-selected="false" aria-expanded="false">
      <a class="grant-access" href="${this.scihubUrl}" title="Access on ${this.config.sciHubName}">
        <img style="width: 0.8rem; height: 0.8rem;" aria-hidden="true" src="${this.config.sciHubIcon}" alt="${this.config.sciHubLogoAlt}"/>
        ${this.config.sciHubLinkText}
      </a>
    </li>`;
  }
}
