import { FC, useEffect, useState } from "react";
import { loadStatus } from "~/lib/api/api";
import { Status } from "~/lib/api/common/enums";
import { StatusIndicator } from "../status-indicator/status-indicator";

import "./app.css";

const App: FC = () => {
  const [httpStatus, setHttpStatus] = useState<Status>(Status.ERROR);
  const [databaseStatus, setDatabaseStatus] = useState<Status>(Status.ERROR);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const request = async () => {
      setLoading(true);

      try {
        const response = await loadStatus();

        setHttpStatus(response.data.http);
        setDatabaseStatus(response.data.database);
      } catch (e) {
        console.error(e);

        setHttpStatus(Status.ERROR);
        setDatabaseStatus(Status.ERROR);
      } finally {
        setLoading(false);
      }
    };

    request();
  }, []);

  return (
    <div className="container">
      <h2>Service Status</h2>
      <StatusIndicator
        id="http"
        label="HTTP"
        isLoading={loading}
        status={httpStatus}
      />
      <StatusIndicator
        id="database"
        label="Database"
        isLoading={loading}
        status={databaseStatus}
      />
    </div>
  );
};

export { App };
