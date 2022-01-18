import {PageAnalyzerInterface} from '../../core/page-analyzer.interface';

/**
 * Represent a page analyzer for IEEE websites
 */
export class PageAnalyzerIeee implements PageAnalyzerInterface {
  getDOI(): string {
    return (document.querySelector('.stats-document-abstract-doi > a') as HTMLElement)?.innerText;
  }

  getTargetHTML(): HTMLElement {
    return document.querySelector('.doc-actions.doc-toolbar.stats-document-lh-actions.black-tooltip');
  }
}
