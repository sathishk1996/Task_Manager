const express = require('express');
const router = express.Router();
const controller = require('./task.controller');

router.get('/add', controller.addTask);
router.get('/edit', controller.editTask);
router.get('/', controller.getTask);

module.exports = router;