import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                exemple: resolve(__dirname, "./pages/exemple.html"),
                contact: resolve(__dirname, "./contact.html"),
                ...
                ...
            },
        },
    },
});
