import axios from "axios";
import type { SignupRequest, LoginRequest, AuthResponse } from "../types/auth";

const BASE_URL = "http://localhost:8080";

export const signup = (data: SignupRequest) => {
  return axios.post(BASE_URL + "/api/auth/signup", data);
};

export const login = (data: LoginRequest) => {
  return axios.post<AuthResponse>(BASE_URL + "/api/auth/login", data);
};
