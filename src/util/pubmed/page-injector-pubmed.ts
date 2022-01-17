import {BasePageInjector} from '../../core/base-page-injector';

/**
 * Injector for pubmed websites
 */
export class PageInjectorPubmed extends BasePageInjector {
  protected injectIfValid(): void {
    this.target.appendChild(this.createLink());
  }

  /**
   * Create the span with "Sci-Hub" text
   *
   * @return HTMLSpanElement The new HTML element created
   */
  private createSpan(): HTMLSpanElement {
    const span = document.createElement('span');

    span.innerText = this.config.sciHubName;

    return span;
  }

  /**
   * Create the image with Sci-Hub logo
   *
   * @return HTMLImageElement The new HTML element created
   */
  private createImage(): HTMLImageElement {
    const image = document.createElement('img');

    image.src = this.config.sciHubIcon;
    image.alt = this.config.sciHubLogoAlt;
    image.width = 24;
    image.height = 24;

    return image;
  }

  /**
   * Create the link to Sci-Hub
   *
   * @return HTMLAnchorElement The new HTML element created
   */
  private createLink(): HTMLAnchorElement {
    const element = document.createElement('a');

    element.href = this.scihubUrl;
    element.classList.add('link-item', 'dialog-focus');
    element.target = '_blank';
    element.rel = 'noopener';
    element.title = `See full text on ${this.config.sciHubName}`;

    element.appendChild(this.createImage());
    element.appendChild(this.createSpan());

    return element;
  }
}
