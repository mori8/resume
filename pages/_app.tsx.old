import "../styles/globals.css";
import "../styles/fonts.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import { ThemeProvider } from "next-themes";


function MyApp({ Component, pageProps }: AppProps) {
  gtag.useGtag();

  return (
    <ThemeProvider defaultTheme='light' attribute="class">
      <Component {...pageProps} />
      {process.env.NODE_ENV !== 'development' && (
        <>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
    </ThemeProvider>
  );
}

export default MyApp;
