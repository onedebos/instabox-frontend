import axios from "axios";
import API_URL from "./helpers/apiHelper";

const getPictures = () => {
  return axios.get(`${API_URL}/pictures`);
};

const getComments = pid => {
  return axios.get(`${API_URL}/${pid}/comments`);
};

export default {
  getPictures,
  getComments
};
