import React,{useEffect,useState} from "react";
import Recipe from './Recipe';
import './App.css';


const App=()=>{
  const APP_ID="d33d0b3b";
  const APP_KEY="138248eaa86458e84b46c9bb25c6e91a";
  const [recipes,setRecipes]=useState([])
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('chicken');

 
  
  useEffect(()=>{
    getRecipes();
    console.log("lets say we")
  },[query])
 
  const getRecipes=async() => {
    const response= await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }
  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
  }
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>

      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe key={recipe.recipe.label} 
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    
    </div>
  );
}

export default App;
