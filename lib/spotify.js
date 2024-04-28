import SpotifyWebApi from "spotify-web-api-node";

const scopes = ["user-top-read", "user-read-email"].join(",");

const params = {
  scope: scopes,
};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL =
  "https://accounts.spotify.com/authorize?" + queryParamString.toString();

const spotifyApi = new SpotifyWebApi({
  clientId: "YOURID_KEY",
  clientSecret: "YOURCLIENT_ID",
});

export default spotifyApi;

export { LOGIN_URL };
