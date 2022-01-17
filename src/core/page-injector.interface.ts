import {PageAnalyzerInterface} from './page-analyzer.interface';
import {ConfigurationInterface} from './configuration.interface';

/**
 * Represent an page injector
 */
export interface PageInjectorInterface {
  /**
   * Inject the content into the page
   *
   * @param analyzer The page analyzer to use
   * @param config The configuration to use
   * @param customData The custom data to use (optional)
   */
  inject(analyzer: PageAnalyzerInterface, config?: ConfigurationInterface, customData?: any): void;
}
