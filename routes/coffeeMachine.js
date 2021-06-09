const express = require('express');

const filterCM = require('../middlewares/coffeeMachineFilters');
const { getMachines } = require('../controllers/coffeeMachine');

const router = express.Router();

router.get('/', filterCM, getMachines);

module.exports = router;
