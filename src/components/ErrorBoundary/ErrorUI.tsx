import { Result, Layout } from 'antd'
import Meta from '../Meta'
import { style } from './style'
const { Content } = Layout

const ErrorUI = () => {
  return (
    <Content style={style.error}>
      <Meta title={'Error - something went wrong '} />
      <Result title={'Something went wrong.'} subTitle={'Please try again later.'} />
    </Content>
  )
}

export default ErrorUI
