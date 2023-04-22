import Layout from 'components/Layout';
import type { AppProps } from 'next/app';
import { StoreContextProvider } from 'utils/Store';
import 'styles/global.css';

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
