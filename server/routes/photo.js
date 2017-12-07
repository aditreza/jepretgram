const express = require('express')
const router = express.Router()
const Photo = require('../controllers/photoController')

router.get('/', Photo.findAllPhoto)
router.get('/:id', Photo.photoFindById)
router.post('/', Photo.photoCreate)
router.put('/:id', Photo.updatePhoto)
router.delete('/:id', Photo.destroyPhoto)

module.exports = router