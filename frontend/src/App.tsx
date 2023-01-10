import errorIcon from './assets/error.svg';
import successIcon from './assets/success.svg';
import loadingIcon from './assets/loading.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { ping } from './services/api';

function App() {
  const [pingSuccess, setPingSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      setLoading(true);

      try {
        const response = await ping();
        setPingSuccess(response.data.status === 'ok');
      } finally {
        setLoading(false);
      }
    };

    request();
  }, []);

  const renderSuccess = () => {
    return <img src={successIcon} className="icon success" alt="success" />;
  };

  const renderError = () => {
    return <img src={errorIcon} className="icon error" alt="error" />;
  };

  const renderLoading = () => {
    return <img src={loadingIcon} className="icon loading" alt="loading" />;
  };

  return (
    <div className="app">
      <div className="container">
        Backend Status {loading ? renderLoading() : pingSuccess ? renderSuccess() : renderError()}
      </div>
    </div>
  );
}

export default App;
