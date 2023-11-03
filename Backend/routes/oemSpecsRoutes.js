
const express = require('express');
const router = express.Router();
const oemSpecsController = require('../controllers/oemSpecsController');


router.get('/', oemSpecsController.getAllOEMSpecs);
router.post('/', oemSpecsController.addOEMSpecs);



// router.get('/models/count', oemSpecsController.countOEMModels);
// router.get('/models/count', oemSpecsController.countUniqueOEMModels);
// router.get('/search', oemSpecsController.searchOEMSpecs);


module.exports = router;
