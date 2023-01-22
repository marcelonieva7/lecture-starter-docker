import { Status } from "./enums";

export interface StatusResponse {
  http: Status;
  database: Status;
}
