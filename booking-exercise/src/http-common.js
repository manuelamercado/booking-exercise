import axios from "axios";

export default axios.create({
  baseURL: "https://www.swiss.com/us/en",
  headers: {
    "Content-type": "application/json"
  }
});
