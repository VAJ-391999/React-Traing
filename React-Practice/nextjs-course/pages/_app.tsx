import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import React from "react";
import { createWrapper } from "next-redux-wrapper";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("pageProps", pageProps);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }: any) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  console.log("InitPageProps", Component.getInitialProps);
  return { pageProps: pageProps };
};

const makeStore = () => store;

const wrapper = createWrapper(makeStore, { debug: true });

//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(MyApp);

//export default MyApp;
