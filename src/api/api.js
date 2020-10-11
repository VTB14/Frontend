import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://",
  headers: {
    "API-KEY": "0000-0000-0000-000"
  }
});

export const authAPI = {
  login( login, password ) {
    return instance.post("auth/login", { login, password });
  } 
}