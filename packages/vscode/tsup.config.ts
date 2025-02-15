import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/extension.ts'],
  format: ['cjs'],
  target: 'node16',
  outDir: 'dist',
  clean: true,
  bundle: true,
  minify: process.env.NODE_ENV === 'production',
  sourcemap: true,
  dts: true,
  tsconfig: './tsconfig.json',
//   onSuccess: 'pnpm run build:grammar'
})