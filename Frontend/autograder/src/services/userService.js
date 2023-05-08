import http from "./httpService";
import * as config from "../config.json";

const { apiUrl } = config;

const apiEndpoint = apiUrl + "/register";

export function register(Student) {
  return http.post(apiEndpoint, {
    username: Student.username,
    password: Student.password,
    lastname: Student.lastname,
    firstname: Student.firstname,
  });
}