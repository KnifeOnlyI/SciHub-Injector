# Sci-Hub injector extension

## Supported sites

- PubMed
- Nature
- Science Direct
- Taylor & Francis
- Springer Link (article, book, chapter, protocol, reference work)
- Cochrane Library
- Google scholar
- IEEE
- BMJ
- Eureka

### Journal screenshots

![Pubmed journal with added Sci-Hub button](resources/journal-screenshots/pubmed.PNG)
![Nature journal with added Sci-Hub button](resources/journal-screenshots/nature.PNG)
![Science direct journal with added Sci-Hub button](resources/journal-screenshots/science-direct.PNG)
![Taylor & Francis journal with added Sci-Hub button](resources/journal-screenshots/tandfonline.PNG)
![Springer Link (article) journal with added Sci-Hub button](resources/journal-screenshots/springer-link-article.PNG)
![Springer Link (book, chapter, protocol, reference work) journal with added Sci-Hub button](resources/journal-screenshots/springer-link-general.PNG)
![Cochrane Library](resources/journal-screenshots/cochrane-library.PNG)
![Google scholar](resources/journal-screenshots/google-scholar.PNG)
![IEEE](resources/journal-screenshots/ieee.PNG)
![BMJ](resources/journal-screenshots/bmj.PNG)
![Eureka](resources/journal-screenshots/eureka.PNG)

## Development

### Commands

Build for production

```bash
npm run build
```

Build for development (with file watcher)

```bash
npm run build:dev
```

### Add new journal site

1. Add matches to `manifest.json`
2. Add page analyzer (`src/util/`)
3. Add page injector (`src/util/`)
4. Add using of the new created page injector (`src/index.ts`)
5. Update README.md (`Supported sites`, `Journal screenshots`, `Examples url for testing`)

## Usage and tests

### On firefox

1. Unzip file (if you use a release files)
2. Open Firefox
3. Enter `about:debugging` in the URL bar
4. Click `This firefox`
5. Click `Load temporary Add-on`
6. Open the extension's directory and select `manifest.json` file

### On chrome

1. Unzip file (if you use a release files)
2. Open Chrome
3. Enable `Developer mode` by ticking the checkbox in the upper-right corner.
4. Enter `chrome://extensions`
5. Click `Load unpacked extension`
6. Select the extension's directory

### Examples url for testing :

- PubMed : https://pubmed.ncbi.nlm.nih.gov/28673424
- Nature : https://www.nature.com/articles/144672b0
- Science Direct : https://www.sciencedirect.com/science/article/abs/pii/S187943781630016X
- Taylor & Francis : https://www.tandfonline.com/doi/abs/10.1080/00220671.1972.10884418
- Springer Link (Article) : https://link.springer.com/article/10.1007/s40278-018-42901-5
- Springer Link (Book, Chapter, Protocol, Reference Work) : https://link.springer.com/book/10.1007/978-3-642-14691-6
- Cochrane Library : https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD006403.pub2/full
- Google scholar : https://scholar.google.com/scholar?hl=fr&as_sdt=0%2C5&q=measles+systematic+review&btnG=&oq=measles+syst
- IEEE : https://ieeexplore.ieee.org/abstract/document/5976510
- BMJ : https://www.bmj.com/content/373/bmj.n1162
- Eureka : https://www.eurekaselect.com/article/81932

## Contributing

Feel free to make a pull requests !
