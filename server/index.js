/**
 * Server Entry Point
 */

import express from 'express'
import routes from './routes'
import path from 'path'
import cors from 'cors'

/**
 * Initialize
 */
const app = express()


var test_data = [{
  "lat": 37.74977073928103,
  "speed": 33.13078457720014,
  "lng": -122.39242219446099,
  "dist": 1.1740257992762348,
  "index": 0
},
  {
    "lat": 37.749486436043824,
    "speed": 33.54402868231216,
    "lng": -122.39256210414712,
    "dist": 1.1946123655563248,
     "index": 1
   }]


// allow cross-origin requests in dev mode
if (process.env.APP_ENV !== 'production') {
    app.use(cors());
}

// serve the dist folder containing bundles
app.use('/bin', express.static('dist'))

// serve the public containing all assets
app.use('/public', express.static('public'))

// register api routes
app.use('/api', routes)

/**
 * Serves the main html page on any route except
 * those that are previously registered
 */
app.get('/', (req, res) => {
    res.sendFile(
        'index.html',
        { root: path.resolve(__dirname) }
    )
})

/**
 * Run
 */
const port = process.env.APP_ENV || 3000
app.listen(port, () => {
    console.log(`[EVENT][SERVER_START][Port=${port}]`)
})
