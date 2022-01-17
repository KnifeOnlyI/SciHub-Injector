import {PageAnalyzerInterface} from '../../core/page-analyzer.interface';

/**
 * Represent a page analyzer for nature websites
 */
export class PageAnalyzerNature implements PageAnalyzerInterface {
  getDOI(): string {
    return document
      .querySelector(
        '.c-bibliographic-information__list-item--doi > p > span.c-bibliographic-information__value'
      )
      .textContent.split('.org/')[1];
  }

  getTargetHTML(): HTMLElement {
    return document.querySelector(
      'aside .c-nature-box.c-nature-box--side.u-hide-print'
    );
  }
}
