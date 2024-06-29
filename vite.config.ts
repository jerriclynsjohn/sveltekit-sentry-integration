import { sentrySvelteKit } from "@sentry/sveltekit";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';


export default defineConfig({
    plugins: [sentrySvelteKit({
        debug: true,
        sourceMapsUploadOptions: {
            telemetry: false,
            org: "zipper-school",
            project: "sourcemap",
            authToken: process.env.SENTRY_AUTH_TOKEN,
            sourcemaps: {
                filesToDeleteAfterUpload: [`./svelte-kit/**/*.map`]
            }
            // unstable_sentryVitePluginOptions: {
            //     sourcemaps: {
            //         filesToDeleteAfterUpload: [`./svelte-kit/**/*.map`]
            //     }
            // }
        },
    }), sveltekit()]
});