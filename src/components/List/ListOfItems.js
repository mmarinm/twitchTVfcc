import React from 'react';
import {ListItem, List, Avatar, StreamingStatus,
  ChnlLink} from './ListOfItems.Styled'
import {StatusItemIcon} from '../MainHeader/MainHeader.Styled'
import range from 'lodash.range'
import {streamers} from '../../App'

const ListOfItems = ({props}) => {
  const filterFunc = (filter) => {
    let arrofObjects = range(streamers.length).map((item, index) =>
      ({
        name: props.channels[index],
        logo: props.logos[index],
        url: props.urls[index],
        streaming: props.streaming.indexOf(props.channels[index]) !== -1 ? true : false,
        game: props.game[props.streaming.indexOf(props.channels[index])]
      })
    );
    if(filter === 'All'){
      return arrofObjects
    }
    if(filter === "Online"){
      return arrofObjects.filter((val, index) => val.streaming === false ? false : true)
    } else {
      return arrofObjects.filter((val, index) => val.streaming === false ? true : false)
    }
  }

  const streamingStatus = (status) => status === false ? 'Offline' : 'Online'

  return (
    <List>
      {filterFunc(props.filter).map((item, index) =>
        <ListItem key={index}>
          <Avatar logo={item.logo}/>
          <ChnlLink href={item.url}>
            {item.name}
          </ChnlLink>
          <div>{item.streaming !== false ? item.game : ""}</div>
          <StreamingStatus>
            <StatusItemIcon color={item.streaming !== false ? "#17d85b" : "tomato"}/>
            {streamingStatus(item.streaming)}
          </StreamingStatus>
        </ListItem>
      )}
    </List>
  );
};

export default ListOfItems
