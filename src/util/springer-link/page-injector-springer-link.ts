import {BasePageInjector} from '../../core/base-page-injector';
import {PageAnalyzerInterface} from '../../core/page-analyzer.interface';
import {ConfigurationInterface} from '../../core/configuration.interface';

/**
 * Injector for springer link websites
 */
export abstract class PageInjectorSpringerLink extends BasePageInjector {
  /**
   * Create a new page injector for springer link (article) website
   *
   * @param analyzer The page analyzer to use
   * @param config The configuration to use
   * @param customData The custom data to use
   */
  constructor(
    protected readonly analyzer: PageAnalyzerInterface,
    protected readonly config: ConfigurationInterface,
    protected readonly customData: { url: string }
  ) {
    super(analyzer, config, customData);
  }

  protected abstract injectIfValid(): void;
}

