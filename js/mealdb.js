const searchFood = () =>{
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  if(searchText == ''){
    const alertMsg = document.getElementById('alert-msg')
    alertMsg.innerHTML = `
    <div class="alert alert-danger mx-auto text-center fw-bold text-white w-25" role="alert">
      Input field not be emty
    </div>
    `
    // return
  }else{
    // console.log(searchText);
  searchField.value ='';
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${searchText}`;
  // console.log(url);
  fetch(url)
  .then(response => response.json())
  .then(data => displaySearchResult(data.meals));
  }
  
}

const displaySearchResult = meals => {
  const searchResult = document.getElementById('search-result')
  searchResult.textContent = '';
  for(const meal of meals){
    console.log(meal);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
      <div class="card">
        <img width="100%" src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text text-justify">${meal.strInstructions.slice(0,198)}</p>
        </div>
        <button class="btn btn-success w-50 mx-2 mb-3">Order Now</button>
      </div>
    `
    searchResult.appendChild(div)
  }
}