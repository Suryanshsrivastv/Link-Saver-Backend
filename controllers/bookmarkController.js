const Bookmark = require('../models/Bookmark');
const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

const getMetadata = async (url) => {
    try {
      const fullUrl = url.startsWith('http') ? url : `https://${url}`;
      
      const response = await fetch(fullUrl);
      const html = await response.text();
      const dom = new JSDOM(html);
      const { document } = dom.window;
  
      const title = document.querySelector('title')?.textContent || 'Untitled';
      const ogIcon = document.querySelector("link[rel~='icon']")?.href || '/favicon.ico';
      const favicon = ogIcon.startsWith('http') ? ogIcon : new URL(ogIcon, fullUrl).href;
      return { title, favicon };
    } catch (error) {
      console.error('Error fetching metadata:', error);
      return { title: 'Untitled', favicon: '/favicon.ico' };
    }
  };
const getSummary = async (url) => {
  try {
    const encoded = encodeURIComponent(url);
    const res = await fetch(`https://r.jina.ai/http://${encoded}`);
    return await res.text();
  } catch {
    return 'Summary temporarily unavailable.';
  }
};

exports.saveBookmark = async (req, res) => {
  const { url, tags } = req.body;
  const userId = req.user.userId;

  try {
    const { title, favicon } = await getMetadata(url);
    const summary = await getSummary(url);

    const bookmark = await Bookmark.create({
      user: userId,
      url,
      title,
      favicon,
      summary,
      tags: tags || []
    });

    res.status(201).json(bookmark);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save bookmark' });
  }
};
exports.getBookmarks = async (req, res) => {
    const userId = req.user.userId;
    const { tag } = req.query;
  
    try {
      const query = { user: userId };
      if (tag) {
        query.tags = tag;
      }
  
      const bookmarks = await Bookmark.find(query).sort({ createdAt: -1 });
      res.json(bookmarks);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch bookmarks' });
    }
};
  
exports.deleteBookmark = async (req, res) => {
    const userId = req.user.userId;
    const { id } = req.params;
  
    try {
      const deleted = await Bookmark.findOneAndDelete({ _id: id, user: userId });
      if (!deleted) return res.status(404).json({ error: 'Bookmark not found or not yours' });
  
      res.json({ message: 'Bookmark deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete bookmark' });
    }
};