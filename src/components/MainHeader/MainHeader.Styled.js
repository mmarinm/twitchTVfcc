import styled from 'styled-components'


export const MainHeaderContainer = styled.div`
  position: relative;
  height: 100px;
  width: 100%;
  border-bottom: 2px solid #fff;
`
export const MainHeaderTitle = styled.h1`
font-family: 'Oswald', sans-serif;
font-weight: bold;
text-transform: uppercase;
text-align: left;
margin: 25px;
font-size: 3em;
color: #e1e1e6
`

export const StatusItem = styled.div`
  position: absolute;
  width: ${(props) => props.active ? 75 + "px" : 20 + "px"};
  right: 0px;
  top: ${(props) => {
    if(props.index === 1) return 10 + 'px';
    if(props.index === 2) return 35 + 'px';
    if(props.index === 3) return 60 + 'px';
  }}
  background-color: #e1e1e6;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition-property: width;
  transition-duration: 0.4s;

  &:hover {
    width: 75px;
  }
`
export const StatusItemIcon = styled.span`
  min-width: 10px;
  height: 10px;
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 50%;
  border: 1px solid #5C5457;
  background-color: ${props => props.color};
`
export const StatusIconLabel = styled.p`
  margin: 0;
  padding: 3px 0;
  color: #5c5457;
  font-family: 'Oswald', sans-serif;
  font-size: 0.75em;
  font-weight: bold;
  text-transform: uppercase;
`
