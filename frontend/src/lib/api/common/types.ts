import { Status } from "./enums";

type StatusResponse = {
  http: Status;
  database: Status;
};

export { type StatusResponse };
