import React, { useState } from "react";
import axios from "axios";

export default function UrlShortener() {
  const [url, setUrl] = useState("");
  const [validity, setValidity] = useState("");
  const [shortcode, setShortcode] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { url, validity, shortcode };
      const res = await axios.post("http://localhost:3000/shorten", payload);
      setShortUrl(`http://localhost:3000/${res.data.shortLink}`);
    } catch (err) {
      console.error(err);
      alert("Error creating short URL");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center" }}>URL Shortener</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <input
          type="number"
          placeholder="Validity (in minutes)"
          value={validity}
          onChange={(e) => setValidity(e.target.value)}
          required
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <input
          type="text"
          placeholder="Shortcode"
          value={shortcode}
          onChange={(e) => setShortcode(e.target.value)}
          required
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            border: "none",
            background: "#007BFF",
            color: "white",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Shorten
        </button>
      </form>

      {shortUrl && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid #28a745",
            borderRadius: "6px",
            background: "#f8fff8",
            textAlign: "center",
          }}
        >
          <p style={{ margin: 0 }}>Your short URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}
