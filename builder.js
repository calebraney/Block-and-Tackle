require('esbuild')
  .build({
    entryPoints: ['src/cursor.js', 'src/search.js', 'src/slider.js'],
    bundle: true,
    minify: true,
    watch: true,
    sourcemap: false,
    outdir: 'dist/',
  })
  .catch(() => ProcessingInstruction.exit(1));
