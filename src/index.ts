import * as config from '../config/config.json';

import {PageAnalyzerNature} from './util/nature/page-analyzer-nature';
import {PageInjectorNature} from './util/nature/page-injector-nature';
import {PageInjectorPubmed} from './util/pubmed/page-injector-pubmed';
import {PageAnalyzerPubmed} from './util/pubmed/page-analyzer-pubmed';
import {PageAnalyzerScienceDirect} from './util/science-direct/page-analyzer-science-direct';
import {PageInjectorScienceDirect} from './util/science-direct/page-injector-science-direct';

function addSciHubLink() {
  const url = document.location.href;

  if (url.includes('pubmed.ncbi.nlm.nih.gov')) {
    new PageInjectorPubmed(new PageAnalyzerPubmed(), config).inject();
  } else if (url.includes('nature.com')) {
    new PageInjectorNature(new PageAnalyzerNature(), config).inject();
  } else if (url.includes('sciencedirect.com')) {
    new PageInjectorScienceDirect(new PageAnalyzerScienceDirect(), config).inject();
  }
}

addSciHubLink();
