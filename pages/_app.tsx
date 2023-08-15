import { CartContextProvider } from '@/hooks/useCart';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  // Aqui você pode adicionar lógica comum para todas as páginas, como layout, autenticação, etc.
  return (<CartContextProvider>
    
    <Component {...pageProps} />;

  </CartContextProvider>
  )
}
export default MyApp;
