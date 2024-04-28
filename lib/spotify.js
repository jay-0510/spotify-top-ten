import SpotifyWebApi from "spotify-web-api-node";

const scopes = ["user-top-read", "user-read-email"].join(",");

const params = {
  scope: scopes,
};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL =
  "https://accounts.spotify.com/authorize?" + queryParamString.toString();

const spotifyApi = new SpotifyWebApi({
  clientId: "bf9501fb3cae4275a88273994a80c9d2",
  clientSecret: "d87a4e48b56e463083e60d461624c151",
});

export default spotifyApi;

export { LOGIN_URL };
