import { debounce, getSuggestions } from "./utils.js";
const searchResults = document.getElementById("src-res");
const searchBar = document.getElementById("search-bar");
toggleSuggestionBox('none');
const handleInputChange = (event) => {
  console.log(event.target.value);
  
  const keyword = event.target.value;
  if(keyword===''){
    toggleSuggestionBox('none');
}
else{

    getSuggestions(keyword).then((data) => {
        console.log(data);
      appendResults(data);
      toggleSuggestionBox();
    });
    
}
  
};

function appendResults(allPlaces) {
    searchResults.innerHTML = "";
  allPlaces.forEach((eachPlace) => {
    createNewSuggestionItem(eachPlace);
  });
  addEventListeners();
}

function toggleSuggestionBox(display) {

    searchResults.style.display = display;

}



function addEventListeners(){
    console.log(document.getElementById('src-res').children);
    Array.from(document.getElementsByClassName('src-res-tile')).forEach((element)=>element.addEventListener('click',clickSuggestion,this))
}
function clickSuggestion(){

    document.getElementById('search-bar').value=this.textContent;
    document.getElementById('src-res').style.display='none';
}



function createNewSuggestionItem(eachPlace) {
  const newSuggestion = document.createElement("div");
  toggleSuggestionBox('block');
 
  newSuggestion.innerHTML = `
    <div class="src-res-tile">${eachPlace}</div>
    `;
    searchResults.appendChild(newSuggestion);
}

searchBar.addEventListener("input", debounce(handleInputChange, 200));
