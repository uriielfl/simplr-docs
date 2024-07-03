import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import { resolve } from 'path'; // Importação do módulo path
export default defineConfig({
    plugins: [react(), checker({ typescript: false })],
    base: '/simplr-docs',
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
});
