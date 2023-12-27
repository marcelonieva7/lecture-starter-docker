import { FC } from "react";
import { Status } from "~/lib/api/common/enums";
import errorIcon from "~/assets/icons/error.svg";
import successIcon from "~/assets/icons/success.svg";
import loadingIcon from "~/assets/icons/loading.svg";

import "./status-indicator.css";

type Properties = {
  label: string;
  id: string;
  status: Status;
  isLoading: boolean;
};

const StatusIndicator: FC<Properties> = ({ label, status, isLoading, id }) => {
  const renderSuccess = () => {
    return <img src={successIcon} className="icon success" alt="success" />;
  };

  const renderError = () => {
    return <img src={errorIcon} className="icon error" alt="error" />;
  };

  const renderLoading = () => {
    return <img src={loadingIcon} className="icon loading" alt="loading" />;
  };

  const renderStatusIcon = () => {
    if (isLoading) {
      return renderLoading();
    }

    if (status === Status.OK) {
      return renderSuccess();
    }

    return renderError();
  };

  return (
    <div id={id} className="status-wrapper">
      <div className="status-icon">{renderStatusIcon()}</div>
      <div className="status-label">{label}</div>
      <div className="status-bar">
        <div className={`status-fill ${isLoading ? "" : status}`} />
      </div>
    </div>
  );
};

export { StatusIndicator };
