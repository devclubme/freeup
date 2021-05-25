import BaseDocument, { Head, Html, Main, NextScript } from "next/document";

const gtmContainerId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_CONTAINER_ID;
const gtmScript = `\
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmContainerId}');
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
          {gtmContainerId && (
            <>
              <script
                dangerouslySetInnerHTML={{
                  __html: gtmScript,
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
          {gtmContainerId && (
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmContainerId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          )}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
