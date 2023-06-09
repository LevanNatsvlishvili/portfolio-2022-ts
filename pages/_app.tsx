import Layout from 'components/Layout';
import 'styles/global.css';
import type { AppProps } from 'next/app';
import { StoreContextProvider } from 'utils/Store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreContextProvider>
  );
}

export default MyApp;
