import {PageAnalyzerSpringerLink} from '../page-analyzer-springer-link';

/**
 * Represent a page analyzer for springer link (general) websites
 */
export class PageAnalyzerSpringerLinkGeneral extends PageAnalyzerSpringerLink {
  getTargetHTML(): HTMLElement {
    return document.querySelector('.c-notes__text');
  }
}
