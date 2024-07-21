import 'styles/global.css';
import Layout from 'components/Layout';
import type { AppProps } from 'next/app';
import { StoreContextProvider } from 'utils/Store';
import { HeaderTagsRenderer } from 'components/Components/HeaderTagsRenderer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderTagsRenderer />
      <StoreContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreContextProvider>
    </>
  );
}

export default MyApp;
