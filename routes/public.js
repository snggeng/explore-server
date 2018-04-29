const express = require('express')
const router = express.Router()

// Controllers
const userController = require('../controllers/users')
const bottleController = require('../controllers/bottles')

// AUTH ROUTES
router.post('/signin', userController.signIn)
router.get('/signout', userController.signOut)
router.post('/sso', userController.sso)
router.get('/refresh', userController.refreshUser)
router.get('/', (req, res) => res.json({message: 'hi'}))

// USER ROUTES
router.route('/users')
  .get(userController.getAll)
  .post(userController.createUser)

// BOTTLE ROUTES
router.get('/bottles/:id', permit('admin', 'user'), bottleController.getBottle)
router.put('/bottles/:id', permit('admin', 'user'), bottleController.updateBottle)

module.exports = router
