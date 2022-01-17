import {PageAnalyzerInterface} from '../../core/page-analyzer.interface';

/**
 * Represent a page analyzer for Taylor & Francis websites
 */
export class PageAnalyzerTandfonline implements PageAnalyzerInterface {
  getDOI(): string {
    return document.querySelector('.dx-doi > a').textContent.split('.org/')[1];
  }

  getTargetHTML(): HTMLElement {
    return document.querySelector('ul[role="tablist"]');
  }
}
