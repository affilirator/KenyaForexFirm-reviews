import * as pagefind from 'pagefind';

export const pagefindIndex = async () => {
  const { index } = await pagefind.createIndex({
    rootSelector: 'html',
    excludeSelectors: ['.my-code-blocks'],
    forceLanguage: 'en',
    keepIndexUrl: false,
    writePlayground: false,
    verbose: false,
    logfile: 'debug.log',
  });
  if (!index) {
    throw new Error('Failed to create Pagefind index');
  }

  // Index all HTML files in a directory
  await index?.addDirectory({
    path: './dist',
    glob: '**/*.{html}',
  });

  // Get the index files in-memory
  const { files } = await index?.getFiles();

  // Or, write the index to disk
  await index?.writeFiles({
    outputPath: 'public/pagefind',
  });
};

// Create a Pagefind search index to work with
const { index } = await pagefind.createIndex();
if (!index) {
  throw new Error('Failed to create Pagefind index');
}

// Index all HTML files in a directory
await index?.addDirectory({
  path: './dist',
});

// Add extra content
/*
await index?.addCustomRecord({
  url: '/resume.pdf',
  content: 'Aenean lacinia bibendum nulla sed consectetur',
  language: 'en',
});
*/

// Get the index files in-memory
const { files } = await index?.getFiles();

// Or, write the index to disk
await index?.writeFiles({
  outputPath: 'public/pagefind',
});
