import {PageAnalyzerInterface} from '../../core/page-analyzer.interface';

/**
 * The base page analyzer for springer link websites
 */
export abstract class PageAnalyzerSpringerLink implements PageAnalyzerInterface {
  getDOI(customData?: { url: string }): string | undefined {
    return decodeURIComponent(customData.url).match(/10.+?[^#]+/)?.[0];
  }

  abstract getTargetHTML(customData?: any): HTMLElement | undefined;
}
