const crypto = require("crypto");
const { Log } = require("../utils/logMiddleWare");

const urlStore = new Map();

const createShortUrl = async (req, res) => {
  await Log("backend", "info", "handler", "Received request to shorten URL");

  const { url, validity = 30, shortcode } = req.body;

  if (!url) {
    await Log("backend", "error", "handler", "No url provided");
    return res.status(400).json({ error: "url is required" });
  }

  
  let shortId = shortcode;

//check if shortcode is already in store

  if (urlStore.has(shortId)) {
    await Log("backend", "warn", "repository", `Shortcode ${shortId} already exists`);
    return res.status(409).json({ error: "Shortcode already exists" });
  }

  
  const expiryDate = new Date(Date.now() + validity * 60 * 1000);

  
  urlStore.set(shortId, { url, expiry: expiryDate });

  await Log("backend", "info", "repository", `Short URL created for ${url} with expiry ${expiryDate.toISOString()}`);

  return res.status(201).json({
    shortLink: `http://localhost:3000/${shortId}`,
    expiry: expiryDate.toISOString(),
  });
};

const getOriginalUrl = async (req, res) => {
  const { shortId } = req.params;
  await Log("backend", "info", "handler", `Lookup request for shortId: ${shortId}`);

  const entry = urlStore.get(shortId);

  if (!entry) {
    await Log("backend", "warn", "repository", `ShortId ${shortId} not found`);
    return res.status(404).json({ error: "URL not found" });
  }

  // check expiry
  if (new Date() > new Date(entry.expiry)) {
    await Log("backend", "warn", "repository", `ShortId ${shortId} expired`);
    urlStore.delete(shortId);
    return res.status(410).json({ error: "URL expired" });
  }

  await Log("backend", "info", "handler", `Redirecting ${shortId} -> ${entry.url}`);
    return res.json({
        url: entry.url,
        shortId


    }
);
};

module.exports = { createShortUrl, getOriginalUrl };
