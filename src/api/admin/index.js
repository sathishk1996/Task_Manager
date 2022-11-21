const express = require('express');
const router = express.Router();
const controller = require('./admin.controller');

router.get('/', controller.getAdmin);
router.post('/', controller.saveAdmin);
router.put('/:id', controller.updateAdmin);
router.delete('/:id', controller.deleteAdmin);

module.exports = router;