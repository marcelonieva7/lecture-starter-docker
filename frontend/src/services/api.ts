import axios from "axios";

interface PingResponse {
  status: string;
}

const client = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 5000,
});

export const ping = async () => {
  return client.get<PingResponse>('/ping');
};
