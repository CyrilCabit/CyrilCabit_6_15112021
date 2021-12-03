const express = require('express');
const router = express.Router();


const stuffCtrl = require('../controllers/stuff');
const auth = require('../middleware/auth');

router.get('/', auth, stuffCtrl.getAllSauces);
router.post('/', auth, stuffCtrl.createSauce);
router.get('/:id', auth, stuffCtrl.getOneSauce);
router.put('/:id', auth, stuffCtrl.modifySauce);
router.delete('/:id', auth, stuffCtrl.deleteSauce);



module.exports = router;



