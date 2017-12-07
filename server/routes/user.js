const express = require('express')
const router = express.Router()
const User = require('../controllers/userController')

router.get('/', User.userFindAll)
router.post('/', User.userCreate)
router.put('/:id', User.updateUser)
router.delete('/:id', User.destroyUser)
router.post('/login', User.SignIn)

module.exports = router