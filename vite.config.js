import { resolve } from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

import react from '@vitejs/plugin-react';

// Importação do módulo path
export default defineConfig({
  plugins: [react(), checker({ typescript: false })],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
