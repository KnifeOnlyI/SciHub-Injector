import {PageAnalyzerInterface} from '../../core/page-analyzer.interface';

/**
 * Represent a page analyzer for Cochrane Library websites
 */
export class PageAnalyzerCochraneLibrary implements PageAnalyzerInterface {
  getDOI(customData: { url: string }): string {
    return decodeURIComponent(customData.url).match(/10.+\/.+\//)?.[0];
  }

  getTargetHTML(): HTMLElement {
    return document.querySelector('nav.article-navigation');
  }
}
