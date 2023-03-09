import { Typography, Card, Divider } from 'antd'
import { useParsing } from '../../../businessLogic'
import React from 'react'
import { RESULTS_CARD_STYLES as s } from './style'
import Status from './Status'
import { NO_DETAILS, NO_SERIAL, NO_PAYLOAD } from './copy'

const { Paragraph, Text } = Typography
const { Meta: MetaC } = Card

interface PropsType {
  result: any
  i?: number | string
}

const ResultCard: React.FC<PropsType> = ({ result }) => {
  const { name, links, success, date_utc, payloads, cores, details } = result || {}
  const { parseFromUtc, truncate } = useParsing()

  let launchDetails = truncate(details) || NO_DETAILS
  return (
    <Card
      title={name}
      style={s.card}
      cover={<img alt={`${name} image`} src={links.patch.small} style={s.img} />}>
      <MetaC
        avatar={<Status success={success} />}
        title={cores?.[0]?.core || NO_SERIAL}
        description={
          <>
            <Text type='secondary'>{parseFromUtc(date_utc)}</Text>
            <br />
            <Text>{payloads?.[0] || NO_PAYLOAD}</Text>
            <Divider />
            <Paragraph style={s.paragraph}>{launchDetails}</Paragraph>
          </>
        }
      />
    </Card>
  )
}

export default ResultCard
