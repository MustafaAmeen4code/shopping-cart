import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Ooops!</h1>
      <p>Somthing went wrong!</p>
      <pre>
        {error.status} - {error.statusText || error.message}
      </pre>
      <button
        className="btn btn-primary btn-sm mx-2 btn-outline-light"
        onClick={goBack}
      >
        Go Back
      </button>

      <button
        className="btn btn-primary btn-sm mx-2 btn-outline-light"
        onClick={goHome}
      >
        Home
      </button>
    </div>
  );
};

export default ErrorPage;
