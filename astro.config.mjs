// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
    server: {
        host: true,
    },
    vite: {
        server: {
            watch: {
                usePolling: true,
                interval: 100,
            },
        },
    },
});