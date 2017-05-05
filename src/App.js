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

export const streamers = [
  "ESL_SC2",
  "OgamingSC2",
  "cretetion",
  "freecodecamp",
  "nashcasts",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas",
	"brunofin",
	"comster404"
];


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
				filter: "All",
        channels: [],
				logos: [],
				urls: [],
				streaming: [],
				game: []
      };

			this.handleFilterChange = this.handleFilterChange.bind(this)
    }
    componentDidMount() {
			streamers.map((chnl, indx) =>
				getChannelInfo(chnl)
				.then((resp) => {
					console.log(resp);
					return this.setState((prevState) => ({
						...prevState,
						channels: [...prevState.channels, resp.error ? resp.error : resp.display_name ],
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
						streaming: [...prevState.streaming, resp.stream === null ? false : resp.stream.channel.display_name],
						game: [...prevState.game, resp.stream === null ? false: resp.stream.game]
					}))
				}
				)
				.catch((resp) =>
						console.log(resp)
				)
			)
    }

		handleFilterChange(filter){
			this.setState(prevState => ({...prevState, filter}))
		}

    render() {
			const {filter} = this.state
      return (
        <Container>
          <Main>
            <MainHeader handleFilterChange={this.handleFilterChange} filter={filter}/>
            <ListOfItems props={this.state}/>
          </Main>
        </Container>
      );
    }
}

export default App;
