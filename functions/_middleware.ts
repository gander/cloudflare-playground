import sentryPlugin from "@cloudflare/pages-plugin-sentry";

export const onRequest: PagesFunction = sentryPlugin({
    dsn: "https://5f602ae4b0da2096fe608b7f5ee30657@sentry.gander.pl/7",
});
