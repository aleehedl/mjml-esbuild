require('esbuild')
  .build({
    bundle: true,
    entryPoints: ['handler.ts'],
    minify: false,
    sourcemap: false,
    platform: 'node',
    target: ['node14'],
    outdir: 'dist',
  })
  .then(console.log);
