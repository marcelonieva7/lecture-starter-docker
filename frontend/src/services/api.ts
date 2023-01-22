import axios from "axios";
import { config } from "../config";

interface PingResponse {
  status: string;
}

const client = axios.create({
  baseURL: config.api.url,
  timeout: 5000,
});

export const ping = async () => {
  return client.get<PingResponse>('/ping');
};
