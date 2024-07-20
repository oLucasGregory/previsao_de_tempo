const key = ('570c2766dec839f77d0395b17c025134')


function resultado(dados){
    console.log(dados)
    document.querySelector(".name-city").innerHTML =  dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + '°C'
    document.querySelector(".ceu").innerHTML = dados.weather[0].description
    document.querySelector(".umi").innerHTML = 'Humidade de: ' + dados.main.humidity +'%'
    document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    
    document.querySelector(".city").value = ""
}
async function search(city){
      const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
      resultado(dados)
}

function cityName(){
    const city = document.querySelector(".city").value
    search(city)
}