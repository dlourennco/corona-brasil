setInterval(api, 180000 );

function api () {
  let proxy = 'https://cors-anywhere.herokuapp.com/'
  let apiUrl = `${proxy}https://thevirustracker.com/free-api?countryTotal=BR`

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      let country = data.countrydata[0]
      let { 
        total_cases, 
        total_recovered, 
        total_deaths, 
        total_new_cases_today, 
        total_new_deaths_today, 
        total_active_cases 
      } = country

      document.getElementById('casos-totais-span').innerText = total_cases
      document.getElementById('novos-casos-hoje-span').innerText = total_new_cases_today
      document.getElementById('mortes-span').innerText = total_deaths
      document.getElementById('novas-mortes-hoje-span').innerText = total_new_deaths_today
      document.getElementById('casos-ativos-span').innerText = total_active_cases
      document.getElementById('casos-curados-span').innerText = total_recovered
    })
}
