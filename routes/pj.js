const express = require('express');
const auth = require('../middlewares/auth');
const pjCtrl = require('../controllers/pj');
const multerConfig = require('../middlewares/multer-config');
const router = express.Router();

//ROUTER PJs
router.get('/',auth, pjCtrl.getPj)
router.get('/:id', auth, pjCtrl.getOnePj)
router.post('/',auth, multerConfig, pjCtrl.postPj)
router.put('/:id',auth, multerConfig, pjCtrl.updatePj)
router.delete('/:id',auth, pjCtrl.deletePj)

module.exports = router;