import * as config from '../config/config.json';

import {PageAnalyzerNature} from './util/nature/page-analyzer-nature';
import {PageInjectorNature} from './util/nature/page-injector-nature';
import {PageInjectorPubmed} from './util/pubmed/page-injector-pubmed';
import {PageAnalyzerPubmed} from './util/pubmed/page-analyzer-pubmed';
import {PageAnalyzerScienceDirect} from './util/science-direct/page-analyzer-science-direct';
import {PageInjectorScienceDirect} from './util/science-direct/page-injector-science-direct';
import {PageInjectorTandfonline} from './util/tandfonline/page-injector-tandfonline';
import {PageAnalyzerTandfonline} from './util/tandfonline/page-analyzer-tandfonline';
import {PageInjectorSpringerLinkArticle} from './util/springer-link/article/page-injector-springer-link-article';
import {PageAnalyzerSpringerLinkArticle} from './util/springer-link/article/page-analyzer-springer-link-article';
import {PageInjectorSpringerLinkGeneral} from './util/springer-link/general/page-injector-springer-link-general';
import {PageAnalyzerSpringerLinkGeneral} from './util/springer-link/general/page-analyzer-springer-link-general';

function addSciHubLink() {
  const url = document.location.href;

  if (url.includes('pubmed.ncbi.nlm.nih.gov')) {
    new PageInjectorPubmed(new PageAnalyzerPubmed(), config).inject();
  } else if (url.includes('nature.com')) {
    new PageInjectorNature(new PageAnalyzerNature(), config).inject();
  } else if (url.includes('sciencedirect.com')) {
    new PageInjectorScienceDirect(new PageAnalyzerScienceDirect(), config).inject();
  } else if (url.includes('tandfonline.com')) {
    new PageInjectorTandfonline(new PageAnalyzerTandfonline(), config).inject();
  } else if (url.includes('link.springer.com')) {
    if (url.includes('article')) {
      new PageInjectorSpringerLinkArticle(new PageAnalyzerSpringerLinkArticle(), config, {url}).inject();
    } else if (
      url.includes('book') ||
      url.includes('chapter') ||
      url.includes('protocol') ||
      url.includes('referencework')
    ) {
      new PageInjectorSpringerLinkGeneral(new PageAnalyzerSpringerLinkGeneral(), config, {url}).inject();
    }
  }
}

addSciHubLink();
