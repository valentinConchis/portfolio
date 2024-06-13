import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve("index.html"),
                contact: resolve("./contact.html"),
                formation: resolve("./formation.html"),
                competences: resolve("./competences.html"),
            },
        },
    },
});
