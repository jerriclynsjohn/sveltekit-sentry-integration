import { sentrySvelteKit } from "@sentry/sveltekit";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { config } from 'dotenv';

config()

export default defineConfig({
    plugins: [sentrySvelteKit({
        debug: true,
        sourceMapsUploadOptions: {
            telemetry: false,
            org: "zipper-school",
            project: "sourcemap",
            authToken: process.env.SENTRY_AUTH_TOKEN,
            // sourcemaps: {
            //     filesToDeleteAfterUpload: [`./**/*.map`]
            // }
            unstable_sentryVitePluginOptions: {
                sourcemaps: {
                    assets: ['.svelte-kit'],
                    filesToDeleteAfterUpload: [`./svelte-kit/**/*.map`]
                }
            }
        },
    }), sveltekit()]
});