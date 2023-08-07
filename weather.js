
    var apiKey ="&appid=c57607fe8dd87e056e60ea02f8e7363d";
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
    
    // var city = "goa";
    // console.log(city);
    // callApi();


async function callApi()
{
    var city = document.getElementById('searchInput').value ;
    var result =  await fetch(apiUrl+city+apiKey)
    result = await result.json();
    console.log(result);
    document.getElementById('tempvalue').innerHTML = [result].map((data)=>{
        let t = ((data.main.temp) - 273).toFixed(2);
        return `${t}°C` 
    })
    document.getElementById('humidityval').innerHTML = [result].map((data)=>{
        let t = ((data.main.humidity)).toFixed(2);
        return `${t}%` 
    })
    document.getElementById('windVal').innerHTML = [result].map((data)=>{
        let t = ((data.wind.speed)).toFixed(2);
        return `${t}m/s` 
    })
    document.getElementById('cityname').innerHTML = city;
}



var input = document.getElementById("searchInput");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btnclick").click();
  }
});