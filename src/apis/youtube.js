import axios from "axios";

const KEY = "AIzaSyAlCatwasx1aX81a8iIHjicVUw1nZoIsO8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
