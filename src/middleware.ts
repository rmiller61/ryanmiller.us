import { defineMiddleware } from "astro:middleware";

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  if (url.hostname.includes("portfolio.")) {
    const newUrl = new URL(`https://ryanmiller.co${url.pathname}`);
    return context.rewrite(
      new Request(newUrl, {
        headers: {
          "x-redirect-to": context.url.pathname,
        },
      })
    );
  }
  return next();
});
