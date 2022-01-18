import {PageAnalyzerInterface} from '../../core/page-analyzer.interface';

/**
 * Represent a page analyzer for BMJ websites
 */
export class PageAnalyzerBmj implements PageAnalyzerInterface {
  getDOI(): string {
    return ((document.querySelector('.highwire-cite-doi'))?.children[0] as HTMLAnchorElement).href;
  }

  getTargetHTML(): HTMLElement {
    return document.querySelector('.panel-pane.pane-bmj-article-buttons .pane-content');
  }
}
