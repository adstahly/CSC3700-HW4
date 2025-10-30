const express = require('express');
const router = express.Router();
const patronsController = require('../controllers/patronController');

router.get('/', patronsController.listPatrons);
router.get('/summary', patronsController.showSummary);
router.get('/:id', patronsController.showPatron);


module.exports = router;