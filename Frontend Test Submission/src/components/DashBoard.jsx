import { useEffect, useState } from "react";

export default function DashBoard() {
  const [urls, setUrls] = useState([]);



  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Shortened URL Statistics</h1>
      <div className="space-y-4">
        {urls.length === 0 && (
          <p className="text-gray-600">No shortened URLs found.</p>
        )}
        {urls.map((u, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <p>
              <strong>Shortened:</strong>{" "}
              <a href={u.shortUrl} className="text-blue-600 underline">
                {u.shortUrl}
              </a>
            </p>
            <p className="text-sm text-gray-700">
              <strong>Created:</strong>{" "}
              {new Date().toLocaleString()} (mock for now)
            </p>
            <p className="text-sm text-gray-700">
              <strong>Expiry:</strong> {new Date(u.expiry).toLocaleString()}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Clicks:</strong> {u.clicks.length}
            </p>
            <ul className="ml-4 list-disc text-sm text-gray-600">
              {u.clicks.map((c, j) => (
                <li key={j}>
                  {c.timestamp} - {c.source}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
