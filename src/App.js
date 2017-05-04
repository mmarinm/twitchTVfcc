import React, { Component } from 'react';
import {Container, Main} from './App.Styles'

import ListOfItems from './components/List/ListOfItems'
import MainHeader from './components/MainHeader/MainHeader'
import {getChannelInfo} from './API/getData'
import { injectGlobal } from 'styled-components';

injectGlobal`
	@font-face {
	  src: url('https://fonts.googleapis.com/css?family=Oswald');
	}

	body {
		margin: 0;
    padding: 0;
	}
`;

const streamers = [
  "ESL_SC2",
  "OgamingSC2",
  "cretetion",
  "freecodecamp",
  "storbeck",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas"
];


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        channels: [],
      };
    }
    componentDidMount() {

    }

    render() {
      const { channels } = this.state;

      return (
        <Container>
          <Main>
            <MainHeader />
            <ListOfItems />
          </Main>
        </Container>
      );
    }
}

export default App;
