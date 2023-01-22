import axios from "axios";
import { config } from "../config";

enum Status {
  Ok = 'ok',
  Error = 'error',
}

interface StatusResponse {
  http: Status;
  database: Status;
}

const client = axios.create({
  baseURL: config.api.url,
  timeout: 5000,
});

export const status = async () => {
  return client.get<StatusResponse>('/status');
};
