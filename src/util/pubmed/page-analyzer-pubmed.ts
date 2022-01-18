import {PageAnalyzerInterface} from '../../core/page-analyzer.interface';

/**
 * Represent a page analyzer for pubmed websites
 */
export class PageAnalyzerPubmed implements PageAnalyzerInterface {
  getDOI(): string {
    return (document.querySelector('.identifier.doi > a') as HTMLElement)?.innerText;
  }

  getTargetHTML(): HTMLElement {
    return document.querySelector('.full-text-links-list');
  }
}
