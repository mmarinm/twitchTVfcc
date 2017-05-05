import React from 'react';
import {MainHeaderContainer, MainHeaderTitle, StatusItem, StatusIconLabel,
StatusItemIcon} from './MainHeader.Styled'

const MainHeader = (props) => {
  const {handleFilterChange, filter} = props;

  return (
    <MainHeaderContainer>
      <MainHeaderTitle>Twitch streamers</MainHeaderTitle>
      <StatusItem index={1} active={filter === "All" ? true : false} onClick={() => handleFilterChange("All")}>
        <StatusItemIcon color={"#5C5457"} />
        <StatusIconLabel>All</StatusIconLabel>
      </StatusItem>
      <StatusItem index={2} active={filter === "Online" ? true : false} onClick={() => handleFilterChange("Online")}>
        <StatusItemIcon color={"#B5C8A3"}/>
        <StatusIconLabel>Online</StatusIconLabel>
      </StatusItem>
      <StatusItem index={3} active={filter === "Offline" ? true : false} onClick={() => handleFilterChange("Offline")}>
        <StatusItemIcon color={"#8EA7C2"}/>
        <StatusIconLabel>Offline</StatusIconLabel>
      </StatusItem>
    </MainHeaderContainer>
  )
}

export default MainHeader
