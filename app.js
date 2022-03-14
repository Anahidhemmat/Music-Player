// spotify token end point

const baseUrl = "https://api.spotify.com/v1";

const tokenEndpoint = "https://accounts.spotify.com/api/token";

const categories = "https://api.spotify.com/v1/browse/categories";

// const playlist = `https://api.spotify.com/v1/browse/categories/${category_id}/playlists`;

// const playlistItems = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`;

// const track = `https://api.spotify.com/v1/tracks/${id}`;

const spotify = async () => {
  const res = await fetch(tokenEndpoint);
  const data = await res.json();
  console.log(data);
};
spotify();
