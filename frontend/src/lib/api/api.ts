import axios, { AxiosResponse } from "axios";
import { config } from "~/lib/config/config";
import { type StatusResponse } from "~/lib/api/common/types";

const client = axios.create({
  baseURL: config.api.url,
  timeout: 5000,
});

const loadStatus = (): Promise<AxiosResponse<StatusResponse>> => {
  return client.get<StatusResponse>("/status");
};

export { loadStatus };
