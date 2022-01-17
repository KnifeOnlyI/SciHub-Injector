import {BasePageInjector} from '../../core/base-page-injector';

/**
 * Injector for Taylor & Francis websites
 */
export class PageInjectorTandfonline extends BasePageInjector {
  protected injectIfValid(): void {
    this.target.innerHTML += `
    <li role="tab" aria-selected="false" aria-expanded="false">
      <a class="grant-access" href="${this.scihubUrl}" title="Access on ${this.config.sciHubName}">Access on ${this.config.sciHubName}</a>
    </li>`;
  }
}
