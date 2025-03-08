import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS globally
import '../src/styles/Home.module.css'; // Your custom global styles (optional)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;