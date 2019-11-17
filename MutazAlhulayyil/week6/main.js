console.log("connected");

("use strict");
// (function() {
console.log("test");
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "be2693048d6ac14023540b4fe5d6ab6d";
//OnClick Event for the button
//Inside th function(){ Call getWeatherReport(cityName)}

//   to get the value from the text filed
$("#getTemp").click(function() {
  event.preventDefault();
  // console.log();
  var cityName = $("#city").val();
  console.log(cityName);
  getWeatherReport(cityName);
});
// end of the function

function getWeatherReport(cityName) {
  console.log(weatherUrl + cityName + "&appid=" + apiKey);
  $.ajax(
    // url: weatherUrl + cityName + '&appid=' + apiKey,
    {
      url: weatherUrl + cityName + "&appid=" + apiKey,

      success: function(response) {
        console.log(response.main.temp);
        $('#temp').text(Math.floor(response.main.temp-273));
        // append on the Html.
        $('#location').text((cityName));
        
      },
      error: function(response) {
        console.log(response);
        alert('Not A city!')
      }
    }
  );

  //   console.log(response.main);
}
// });