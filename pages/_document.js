import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
              <link rel="preconnect" href="https://app.snipcart.com" />
              <link rel="preconnect" href="https://cdn.snipcart.com" />
              <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css" />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
              <link href="https://fonts.googleapis.com/css2?family=Hurricane&family=Roboto+Slab&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script id='script-Id' src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js" async ></script>
          <div hidden id="snipcart" 
             data-api-key="MTc5Y2Q2MDMtNDI4My00ZjZmLTg4NjYtYzMxOGM3NThkZDViNjM3MzAxOTQ1MjE4OTcxMTYy"
             data-config-modal-style='side'></div>
        </body>
      </Html>
    )
  }
}

export default MyDocument