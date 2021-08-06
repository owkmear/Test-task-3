import { FC } from 'react'
import { Typography } from 'antd'

const { Title: AntdTitle } = Typography

type Props = {
  text: string
}

const Title: FC<Props> = ({ text }) => <AntdTitle>{text}</AntdTitle>

export default Title
