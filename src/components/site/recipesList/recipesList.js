import './recipesList.css'
import Recipe from '../recipe/recipe'
import { useDispatch } from 'react-redux'
import { collection, onSnapshot } from '@firebase/firestore'
import { db } from '../../../firebase'
import { useState, useEffect } from 'react'
import {
  updateWishlist,
  removeItemWishlist,
} from '../../../redux/actions/wishlist'

const RecipeList = () => {
  // Get Recipes
  const [recipes, setRecipes] = useState([])
  useEffect(
    () =>
      onSnapshot(collection(db, 'recipes'), (snapshot) =>
        setRecipes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  )

  return (
    <section className='recipe-list'>
      {recipes ? (
        recipes.map((recipe) => {
          return (
            <>
              <Recipe {...recipe} key={recipe.id} />
            </>
          )
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </section>
  )
}

export default RecipeList
