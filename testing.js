var _ = require('lodash')

    var testingCoords = [
      {
        "lat": -36.8656740244478,
        "speed": 1,
        "lng": 174.72489793784916,
        "dist": 0,
        "index": 0
      },
      {
        "lat": -36.86582762282342,
        "speed": 2,
        "lng": 174.72503422759473,
        "dist": 1.1740257992762348,
        "index": 0
      },
      {
        "lat": -36.865929337218404,
        "speed": 3,
        "lng": 174.72529197111726,
        "dist": 1.1740257992762348,
        "index": 0
      },
      {
        "lat": -36.86608469579369,
        "speed": 4,
        "lng": 174.72548073157668,
        "dist": 1.1740257992762348,
        "index": 0
      },
      {
        "lat": -36.866103052161634,
        "speed": 5,
        "lng": 174.72563814371824,
        "dist": 1.1740257992762348,
        "index": 0
      },
      {
        "lat": -36.8661513319239,
        "speed": 6,
        "lng": 174.7257921192795,
        "dist": 1.1740257992762348,
        "index": 0
      },
      {
        "lat": -36.86634725891054,
        "speed": 7,
        "lng": 174.72605866380036,
        "dist": 1.1740257992762348,
        "index": 0
      },
      {
        "lat": -36.86636704020202,
        "speed": 8,
        "lng": 174.72634574398398,
        "dist": 1.1740257992762348,
        "index": 0
      },
      {
        "lat": -36.86640760861337,
        "speed": 9,
        "lng": 174.72647675313056,
        "dist": 1.1740257992762348,
        "index": 0
      },
      {
        "lat": -36.866334015503526,
        "speed": 10,
        "lng": 174.7267128713429,
        "dist": 1.1740257992762348,
        "index": 0
      },
      {
        "lat": -36.86633242294192,
        "speed": 11,
        "lng": 174.72689299844205,
        "dist": 1.1740257992762348,
        "index": 0
      },

  ]


function findCloseLat(lat){

  var latArr = []

  testingCoords.map(function(cords, i){

    latArr.push(cords.lat)

  })

  var closest = latArr.reduce(function(prev, curr) {
  return (Math.abs(curr - lat) < Math.abs(prev - lat) ? curr : prev);
  });

  var found_object = _.find(testingCoords, 'lat', closest);
  console.log(found_object)


}


findCloseLat(-36)
