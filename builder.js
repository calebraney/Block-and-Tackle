require('esbuild')
  .build({
    entryPoints: ['src/cursor.js', 'src/projects.js'],
    bundle: true,
    minify: true,
    watch: true,
    sourcemap: false,
    outdir: 'dist/',
  })
  .catch(() => ProcessingInstruction.exit(1));
