import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Search Console Verification */}
        {/* Replace YOUR_VERIFICATION_CODE with the actual code from Google Search Console */}
        <meta name="google-site-verification" content="uRp-UbI0NWG6cjziZS9a40Y0BNqg2dFX-oVehIhyOUY" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
