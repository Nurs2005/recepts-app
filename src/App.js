import { useState,useEffect } from 'react';
import './App.css';
import Recepts from './components/Recepst/Recepts';
import Form from './components/Form/Form';
function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const APP_ID = '062c102f';
  const APP_KEY = 'aa896c172fb06e450cbd4645fcd7ceee';

  useEffect(() => {
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20&calories=591-722&health=alcohol-free`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <Form
      onSubmit={getSearch}
      value={search}
      onChange={updateSearch}
      />
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recepts
            key={recipe.recipe.label}
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
