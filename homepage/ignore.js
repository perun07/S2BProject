console.log("Home Page Beginnings");

//ALLL OF MY WASTED PREWORK WOHOO>>>>>////



// Model Roll OUt//
// const express = require('express')
// const app = express()
// const bodyParser = require('body-parser')
// const mongoose = require("mongoose")
// const mongoURI = 'mongodb://localhost:27017/' + 'prices'
// const methodOverride = require("method-override")


// igdb api's//
// const igdb = require('igdb-wrapper-node')
// const client = igdb('8122a17b80c733bedbcefa8b0d8d4824');

//Schema Connections 
// const Schema = mongoose.Schema

// const db = mongoose.connection

// app.use(bodyParser.urlencoded({extended:true}))
// app.use(methodOverride('_method'))

// const response = await igdb()
//     .fields(['fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,,videos']) // fetches only the name, movies, and age fields
//     .fields('name,movies,age') // same as above

//     .limit(5) // limit to 50 results
//     .offset(5) // offset results by 10

//     .sort('name') // default sort direction is 'asc' (ascending)
//     .sort('name', 'desc') // sorts by name, descending
//     .search('mario') // search for a specific name (search implementations can vary)

//     .where(`first_release_date > ${new Date().getTime() / 1000}`) // filter the results

//     .request('/games'); 

// console.log(response.data);


//infomation API GET Request
// igdb.platforms.get({}, function(err, response) {
    // response handler
//   });

//price api variables
// let priceSearch= []
// let userInput = ''


// price function
// function renderPrice(product, userInput){
//       console.log(product) 
//         //   $('#').empty()
//           for (let i = 0; i< product.length;i++){
//               let price = product[i];
//               console.log(price);
              
//               if (userInput.toLowerCase() == product.toLowerCase()){
//                console.log('price is ' + price)
//                $('#priceItem').text("Purchase Price " +price)
//               }
//           }
//       }
      
//price api
// Create the XHR object.
// function createCORSRequest(method, url) {
//     let xhr = new XMLHttpRequest();
//     if ("withCredentials" in xhr) {
//       // XHR for Chrome/Firefox/Opera/Safari.
//       xhr.open(method, url, true);
//     } else if (typeof XDomainRequest != "undefined") {
//       // XDomainRequest for IE.
//       xhr = new XDomainRequest();
//       xhr.open(method, url);
//     } else {
//       // CORS not supported.
//       xhr = null;
//     }
//     return xhr;
//     console.log(xhr);
    
//   }
// //   https://www.giantbomb.com/api/search/?api_key=050a497bc4687e2c26c5904e405dedfbc334fdb1&format=json&query=the-towe-of-beatrice&resources=game
  
//   // Make the actual CORS request.
//   $('#price-search').submit(
// function makeCorsRequest(event) {
//     event.preventDefault()
//     userInput = $('#search-term').val()
//     $('#search-term').val("")
//     // This is a sample server that supports CORS.
//     var url = `http://www.giantbomb.com/api/search?api_key=050a497bc4687e2c26c5904e405dedfbc334fdb1&format=json&query=${userInput}&resources=game`;
//     // var url ='https://www.giantbomb.com/api/search/?api_key=050a497bc4687e2c26c5904e405dedfbc334fdb1&format=json&query=the-towe-of-beatrice&resources=game'
//     var xhr = createCORSRequest('GET', url);
//     if (!xhr) {
//       alert('CORS not supported');
//       return;
//     }
  
//     // Response handlers.
//     xhr.onload = function() {
//       var text = xhr.responseText;
//       var title = renderPrice(text);
//       alert('Response from CORS request to ' + url + ': ' + title);
//     };
  
//     xhr.onerror = function() {
//       alert('Woops, there was an error making the request.');
//     };
  
//     xhr.send();
//   })
  $('#price-search').submit(function(event) {
    event.preventDefault()
    userInput = $('#search-term').val()
    $('#search-term').val("")
  $.ajax({
    // url: `http://www.giantbomb.com/api/search?&query${userInput}`,
    url: `http://www.giantbomb.com/api/search?api_key=050a497bc4687e2c26c5904e405dedfbc334fdb1&format=json&query=${userInput}&resources=game`,
    dataType: "jsonp",
    jsonp: 'json_callback',
    data: {
      api_key: '050a497bc4687e2c26c5904e405dedfbc334fdb1',
      format: 'jsonp',
    },
    success: function(res) {
    //   callback(res);
    console.log(res);
    
    }
})
  });
// $('#price-search').submit(function(event){
//     event.preventDefault()
//     userInput = $('#search-term').val()
//     $('#search-term').val("")
//     $.ajax({
//       url: `http://www.giantbomb.com/api/search?api_key=050a497bc4687e2c26c5904e405dedfbc334fdb1&format=json&query=${userInput}&resources=game`,  
//       success: function(response){  
//           console.log(response);   
//              priceSearch= response
//             renderPrice(priceSearch,userInput)
//         },
//         error: function(err){
//             console.log(err);
            
//         }
//     })
    
// })


//games api




//search for items//
//Get and Post Routes//
//photo//

// //connection established//
// mongoose.connect(mongoURI, {useNewUrlParser: true}, ()=>{
//     console.log("Mongoose Connection Set");
    
// })

// // Dogs.find({}, (err, dogs) => {
// //     console.log(dogs);
// // })

//   app.listen(3000, function() {
//     console.log('localhost connected');
//   })

//   module.exports = app;

// //check check check???//
// db.on('error', (err) => console.log(err.message + ' is mongod not running?'))
// db.on('connected', () => console.log('mongo connected: ', mongoURI))
// db.on('disconnected', () => console.log('mongo disconnected'))