import {PageInjectorInterface} from './page-injector.interface';
import {PageAnalyzerInterface} from './page-analyzer.interface';
import {ConfigurationInterface} from './configuration.interface';

/**
 * The base page injector
 */
export abstract class BasePageInjector implements PageInjectorInterface {
  /** The DOI */
  protected doi: string | undefined;

  /** The HTML target element where inject Sci-Hub URL */
  protected target: HTMLElement | undefined;

  /** The Sci-Hub URL to inject in the page */
  protected scihubUrl: string;

  /**
   * Create a new page injector
   *
   * @param analyzer The page analyzer to use
   * @param config The configuration to use
   * @param customData The custom data to use (optional)
   */
  constructor(
    protected readonly analyzer: PageAnalyzerInterface,
    protected readonly config?: ConfigurationInterface,
    protected readonly customData?: any
  ) {
    this.doi = analyzer.getDOI(customData);
    this.target = analyzer.getTargetHTML(customData);
    this.scihubUrl = `${config.scihubUrl}/${this.doi}`;
  }

  inject(): void {
    if (this.doi && this.target && this.scihubUrl) {
      this.injectIfValid();
    }
  }

  /**
   * Inject the Sci-Hub url if we can (all data are availables)
   */
  protected abstract injectIfValid(): void;
}
