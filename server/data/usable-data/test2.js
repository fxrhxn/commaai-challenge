var fs = require('fs')

// Function that creates the monthYear files.
function createMonthYearFiles(){

  var trip_number = 0

  fs.readdir('./trip-data', function(err, filenames){
    if(err){
      console.log(err)
    }else{

      filenames.map(function(eachfile, key){
        createObject(eachfile, key)
      })


    }
  })
}

createMonthYearFiles()

function createObject(filename, trip_number){

  var anothertest = require('./anothertest')

  anothertest.trip_number = trip_number
  anothertest.filename = filename
//ßßß  anothertest.data_route = require('./trip-data/' + filename) || null


  var stringify = JSON.stringify(anothertest, null, 3)

  fs.appendFile('./anothertest.js', stringify , function (err) {
    if (err) return console.log(err);
  //  console.log(JSON.stringify(file));
  //  console.log('writing to ' + fileName);
  });

}
