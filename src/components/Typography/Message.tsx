import { FC } from 'react'
import { Alert } from 'antd'

type Props = {
  text: string
}

const Message: FC<Props> = ({ text }) => <Alert message={text} type="error" />

export default Message
