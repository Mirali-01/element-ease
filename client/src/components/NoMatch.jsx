import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const NoMatch = () => {
  let location = useLocation();

  const randomNumber = () => {
    const number = Math.floor(Math.random() * 119);
    return number;
  };

  const randomElementNumber = randomNumber();

  return (
    <div style={{ color: "#fff", fontSize: "4vh" }}>
      <Helmet>
        <title>Element Ease - Error</title>
      </Helmet>
      <h2>
        <code>Error 404</code>
      </h2>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
      <h3>Please Try: </h3>
      <div
        style={{
          padding: "5px",
        }}
      >
        Main Page:{" "}
        <a
          style={{
            color: "#fff",
          }}
          href="https://elementease.netlify.app"
        >
          https://elementease.netlify.app
        </a>
        <h3>OR</h3>
        Random Page:{" "}
        <a
          style={{
            color: "#fff",
          }}
          href={`https://elementease.netlify.app/element/${randomElementNumber}`}
        >
          {`https://elementease.netlify.app/element/${randomElementNumber}`}
        </a>
      </div>
    </div>
  );
};

export default NoMatch;
