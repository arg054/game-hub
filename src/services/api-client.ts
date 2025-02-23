import axios from "axios";
const RawgApi = import.meta.env.VITE_RAWG_API;

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "temp",
  },
});
