const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { saveBookmark,getBookmarks,deleteBookmark } = require('../controllers/bookmarkController');

router.post('/', authMiddleware, saveBookmark);
router.get('/', authMiddleware, getBookmarks);
router.delete('/:id', authMiddleware, deleteBookmark);

module.exports = router;
