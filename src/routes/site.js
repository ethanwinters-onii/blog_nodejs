const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/site_controller');
router.get('/search', siteController.search);
router.post('/search', siteController.extract_search);
router.use('/', siteController.index);

module.exports = router;
