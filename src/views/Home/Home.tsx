import { Typography, Button, DatePicker } from 'antd'
import { Meta } from '../../components'
import { TITLE, } from './copy'
import { SlRocket } from 'react-icons/sl'

const { Title } = Typography

const Home = () => {
  return (
    <>
      <Meta title={'Home | Boilerplate'}  />
       <Title>
        <SlRocket size={30} style={{ margin: '0px 8px' }} />
        {TITLE}
      </Title>
      <br/>
      <Button type="primary">PRESS ME</Button>
      <div role='menubar'>menu bar</div>
      <DatePicker placeholder="select date" />
    </>
    
  )
}

export default Home
