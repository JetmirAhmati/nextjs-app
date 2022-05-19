import '../styles/globals.css'
import '../styles/Article.css'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProvider } from '../context/AuthContext'
import ProtectedRoute from '../components/ProtectedRoute'


function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
      <ProtectedRoute>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProtectedRoute>
    </AuthProvider>
  )
}

export default MyApp
