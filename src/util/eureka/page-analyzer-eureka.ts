import {PageAnalyzerInterface} from '../../core/page-analyzer.interface';

/**
 * Represent a page analyzer for Eureka websites
 */
export class PageAnalyzerEureka implements PageAnalyzerInterface {
  getDOI(customData: { url: string }): string {
    return customData.url;
  }

  getTargetHTML(): HTMLElement {
    return document.querySelector('.col-lg-auto.download-bar.text-sm-center.p-2.mr-md-3.bg-siteblue.rounded');
  }
}
