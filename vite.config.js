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
                competence1: resolve("competence1.html"),
                competence2: resolve("./competence2.html"),
                competence3: resolve("./competence3.html"),
                competence4: resolve("./competence4.html"),
                competence5: resolve("./competence5.html"),
                competence6: resolve("./competence6.html"),
            },
        },
    },
});
