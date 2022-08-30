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
  return (<QueryClientProvider client={queryClient}><Layout ><Component {...pageProps} /></Layout></QueryClientProvider>)
}

export default MyApp
