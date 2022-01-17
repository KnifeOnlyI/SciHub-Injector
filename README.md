# Sci-Hub injector extension

## Supported sites

- PubMed
- Nature

## Contributing

### Commands

Build for production

```bash
npm run build
```

Build for development (with file watcher)

```bash
npm run build:dev
```

## Tests

### For testing on firefox

1. Open Firefox
2. Enter `about:debugging` in the URL bar
3. Click `This firefox`
4. Click `Load temporary Add-on`
5. Open the extension's directory and select `manifest.json` file

### For testing on Chrome

1. Open Chrome
2. Enable `Developer mode` by ticking the checkbox in the upper-right corner.
3. Enter `chrome://extensions`
4. Click `Load unpacked extension`
5. Select the extension's directory

### Examples url for testing :

- PubMed : https://pubmed.ncbi.nlm.nih.gov/28673424
- Nature : https://www.nature.com/articles/144672b0
