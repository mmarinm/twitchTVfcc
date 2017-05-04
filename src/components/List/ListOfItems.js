import React from 'react';
import {ListItem, List, Avatar, StreamingStatus} from './ListOfItems.Styled'

const ListOfItems = props => {
const exampl = Array(8).fill("FreeCodeCamp")
  return (
    <List>
      {exampl.map((item, index) =>
        <ListItem key={index}>
          <Avatar />
          <div>{item}</div>
          <div>Now Streaming WoW</div>
          <StreamingStatus>Online</StreamingStatus>
        </ListItem>
      )}
    </List>
  );
};

export default ListOfItems
