# Sentry Sourcemaps upload + delete bug

### Config + Error

```ts
export default defineConfig({
    plugins: [sentrySvelteKit({
        debug: true,
        sourceMapsUploadOptions: {
            telemetry: false,
            org: "sample-org",
            project: "sourcemap",
            authToken: process.env.SENTRY_AUTH_TOKEN,
            sourcemaps: {
                filesToDeleteAfterUpload: [`./svelte-kit/**/*.map`]
            }
        },
    }), sveltekit()]
});
```
```bash
[Sentry SvelteKit Plugin] Detected SvelteKit vercel adapter
[Source Maps Plugin] Enabeling source map generation
vite v5.3.2 building SSR bundle for production...
✓ 98 modules transformed.
[sentry-vite-plugin] Debug: Waiting for dependencies on generated files to be freed before deleting...
x Build failed in 4.23s
[Source Maps Plugin] Looking up source maps in /Users/............/CodeBase/TestBase/Svelte/sentry/upload-sourcemap/.svelte-kit/output
[Source Maps Plugin] Flattening source maps
[sentry-vite-plugin] Debug: No `sourcemaps.assets` option provided, falling back to uploading detected build artifacts.
> Found 24 files
> Analyzing 24 sources
> Analyzing completed in 0.026s
> Adding source map references
> Bundling completed in 0.021s
> Bundled 24 files for upload
> Bundle ID: 1c962ae5-34c3-5020-b2d5-a55e6b8eeb26
> Optimizing completed in 0.001s
> Uploading completed in 0.983s
> Uploaded files to Sentry
> Processing completed in 0.45s
> File upload complete (processing pending on server)
> Organization: zipper-school
> Project: sourcemap
> Release: 572ba3bce3414f329700f0f5ff7fa082
> Dist: None
> Upload type: artifact bundle

Source Map Upload Report
  Scripts
    ~/1179ab9f-8021-446d-8010-c8c41fcb5fff-3.js (sourcemap at internal.js.map, debug id 1179ab9f-8021-446d-8010-c8c41fcb5fff)
    ~/199572b9-3da7-4cd5-b860-323b3c15a2cf-0.js (sourcemap at _sentry-release-injection-file.js.map, debug id 199572b9-3da7-4cd5-b860-323b3c15a2cf)
    ~/307a417a-3e1a-4049-aa29-11ea8dd16b47-7.js (sourcemap at layout.svelte.js.map, debug id 307a417a-3e1a-4049-aa29-11ea8dd16b47)
    ~/46e0bb51-ffad-46eb-8d10-1f4ab4a931b8-4.js (sourcemap at ssr.js.map, debug id 46e0bb51-ffad-46eb-8d10-1f4ab4a931b8)
    ~/52f9c181-b447-45f0-9a06-131f2e3f614c-5.js (sourcemap at _server.js.map, debug id 52f9c181-b447-45f0-9a06-131f2e3f614c)
    ~/7c165ca5-709e-4d1b-b9d8-483a11152de2-9.js (sourcemap at _page.svelte.js.map, debug id 7c165ca5-709e-4d1b-b9d8-483a11152de2)
    ~/a232d7b6-1ee5-4f34-b8cf-5dddc1a9a65c-10.js (sourcemap at index.js.map, debug id a232d7b6-1ee5-4f34-b8cf-5dddc1a9a65c)
    ~/abf06399-4103-4360-b840-e4a6374ad440-8.js (sourcemap at _page.svelte.js.map, debug id abf06399-4103-4360-b840-e4a6374ad440)
    ~/bae66a35-3eec-43be-ab49-e3d845cb9f67-6.js (sourcemap at error.svelte.js.map, debug id bae66a35-3eec-43be-ab49-e3d845cb9f67)
    ~/bdc72d9c-6d59-400c-9a20-b852086412f2-1.js (sourcemap at exports.js.map, debug id bdc72d9c-6d59-400c-9a20-b852086412f2)
    ~/e5c5a9b4-9400-4c39-a906-86b84bf93c76-11.js (sourcemap at internal.js.map, debug id e5c5a9b4-9400-4c39-a906-86b84bf93c76)
    ~/f188f204-5d53-48f9-95dc-730a3a4e6d08-2.js (sourcemap at hooks.server.js.map, debug id f188f204-5d53-48f9-95dc-730a3a4e6d08)
  Source Maps
    ~/1179ab9f-8021-446d-8010-c8c41fcb5fff-3.js.map (debug id 1179ab9f-8021-446d-8010-c8c41fcb5fff)
    ~/199572b9-3da7-4cd5-b860-323b3c15a2cf-0.js.map (debug id 199572b9-3da7-4cd5-b860-323b3c15a2cf)
    ~/307a417a-3e1a-4049-aa29-11ea8dd16b47-7.js.map (debug id 307a417a-3e1a-4049-aa29-11ea8dd16b47)
    ~/46e0bb51-ffad-46eb-8d10-1f4ab4a931b8-4.js.map (debug id 46e0bb51-ffad-46eb-8d10-1f4ab4a931b8)
    ~/52f9c181-b447-45f0-9a06-131f2e3f614c-5.js.map (debug id 52f9c181-b447-45f0-9a06-131f2e3f614c)
    ~/7c165ca5-709e-4d1b-b9d8-483a11152de2-9.js.map (debug id 7c165ca5-709e-4d1b-b9d8-483a11152de2)
    ~/a232d7b6-1ee5-4f34-b8cf-5dddc1a9a65c-10.js.map (debug id a232d7b6-1ee5-4f34-b8cf-5dddc1a9a65c)
    ~/abf06399-4103-4360-b840-e4a6374ad440-8.js.map (debug id abf06399-4103-4360-b840-e4a6374ad440)
    ~/bae66a35-3eec-43be-ab49-e3d845cb9f67-6.js.map (debug id bae66a35-3eec-43be-ab49-e3d845cb9f67)
    ~/bdc72d9c-6d59-400c-9a20-b852086412f2-1.js.map (debug id bdc72d9c-6d59-400c-9a20-b852086412f2)
    ~/e5c5a9b4-9400-4c39-a906-86b84bf93c76-11.js.map (debug id e5c5a9b4-9400-4c39-a906-86b84bf93c76)
    ~/f188f204-5d53-48f9-95dc-730a3a4e6d08-2.js.map (debug id f188f204-5d53-48f9-95dc-730a3a4e6d08)
[sentry-vite-plugin] Info: Successfully uploaded source maps to Sentry
error during build:
Unexpected early exit. This happens when Promises returned by plugins cannot resolve. Unfinished hook action(s) on exit:
(sentry-file-deletion-plugin) writeBundle
    at process.handleBeforeExit (file:///Users/.........../CodeBase/TestBase/Svelte/sentry/upload-sourcemap/node_modules/.pnpm/rollup@4.18.0/node_modules/rollup/dist/es/shared/node-entry.js:20111:28)
    at Object.onceWrapper (node:events:633:26)
    at process.emit (node:events:530:35)
    at process._0x24b8d6 [as emit] (/Users/............/.vscode/extensions/wallabyjs.console-ninja-1.0.326/out/buildHook/index.js:1:219762)
 ELIFECYCLE  Command failed with exit code 1.
```

