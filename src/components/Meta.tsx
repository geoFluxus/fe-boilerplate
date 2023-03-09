import React from 'react'
import { Helmet } from 'react-helmet'

interface PropsType {
  title: string
}
// This component can be tested with an e2e test; snapshot/unit testing is not appropriate.
const Meta: React.FC<PropsType> = ({ title }) => (
  <Helmet>
    <title>{title}</title>
    <meta name={title} content={`${title} content`} />
  </Helmet>
)

export default Meta
