import { Avatar } from 'antd'
import React from 'react'
import { STATUS_STYLES as s } from './style'
import { STATUS } from './copy'
interface PropsType {
  success: boolean
}

const Status: React.FC<PropsType> = ({ success }) => {
  return success ? (
    <Avatar size={40} style={s.success}>
      {STATUS.success}
    </Avatar>
  ) : (
    <Avatar size={40} style={s.failure}>
      {STATUS.failure}
    </Avatar>
  )
}

export default Status
