import Script from 'next/script';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* --- Google Analytics Scripts Start --- */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `,
        }}
      />
      {/* --- Google Analytics Scripts End --- */}

      <Component {...pageProps} />
    </>
  );
}