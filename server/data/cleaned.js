/*

About - Area where the data is seperated in variables and more easier to use.

*/

var tripData = require('./trip-data/2016-07-02--11-56-24.json')
var moment = require('moment')
var fs = require('fs')
var _ = require('lodash')

var month = moment('2016-07-02').format('MMMM');
var year = moment('2016-07-02').format('YYYY');
var fileName = month + year + '.js';


var monthAndYears = ['July2016', 'January2017', 'February2017', 'March2017', 'April2017', 'May2017', 'June2017', 'July2017', 'August2017', 'September2017', 'October2017']



//Function to create the data inside of the month files.
function createDataInMonths(monthYear){

  fs.readdir('./trip-data', function(err, filenames){
    if(err){
      console.log(err)
    }else{

      //Counter for the file variables.
      var counter = 0


      //Loop through all of the file names.
      for(var i = 0; i < filenames.length; i++){


        var month = moment(filenames[i].substring(0,10)).format('MMMM');
        var year = moment(filenames[i].substring(0,10)).format('YYYY');
        var fileName = month + year;

        // Check if the file name is a match.
        if(fileName == monthYear){

          //Add one to the counter.
          counter += 1

          //Variable Name.
          var varName = fileName + "_" + String(counter)

          //Here is the whole variable.
          var wholeVariable = `\n\n export var ${varName} = "../trip-data/${filenames[i]}"`

          // Append the file.
          var appendFile = `./cleaned-data/${monthYear}.js`

          fs.appendFile(appendFile, wholeVariable, function (err) {
            if(err){
              console.log(err)
            }else{
              console.log('Saved!');
            }

          });


        }


      }

    }
  })
}











// Function that creates the monthYear files.
function createMonthYearFiles(){
  fs.readdir('./trip-data', function(err, filenames){
    if(err){
      console.log(err)
    }else{


      for(var i = 0; i < filenames.length; i++){

        createNewDateFile(filenames[i].substring(0,10))

      }

    }
  })
}


function createNewDateFile(filename){

  //Check if the filename exists
  if(false){

    return;

  }else{

    //Create the filename here.
    var month_ = moment(filename).format('MMMM');
    var year_ = moment(filename).format('YYYY');
    var fileName_ = month_ + year_ + '.js';

    var filepath = './cleaned-data/' + fileName_

    fs.writeFile(filepath, '//Variables for data go here.', (err) => {
        if (err){
          console.log('err')
        }else {
          console.log("The file was succesfully saved!");
        }

    });


  }

}

//reads all of the files and creates a monthYear file for each one.
// monthYear.js


//reads all of the files and creates variables in each monthYear file referencing to the json that stores the data.
// var monthYear_0 = require('')

// Check if the date is July 2016, then write a variable.

// export var july2016_1 = require("")
