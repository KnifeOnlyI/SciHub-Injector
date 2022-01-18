import {PageAnalyzerInterface} from '../../core/page-analyzer.interface';

/**
 * Represent a page analyzer for google scholar websites
 */
export class PageAnalyzerGoogleScholar implements PageAnalyzerInterface {
  getDOI(customData: { url: string }): Array<string> {
    const dois = new Array<string>();

    document.querySelectorAll('.gs_ri').forEach((articleBlock) => {
      const doiElements = articleBlock.children[0].children;

      dois.push((doiElements[doiElements.length - 1] as HTMLAnchorElement).href);
    });

    return dois;
  }

  getTargetHTML(): Array<HTMLElement> {
    const targets = new Array<HTMLElement>();

    document.querySelectorAll('.gs_ri').forEach((articleBlock) => {
      targets.push(articleBlock.children[3] as HTMLElement);
    });

    return targets;
  }
}
