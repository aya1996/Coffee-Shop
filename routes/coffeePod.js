const express = require('express');

const filterCP = require('../middlewares/coffeePodFilters');
const { getPods } = require('../controllers/coffeePod');

const router = express.Router();

router.get('/', filterCP, getPods);

module.exports = router;
