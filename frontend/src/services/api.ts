import axios from "axios";
import { config } from "../config";
import { StatusResponse } from "./types";

const client = axios.create({
  baseURL: config.api.url,
  timeout: 5000,
});

export const status = async () => {
  return client.get<StatusResponse>('/status');
};
