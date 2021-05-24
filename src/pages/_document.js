import BaseDocument, { Head, Html, Main, NextScript } from "next/document";

const gaTrackingId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID;
const gaScript = `\
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${gaTrackingId}');
`;

const fbPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
const fbPixelScript = `\
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${fbPixelId}');
fbq('track', 'PageView');
`;

const hotJarScript = `\
(function(h,o,t,j,a,r){
  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
  h._hjSettings={hjid:2418297,hjsv:6};
  a=o.getElementsByTagName('head')[0];
  r=o.createElement('script');r.async=1;
  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
  a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
`

class Document extends BaseDocument {
  render() {
    return (
      <Html lang="sr">
        <Head>
          {gaTrackingId && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: gaScript,
                }}
              />
            </>
          )}
          {fbPixelId && (
            <>
              <script
                dangerouslySetInnerHTML={{
                  __html: fbPixelScript,
                }}
              />
              <noscript>
                <img
                  height="1"
                  width="1"
                  style={{ display: "none" }}
                  src={`https://www.facebook.com/tr?id=${fbPixelId}&ev=PageView&noscript=1`}
                  alt=""
                />
              </noscript>
            </>
          )}
          {(
            <script
              dangerouslySetInnerHTML={{
                __html: hotJarScript,
              }}
            />
          )}
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
