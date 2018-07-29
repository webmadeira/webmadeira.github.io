import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Square = styled.div`
  position: relative;
  width: ${props => props.width};
  min-width: ${props => props.minWidth};

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const ResponsiveSquare = ({
  children,
  width,
  minWidth,
  style,
}) => (
  <Square width={width} minWidth={minWidth} style={style}>
    <Content>
      {children}
    </Content>
  </Square>
)

ResponsiveSquare.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string.isRequired,
  minWidth: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
}

ResponsiveSquare.defaultProps = {
  style: {},
}

export default ResponsiveSquare
