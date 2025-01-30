import { defineMiddleware } from "astro:middleware";

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  const subdomain = url.hostname.split(".")[0];
  if (subdomain === "portfolio") {
    const newUrl = new URL(`https://ryanmiller.co${context.url.pathname}`);
    return context.rewrite(
      new Request(newUrl, {
        headers: {
          "x-redirect-to": context.url.pathname,
        },
      })
    );
  }
});
