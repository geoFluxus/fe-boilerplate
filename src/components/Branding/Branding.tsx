import  { PropsWithChildren } from 'react'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import { Layout } from 'antd'
import { s } from './style'
import Header from './Header'
import Footer from './Footer'
const { Content } = Layout

const Branding = ({ children }:PropsWithChildren) => {
  return (
    <Layout>
      <Header />
      <Layout>
        <Content style={s.layout}>
          <ErrorBoundary>{children}</ErrorBoundary>
        </Content>
      </Layout>
      <Footer />
    </Layout>
  )
}

export default Branding
