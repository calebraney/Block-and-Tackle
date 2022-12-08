require('esbuild')
  .build({
    entryPoints: ['src/index.js', 'src/projects.js'],
    bundle: true,
    minify: true,
    watch: true,
    sourcemap: false,
    outdir: 'dist/',
  })
  .catch(() => ProcessingInstruction.exit(1));
