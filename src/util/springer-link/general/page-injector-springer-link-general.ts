import {PageInjectorSpringerLink} from '../page-injector-springer-link';

/**
 * Injector for springer link (general) websites
 */
export class PageInjectorSpringerLinkGeneral extends PageInjectorSpringerLink {
  protected injectIfValid(): void {
    (this.target as HTMLElement).innerHTML += `
    &nbsp;or read on <a href="${this.scihubUrl}">Sci-Hub</a>.`;
  }
}
