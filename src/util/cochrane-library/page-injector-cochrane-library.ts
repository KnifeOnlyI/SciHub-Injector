import {BasePageInjector} from '../../core/base-page-injector';

/**
 * Injector for Cochrane Library websites
 */
export class PageInjectorCochraneLibrary extends BasePageInjector {
  protected injectIfValid(): void {
    const targetChildren = [];
    const target = this.target as HTMLElement;

    for (let i = 0; i < target.children.length; i++) {
      targetChildren.push(target.children[i]);
    }

    target.innerHTML = '';

    target.appendChild(targetChildren[0]);

    target.innerHTML += `
    <a href="${this.scihubUrl}" class="unlock" title="${this.config.sciHubLinkTitle}"> 
      <i class="icon fa fa-chevron-right"></i>
      <img class="inst-icon" src="${this.config.sciHubIcon}" style="width: 1.0rem; height: 1.0rem;" alt="${this.config.sciHubLogoAlt}">
      &nbsp;
      ${this.config.sciHubLinkText}
    </a>`;

    for (let i = 1; i < targetChildren.length; i++) {
      target.appendChild(targetChildren[i]);
    }
  }
}
