// created an instance of form,result div & container div
const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";
// used edamam free api for developers to get appId & key
const appId = "84bee003";
const appKey = "329155bd64ad8ebb0f33a82ffc58e501";

const fetchAPI = async () =>{
  // Base url containing user query,appId & appKey
  const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${appId}&app_key=${appKey}&from=0&to=20`;

  const response = await fetch(baseURL);
  const data = await response.json();
//   generateHTML(data.hits);
  console.log(data);
}