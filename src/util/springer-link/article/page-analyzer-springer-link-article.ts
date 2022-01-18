import {PageAnalyzerSpringerLink} from '../page-analyzer-springer-link';

/**
 * Represent a page analyzer for springer link (article) websites
 */
export class PageAnalyzerSpringerLinkArticle extends PageAnalyzerSpringerLink {
  getTargetHTML(): HTMLElement {
    return document.querySelector('.c-article-info-details');
  }
}