### Config + Error for when using `unstable_sentryVitePluginOptions`

```ts
export default defineConfig({
    plugins: [sentrySvelteKit({
        debug: true,
        sourceMapsUploadOptions: {
            telemetry: false,
            org: "sample-org",
            project: "sourcemap",
            authToken: process.env.SENTRY_AUTH_TOKEN,
            unstable_sentryVitePluginOptions: {
                sourcemaps: {
                    filesToDeleteAfterUpload: [`./svelte-kit/**/*.map`]
                }
            }
        },
    }), sveltekit()]
});
```
```bash
[Sentry SvelteKit Plugin] Detected SvelteKit vercel adapter
[Source Maps Plugin] Enabeling source map generation
vite v5.3.2 building SSR bundle for production...
✓ 98 modules transformed.
[sentry-vite-plugin] Debug: Waiting for dependencies on generated files to be freed before deleting...
x Build failed in 3.33s
[Source Maps Plugin] Looking up source maps in /Users/........./CodeBase/TestBase/Svelte/sentry/upload-sourcemap/.svelte-kit/output
[Source Maps Plugin] Flattening source maps
[sentry-vite-plugin] Debug: No `sourcemaps.assets` option provided, falling back to uploading detected build artifacts.
> Found 24 files
> Analyzing 24 sources
> Analyzing completed in 0.007s
> Adding source map references
> Bundling completed in 0.037s
> Bundled 24 files for upload
> Bundle ID: b917013f-6693-5670-8d74-e121275809a4
> Optimizing completed in 0.001s
> Uploading completed in 1.084s
> Uploaded files to Sentry
> Processing completed in 0.421s
> File upload complete (processing pending on server)
> Organization: zipper-school
> Project: sourcemap
> Release: d7cda3db7ab04505a053615b536914f7
> Dist: None
> Upload type: artifact bundle

Source Map Upload Report
  Scripts
    ~/3016a615-3e45-40be-9134-eb4f9cf670b8-0.js (sourcemap at _sentry-release-injection-file.js.map, debug id 3016a615-3e45-40be-9134-eb4f9cf670b8)
    ~/307a417a-3e1a-4049-aa29-11ea8dd16b47-7.js (sourcemap at layout.svelte.js.map, debug id 307a417a-3e1a-4049-aa29-11ea8dd16b47)
    ~/46e0bb51-ffad-46eb-8d10-1f4ab4a931b8-4.js (sourcemap at ssr.js.map, debug id 46e0bb51-ffad-46eb-8d10-1f4ab4a931b8)
    ~/52f9c181-b447-45f0-9a06-131f2e3f614c-5.js (sourcemap at _server.js.map, debug id 52f9c181-b447-45f0-9a06-131f2e3f614c)
    ~/7c165ca5-709e-4d1b-b9d8-483a11152de2-9.js (sourcemap at _page.svelte.js.map, debug id 7c165ca5-709e-4d1b-b9d8-483a11152de2)
    ~/a232d7b6-1ee5-4f34-b8cf-5dddc1a9a65c-10.js (sourcemap at index.js.map, debug id a232d7b6-1ee5-4f34-b8cf-5dddc1a9a65c)
    ~/abf06399-4103-4360-b840-e4a6374ad440-8.js (sourcemap at _page.svelte.js.map, debug id abf06399-4103-4360-b840-e4a6374ad440)
    ~/b77c062d-e457-46f4-8c91-687510444041-3.js (sourcemap at internal.js.map, debug id b77c062d-e457-46f4-8c91-687510444041)
    ~/bae66a35-3eec-43be-ab49-e3d845cb9f67-6.js (sourcemap at error.svelte.js.map, debug id bae66a35-3eec-43be-ab49-e3d845cb9f67)
    ~/bdc72d9c-6d59-400c-9a20-b852086412f2-1.js (sourcemap at exports.js.map, debug id bdc72d9c-6d59-400c-9a20-b852086412f2)
    ~/e5c5a9b4-9400-4c39-a906-86b84bf93c76-11.js (sourcemap at internal.js.map, debug id e5c5a9b4-9400-4c39-a906-86b84bf93c76)
    ~/f188f204-5d53-48f9-95dc-730a3a4e6d08-2.js (sourcemap at hooks.server.js.map, debug id f188f204-5d53-48f9-95dc-730a3a4e6d08)
  Source Maps
    ~/3016a615-3e45-40be-9134-eb4f9cf670b8-0.js.map (debug id 3016a615-3e45-40be-9134-eb4f9cf670b8)
    ~/307a417a-3e1a-4049-aa29-11ea8dd16b47-7.js.map (debug id 307a417a-3e1a-4049-aa29-11ea8dd16b47)
    ~/46e0bb51-ffad-46eb-8d10-1f4ab4a931b8-4.js.map (debug id 46e0bb51-ffad-46eb-8d10-1f4ab4a931b8)
    ~/52f9c181-b447-45f0-9a06-131f2e3f614c-5.js.map (debug id 52f9c181-b447-45f0-9a06-131f2e3f614c)
    ~/7c165ca5-709e-4d1b-b9d8-483a11152de2-9.js.map (debug id 7c165ca5-709e-4d1b-b9d8-483a11152de2)
    ~/a232d7b6-1ee5-4f34-b8cf-5dddc1a9a65c-10.js.map (debug id a232d7b6-1ee5-4f34-b8cf-5dddc1a9a65c)
    ~/abf06399-4103-4360-b840-e4a6374ad440-8.js.map (debug id abf06399-4103-4360-b840-e4a6374ad440)
    ~/b77c062d-e457-46f4-8c91-687510444041-3.js.map (debug id b77c062d-e457-46f4-8c91-687510444041)
    ~/bae66a35-3eec-43be-ab49-e3d845cb9f67-6.js.map (debug id bae66a35-3eec-43be-ab49-e3d845cb9f67)
    ~/bdc72d9c-6d59-400c-9a20-b852086412f2-1.js.map (debug id bdc72d9c-6d59-400c-9a20-b852086412f2)
    ~/e5c5a9b4-9400-4c39-a906-86b84bf93c76-11.js.map (debug id e5c5a9b4-9400-4c39-a906-86b84bf93c76)
    ~/f188f204-5d53-48f9-95dc-730a3a4e6d08-2.js.map (debug id f188f204-5d53-48f9-95dc-730a3a4e6d08)
[sentry-vite-plugin] Info: Successfully uploaded source maps to Sentry
error during build:
Unexpected early exit. This happens when Promises returned by plugins cannot resolve. Unfinished hook action(s) on exit:
(sentry-file-deletion-plugin) writeBundle
    at process.handleBeforeExit (file:///Users/............/CodeBase/TestBase/Svelte/sentry/upload-sourcemap/node_modules/.pnpm/rollup@4.18.0/node_modules/rollup/dist/es/shared/node-entry.js:20111:28)
    at Object.onceWrapper (node:events:633:26)
    at process.emit (node:events:530:35)
    at process._0x24b8d6 [as emit] (/Users/........../.vscode/extensions/wallabyjs.console-ninja-1.0.326/out/buildHook/index.js:1:219762)
 ELIFECYCLE  Command failed with exit code 1.
```