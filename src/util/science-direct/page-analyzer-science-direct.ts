import {PageAnalyzerInterface} from '../../core/page-analyzer.interface';

/**
 * Represent a page analyzer for science direct websites
 */
export class PageAnalyzerScienceDirect implements PageAnalyzerInterface {
  getDOI(): string {
    return document.querySelector('.doi').textContent.split('.org/')[1];
  }

  getTargetHTML(): HTMLElement {
    return document.querySelector('.toolbar-buttons > ul');
  }
}
