import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// Two builds share this source. The default build is the app on
// build.pwavwe.com. `--mode site` builds the public Studio pages that
// scripts/prerender.mjs turns into static HTML under pwavwe.com/studio.
export default defineConfig(({ mode, isSsrBuild }) => {
  const site = mode === 'site';
  return {
    plugins: [react()],
    base: site ? '/studio/' : '/',
    define: site ? { 'import.meta.env.VITE_BUILD_TARGET': JSON.stringify('site') } : {},
    build: {
      target: 'es2022',
      sourcemap: false,
      outDir: site ? 'dist-site' : 'dist',
      rollupOptions: {
        input: site ? 'site.html' : 'index.html',
        output: isSsrBuild ? {} : {
          manualChunks: site
            ? { react: ['react', 'react-dom', 'react-router-dom'] }
            : {
                react: ['react', 'react-dom', 'react-router-dom'],
                firebase: ['firebase/app', 'firebase/auth', 'firebase/functions'],
              },
        },
      },
    },
    test: {
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
      exclude: ['src/test/firestore.rules.emulator.test.ts', 'node_modules/**', 'dist/**', 'dist-site/**'],
      css: true,
    },
  };
});
