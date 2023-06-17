import { cssBundleHref } from "@remix-run/css-bundle";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const cachedData = {
  lastUpdated: null,
  list: []
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Save your date</title>
        <meta httpEquiv="refresh" content="0; URL=https://withjoy.com/meochuotwedding/welcome" />
        <Meta />
        <Links />
          <link href='https://fonts.googleapis.com/css?family=Josefin Sans' rel='stylesheet'></link>
      </head>
      <body
          style={{
            backgroundColor: "#fffcf2"
              }}
      >
        {/*<Outlet />*/}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
