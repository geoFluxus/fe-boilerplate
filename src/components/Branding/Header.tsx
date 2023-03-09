import { Layout, Typography } from 'antd'
import { headerStyle as s } from './style'
const { Header: Head } = Layout

const Header = () => {
  return (
    <Head style={s.header}>
      <div style={s.layout}>
        <section style={s.centerHead}>
          <Typography.Text strong style={{ color: 'white' }}>
            Header
          </Typography.Text>
        </section>
      </div>
    </Head>
  )
}

export default Header
