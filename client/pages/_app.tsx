import Layout from '../components/Layout'
import '../styles/main.css'
import '../styles/normalize.css'
import '../styles/style.css'

function MyApp({ Component, pageProps }) {
  return (<Layout><Component {...pageProps} /></Layout>)
}

export default MyApp
