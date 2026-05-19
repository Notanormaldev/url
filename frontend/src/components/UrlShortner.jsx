import { useState } from "react";
import "./styles/UrlShortener.css";

function UrlShortener() {

  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const shortenUrl = async () => {

    const response = await fetch(
      "https://url-backend-0nr6.onrender.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          originalUrl: url
        })
      }
    );

    const data = await response.json();

    setShortUrl(data.url);
  };

  return (
    <div className="container">

      <div className="card">

        <h1 className="heading">
          URL Shortener
        </h1>

        <p className="subHeading">
          Transform long ugly links into clean short URLs instantly.
        </p>

        <input
          type="text"
          placeholder="Enter your long URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="input"
        />

        <button
          onClick={shortenUrl}
          className="button"
        >
          Shorten URL
        </button>

        {
          shortUrl && (
            <div className="result">

              <p className="resultText">
                Your Short URL
              </p>

              <a
                href={shortUrl}
                target="_blank"
              >
                {shortUrl}
              </a>

            </div>
          )
        }

      </div>

    </div>
  );
}

export default UrlShortener;
