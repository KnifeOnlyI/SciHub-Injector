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
import {PageInjectorCochraneLibrary} from './util/cochrane-library/page-injector-cochrane-library';
import {PageAnalyzerCochraneLibrary} from './util/cochrane-library/page-analyzer-cochrane-library';
import {PageInjectorGoogleScholar} from './util/google-scholar/page-injector-google-scholar';
import {PageAnalyzerGoogleScholar} from './util/google-scholar/page-analyzer-google-scholar';
import {PageInjectorIeee} from './util/ieee/page-injector-ieee';
import {PageAnalyzerIeee} from './util/ieee/page-analyzer-ieee';
import {PageInjectorBmj} from './util/bmj/page-injector-bmj';
import {PageAnalyzerBmj} from './util/bmj/page-analyzer-bmj';
import {PageInjectorEureka} from './util/eureka/page-injector-eureka';
import {PageAnalyzerEureka} from './util/eureka/page-analyzer-eureka';

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
  } else if (url.includes('cochranelibrary.com')) {
    new PageInjectorCochraneLibrary(new PageAnalyzerCochraneLibrary(), config, {url}).inject();
  } else if (url.includes('scholar.google.com')) {
    new PageInjectorGoogleScholar(new PageAnalyzerGoogleScholar(), config).inject();
  } else if (url.includes('ieeexplore.ieee.org')) {
    new PageInjectorIeee(new PageAnalyzerIeee(), config).inject();
  } else if (url.includes('bmj.com')) {
    new PageInjectorBmj(new PageAnalyzerBmj(), config).inject();
  } else if (url.includes('eurekaselect.com')) {
    new PageInjectorEureka(new PageAnalyzerEureka(), config, {url}).inject();
  }
}

addSciHubLink();
