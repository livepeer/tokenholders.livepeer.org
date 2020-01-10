/** @jsx jsx */
import { jsx } from "theme-ui";
import App from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import "pure-react-carousel/dist/react-carousel.es.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps }: any = this.props;

    return (
      <>
        <Head>
          <title>Tokenholder App</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,500&display=swap"
            rel="stylesheet"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `@font-face {
                  font-family: 'AkkuratMono';
                  src: url("/fonts/akkurat/lineto-akkuratmono-pro-regular.eot");
                  src: url("/fonts/akkurat/lineto-akkuratmono-pro-regular.eot?#iefix") format("embedded-opentype"), url("/fonts/akkurat/lineto-akkuratmono-pro-regular.woff") format("woff"), url("/fonts/akkurat/lineto-akkuratmono-pro-regular.ttf") format("truetype"), url("/fonts/akkurat/lineto-akkuratmono-pro-regular.svg") format("svg");
              }

              @font-face {
                  font-family: 'Akkurat';
                  src: url("/fonts/akkurat/lineto-akkurat-pro-regular.eot");
                  src: url("/fonts/akkurat/lineto-akkurat-pro-regular.eot?#iefix") format("embedded-opentype"), url("/fonts/akkurat/lineto-akkurat-pro-regular.woff") format("woff"), url("/fonts/akkurat/lineto-akkurat-pro-regular.ttf") format("truetype"), url("/fonts/akkurat/lineto-akkurat-pro-regular.svg") format("svg");
                  font-weight: 400;
                  font-style: normal;
              }

              @font-face {
                  font-family: 'Akkurat';
                  src: url("/fonts/akkurat/lineto-akkurat-pro-bold.eot");
                  src: url("/fonts/akkurat/lineto-akkurat-pro-bold.eot?#iefix") format("embedded-opentype"), url("/fonts/akkurat/lineto-akkurat-pro-bold.woff") format("woff"), url("/fonts/akkurat/lineto-akkurat-pro-bold.ttf") format("truetype"), url("/fonts/akkurat/lineto-akkurat-pro-bold.svg") format("svg");
                  font-weight: 600;
                  font-style: bold;
              }
            `
            }}
          />
        </Head>
        <>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </>
      </>
    );
  }
}
