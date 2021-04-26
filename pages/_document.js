import Document, { Html, Head, Main, NextScript } from 'next/document'




class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }

  }
  render() {
    return (
      <Html>
        <Head>
        <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      {/* <title>interactinc</title> */}
      <link rel="icon" href="img/favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
      <link rel="stylesheet" href="css/mdb.min.css" />
      <link rel="stylesheet" href="css/style.css" />
      
      
      {/* <link href="css/aos.css" rel="stylesheet"/> */}
        </Head>
        <body>
          <Main />
          <NextScript />

      <script src="js/jquery.min.js"></script>
      <script type="text/javascript" src="js/mdb.min.js"></script>
      {/* <script src="js/aos.js"></script> */}
      {/* <script>
         AOS.init();
      </script> */}
      <script src="js/custom.js"></script>
      <script src="http://localhost:3000/js/masonry.pkgd.min.js" type="text/javascript"></script>
       </body>
      </Html>
    )
  }
}

export default MyDocument
