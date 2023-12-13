window.addEventListener('DOMContentLoaded', async () => {

  const button = document.getElementById('button-element');
  const placeholder = document.getElementById('placeholder');
  
  const URL = "https://raw.githubusercontent.com/dariusk/corpora/master/data/corporations/fortune500.json";
  const apiOptions = { method: "GET" };
  const response = await fetch(URL, apiOptions);
  const result = await response.json();

  button.addEventListener('click', function () {
    var numCompanies = 499
    var randomCompany = Math.floor(Math.random() * numCompanies);
    placeholder.textContent = result.companies[randomCompany];
  }); 
});