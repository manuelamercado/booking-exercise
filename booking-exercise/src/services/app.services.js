import http from "../http-common";

class AppDataService {
  getSuggestions(cityQuery) {
    return http.get(`/Suggest/Suggest?q=${cityQuery}&m=HP`);
  }
}

export default new AppDataService();
