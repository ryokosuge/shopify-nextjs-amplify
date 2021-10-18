import App from "next/app";
import type { AppContext, AppInitialProps, AppProps } from 'next/app'

import { Provider } from "@shopify/app-bridge-react";
import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/ja.json";

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const shopifyAPIKey = process.env.SHOPIFY_API_KEY;
  const host = pageProps.host as string;
  return (
    <AppProvider i18n={translations}>
      <Provider config={{
        host,
        apiKey: shopifyAPIKey,
        forceRedirect: true
      }}>
        <Component {...pageProps} />
      </Provider>
    </AppProvider>
  );
}

MyApp.getInitialProps = async (context: AppContext): Promise<AppInitialProps> => {
  const host = context.ctx.query.host as string;
  const appProps = await App.getInitialProps(context);
  return {
    ...appProps,
    pageProps: {
      host
    },
  }
}

export default MyApp
