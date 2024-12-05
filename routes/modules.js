const express = require('express');
const auth = require('../middlewares/auth');
const moduleCtrl = require('../controllers/gears');
const multerConfig = require('../middlewares/multer-config');
const router = express.Router();

//ROUTER GEARs
router.get('/',auth, moduleCtrl.getModule)
router.get('/:id', auth, moduleCtrl.getOneModule)
router.post('/',auth, multerConfig, moduleCtrl.postModule)
router.put('/:id',auth, multerConfig, moduleCtrl.updateModule)
router.delete('/:id',auth, moduleCtrl.deleteModule)

module.exports = router;