import {BasePageInjector} from '../../core/base-page-injector';

/**
 * Injector for nature websites
 */
export class PageInjectorNature extends BasePageInjector {
  protected injectIfValid(): void {
    console.log(this.createDiv());

    this.target.appendChild(this.createDiv());
  }

  /**
   * Create the span with "Access on Sci-Hub" text
   *
   * @return HTMLSpanElement The new HTML element created
   */
  private createSpan(): HTMLSpanElement {
    const span = document.createElement('span');

    span.innerText = `Access on ${this.config.sciHubName}`;
    span.classList.add('c-article__button-text');
    span.style.marginLeft = '8px';

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
    image.style.width = '1.5rem';
    image.style.height = '1.5rem';

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
    element.classList.add('c-article__button');

    element.appendChild(this.createImage());
    element.appendChild(this.createSpan());

    return element;
  }

  /**
   * Create the wrapper div button element
   *
   * @return HTMLDivElement The new HTML element created
   */
  private createDiv(): HTMLDivElement {
    const element = document.createElement('div');

    element.classList.add('js-access-button');

    element.appendChild(this.createLink());

    return element;
  }
}
