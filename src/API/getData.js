import {CLIENT_ID} from './key'

const BASE_URL = "https://api.twitch.tv/kraken/";

// async function
export async function getChannelInfo(channel) {
  // await response of fetch call
  let response = await fetch(`${BASE_URL}channels/${channel}/?client_id=${CLIENT_ID}&callback=`);
  // only proceed once promise is resolved
  let data = await response.json();
  // only proceed once second promise is resolved
  return data;
}

// async function
export async function getStreamInfo(channel) {
  // await response of fetch call
  let response = await fetch(`${BASE_URL}streams/${channel}/?client_id=${CLIENT_ID}&callback=`);
  // only proceed once promise is resolved
  let data = await response.json();
  // only proceed once second promise is resolved
  return data;
}
