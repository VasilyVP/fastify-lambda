import { build } from 'esbuild';

build({
  entryPoints: ['src/**/*.ts'],
  outdir: 'build',
  format: 'esm',
  platform: 'node',
  target: 'node22',
  bundle: true,
  packages: 'external',
  outExtension: { '.js': '.mjs' },
});
