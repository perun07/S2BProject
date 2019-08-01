console.log("Home Page Beginnings");
let userInput = ""

function renderGame(results, userInput){
        //   $('#country-container').empty()
          for (let i = 0; i< results.length;i++){
              let gameName = results[i].name;
              let gameDescription = results[i].description
              let gamePhoto = results[i].image.screen_large_url
              let gameSummary = results[i].deck
            //   let consoleButton1 = results[i].platforms[0].name
            //   let consoleButton2 = results[i].platforms[1].name
            //   let consoleButton3 = results[i].platforms[2].name
              if (userInput.toLowerCase() == gameName.toLowerCase()){
                console.log(gameName);
     
                $('#photo img').attr('src',gamePhoto)
                $('#card').html(gameDescription)
                $('#summary').html(gameSummary)
                // $('#console1').text(consoleButton1)
                // $('#console2').text(consoleButton2)
                // $('#console3').text(consoleButton3)
                // $('#country').text("Country Name: " +countryName)
                // $('#capital').text("Capital: "+countryCapital)
                // $('#region').text("Region: "+countryRegion)
                // $('#languages').text("Native Language: "+countryLanguage)
                // $('#population').text("Population: "+countryPop)
                // $('#currency').text("Currancy: "+countryDol)
        
              }
          }
      }


//Game API Call
  $('#game-search').submit(function(event) {
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
    renderGame(res.results, userInput);
    console.log(res);
    
    }
})
  });