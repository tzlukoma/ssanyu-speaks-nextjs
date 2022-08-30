import App from "next/app"
import Layout from '../components/Layout'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import LogRocket from 'logrocket';
import '../styles/main.css'
import '../styles/normalize.css'
import '../styles/style.css'
import { client } from '../lib/sanity';
import groq from 'groq';

LogRocket.init('dqnqop/ssanyuspeakscom');

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  const logoImageData = pageProps.siteSettings[0].logoImage
  return (<QueryClientProvider client={queryClient}><Layout logoImageData={logoImageData}><Component {...pageProps} /></Layout></QueryClientProvider>)
}

export default MyApp

MyApp.getInitialProps = async appContext => {
  const pageProps = await App.getInitialProps(appContext)
  const [logoImageData] = await Promise.all([
    client
      .fetch(
        groq`
			*[_type=="siteSettings"]`
      )
      .catch(console.error)])
  return { ...pageProps, logoImageData }
}