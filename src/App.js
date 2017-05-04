import React, { Component } from 'react';
import {Container, Main} from './App.Styles'

import ListOfItems from './components/List/ListOfItems'
import MainHeader from './components/MainHeader/MainHeader'
import {getChannelInfo, getStreamInfo} from './API/getData'
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
  "nashcasts",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas"
];


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        channels: [],
				logos: [],
				urls: [],
				streaming: [],
				game: []
      };
    }
    componentDidMount() {
			streamers.map((chnl, indx) =>
				getChannelInfo(chnl)
				.then((resp) => {
					return this.setState((prevState) => ({
						channels: [...prevState.channels, resp.display_name],
						logos: [...prevState.logos, resp.logo],
						urls: [...prevState.urls, resp.url],
					}))
				}
				)
				.catch((resp) =>
						console.log(resp)
				)
			)
			streamers.map((chnl, indx) =>
				getStreamInfo(chnl)
				.then((resp) => {
					// console.log(resp);
					return this.setState((prevState) => ({
						...prevState,
						streaming: [...prevState.streaming, resp.stream === null ? false : resp.stream.stream_type],
						game: [...prevState.game, resp.stream === null ? false: resp.stream.game]
					}))
				}
				)
				.catch((resp) =>
						console.log(resp)
				)
			)
    }

    render() {
      return (
        <Container>
          <Main>
            <MainHeader />
            <ListOfItems props={this.state}/>
          </Main>
        </Container>
      );
    }
}

export default App;
