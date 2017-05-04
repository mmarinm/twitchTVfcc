import React from 'react';
import {ListItem, List, Avatar, StreamingStatus,
  ChnlLink} from './ListOfItems.Styled'
import {StatusItemIcon} from '../MainHeader/MainHeader.Styled'

const ListOfItems = ({props}) => {
const exampl = Array(8).fill("Loading...");
const streamingStatus = (status) => status === false ? 'Offline' : 'Online'
  return (
    <List>
      {exampl.map((item, index) =>
        <ListItem key={index}>
          <Avatar logo={props.logos[index]}/>
          <ChnlLink href={props.urls[index]}>
            {props.channels[index]}
          </ChnlLink>
          <div>{props.streaming[index] !== false ? props.game[index] : ""}</div>
          <StreamingStatus>
            <StatusItemIcon color={props.streaming[index] !== false ? "#17d85b" : "tomato"}/>
            {streamingStatus(props.streaming[index])}
          </StreamingStatus>
        </ListItem>
      )}
    </List>
  );
};

export default ListOfItems
