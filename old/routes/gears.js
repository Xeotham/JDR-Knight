const express = require('express');
const auth = require('../middlewares/auth');
const gearCtrl = require('../controllers/gears');
const multerConfig = require('../middlewares/multer-config');
const router = express.Router();

//ROUTER GEARs
router.get('/',auth, gearCtrl.getGear)
router.get('/:id', auth, gearCtrl.getOneGear)
router.post('/',auth, multerConfig, gearCtrl.postGear)
router.put('/:id',auth, multerConfig, gearCtrl.updateGear)
router.delete('/:id',auth, gearCtrl.deleteGear)

module.exports = router;