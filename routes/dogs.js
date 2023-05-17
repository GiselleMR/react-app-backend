const express = require('express');
const router = express.Router();
const dogController = require('../controllers/dogs');


// GET all dogs
router.get('/', dogController.getAllDogs); 
  
  // POST create a dog
router.post('/', dogController.createDog);
  
// GET one dog (SHOW)
  router.get('/:id', dogController.getOneDog);

  // PUT one dog (UPDATE)
  router.put('/:id', dogController.updateOneDog);
  
  // DELETE one dog
  router.delete('/:id', dogController.deleteOneDog);

  module.exports = router;