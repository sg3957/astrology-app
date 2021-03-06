import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const CardWrapper = styled.div`
  position: relative;
  background: linear-gradient(to right, #9462CB, #4B2278);
  padding: 1px;
`


const Content = styled.div`
  background: #FFFFFF;
  margin: 2px;
  padding: 2px;
  overflow: hidden;
  font-family: 'Grandstander', cursive;
  &:hover {
    background: transparent;
    color: white;
  }
  display: flex;
  flex-direction: column;
`

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 6px;
`

const Subtitle = styled.span`
  font-size: 14px;
  margin-bottom: 6px;
`

const Description = styled.span`
  font-size: 16px;
`

const Card = ({copyright, date, descrip, title}) =>  {
  return(
    <CardWrapper>
        <Content>
            {title && <Title>{title}</Title>}
            {date && <Subtitle>{date}</Subtitle>}
            {copyright && <Subtitle>{copyright}</Subtitle>}
            {descrip && <Description>{descrip}</Description>} 
        </Content>
    </CardWrapper>
  )
}

Card.propTypes = {
    copyright: PropTypes.string,
    date: PropTypes.string,
    descrip: PropTypes.string,
    title: PropTypes.string
};
  

export default Card;
