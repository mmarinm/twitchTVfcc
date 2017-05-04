import React from 'react';
import {MainHeaderContainer, MainHeaderTitle, StatusItem, StatusIconLabel,
StatusItemIcon} from './MainHeader.Styled'

const MainHeader = () => {
  return (
    <MainHeaderContainer>
      <MainHeaderTitle>Twitch streamers</MainHeaderTitle>
      <StatusItem index={1} active={true}>
        <StatusItemIcon color={"#4A5E82"} />
        <StatusIconLabel>All</StatusIconLabel>
      </StatusItem>
      <StatusItem index={2}>
        <StatusItemIcon color={"#B5C8A3"}/>
        <StatusIconLabel>Online</StatusIconLabel>
      </StatusItem>
      <StatusItem index={3}>
        <StatusItemIcon color={"#8EA7C2"}/>
        <StatusIconLabel>Offline</StatusIconLabel>
      </StatusItem>
    </MainHeaderContainer>
  )
}

export default MainHeader
