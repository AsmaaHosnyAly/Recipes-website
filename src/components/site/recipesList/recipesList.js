import './recipesList.css'
import Recipe from '../recipe/recipe'
// import { data } from '../../../data/data'
import { collection, onSnapshot } from '@firebase/firestore'
import { db } from '../../../firebase'
import { useState, useEffect } from 'react'

const RecipeList = () => {
  const [recipes, setRecipes] = useState([])

  // --------------- Firebase
  useEffect(
    () =>
      onSnapshot(collection(db, 'recipes'), (snapshot) =>
        setRecipes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  )

  console.log(recipes)
  return (
    <section className='recipe-list'>
      {recipes ? (
        recipes.map((recipe) => {
          return <Recipe {...recipe} key={recipe.id} />
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </section>
  )
}

export default RecipeList
