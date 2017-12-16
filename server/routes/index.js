/**
 * Registers all the routes
 */

import express from 'express'
import users from './api/users'
import customers from './api/customers'
import products from './api/products'

/**
 * Initialize
 */
const router = express.Router()

/**
 * Routes
 */

router.get('/', (req, res) => {
    res.json({ version: '0.1.0' })
})

//Get the trip data.
router.get('/trip-data/:filename', (req,res) => {

  var fileName = req.params.filename

  try {
    var testing_routes = require('../data/trip-data/' + fileName)
    res.json(testing_routes)
  } catch (e) {
    res.send('ERROR')
  }






})
/**
 * Register routes and expose router object
 */
router.use('/users', users)
router.use('/customers', customers)
router.use('/products', products)

export default router
