import {BasePageInjector} from '../../core/base-page-injector';

/**
 * Injector for IEEE websites
 */
export class PageInjectorIeee extends BasePageInjector {
  protected injectIfValid(): void {
    (this.target as HTMLElement).innerHTML += `
    <li class="doc-actions-item">
      <div class="white-blue-border-tooltip alerts-popover">
        <a href="${this.scihubUrl}" class="doc-actions-link stats-document-lh-action-alerts hide-mobile">
          <img class="inst-icon" src="${this.config.sciHubIcon}" style="width: 1.3rem; height: 1.3rem;" alt="${this.config.sciHubLogoAlt}">
          ${this.config.sciHubLinkText}
        </a>
      </div>
    </li>
    `;
  }
}
