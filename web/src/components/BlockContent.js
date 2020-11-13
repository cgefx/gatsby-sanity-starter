/* eslint-disable react/jsx-props-no-spreading */
import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import { StyledH1, StyledH2 } from './_shared/styled-headings'
import Code from './Code'
import clientConfig from '../../client-config'

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return <StyledH1>{props.children}</StyledH1>

        case 'h2':
          return <StyledH2>{props.children}</StyledH2>

        default:
          return <p>{props.children}</p>
      }
    },
    code: Code,
  },
}

const BlockContent = ({ blocks }) => (
  <BaseBlockContent
    blocks={blocks}
    serializers={serializers}
    {...clientConfig.sanity}
  />
)

export default BlockContent
