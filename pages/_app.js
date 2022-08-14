import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/common/Layout";
import { Provider } from "react-redux";
import { store } from "../src/app/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>Pegeodo</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
