import styled from 'styled-components'

export const List = styled.div`
  background-color: #5C5457;
  width: 100%;
  padding: 0 0 10px 0;
`

export const ListItem = styled.div`
  width: 100%;
  text-align: center;
  background-color: #4A5E82;
  border-bottom: 2px solid #fff
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #B8C399;
`;

export const ChnlLink = styled.a`
  text-decoration-line: none;
  color: inherit;
`

export const Avatar = styled.div`
  background-image: ${
    (props) => {
      const rendUrl = props.logo !== null ? props.logo : "https://upload.wikimedia.org/wikipedia/commons/c/c9/Avatar_2_Placeholder_DumDarac.png"
      return 'url(' +  rendUrl + ')'
    }};
  background-size: contain;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 3px solid #e1e1e6;
  margin: 5px 0 0 20px;
`
export const StreamingStatus = styled.div`
  font-style: italic;
  margin-right: 20px;
  display: inherit;
`
