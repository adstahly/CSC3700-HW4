const express = require('express');
const router = express.Router();
const patronsController = require('../controllers/patronController');

router.get('/', patronsController.listPatrons);
router.get('/:id', patronsController.showPatron);
router.get('/summary', patronsController.showSummary);

module.exports = router;