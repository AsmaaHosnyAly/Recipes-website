import React from 'react'
import { useLocation, useParams } from 'react-router'
import { db, app } from '../../../firebase'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore'

export default function RecipeCat() {
  const { id } = useParams()
  const [recipesCat, setRecipeCat] = useState([])

  const TestQuery = async (id) => {
    console.log(id)
    const q = query(
      collection(db, 'recipes'),
      where('categoryRecipeId', '==', `${id}`)
    )
    const querySnapshot = await getDocs(q)
    let list = []

    querySnapshot.forEach((recipe) => {
      let item = {
        ...recipe.data(),
      }
      list.push(item)
    })
    console.log('list', list)
    setRecipeCat(list)
  }
  useEffect(() => {
    TestQuery(id)
  }, [])
  return (
    <div
      style={{
        marginTop: '6rem',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <h1>Category</h1>
      <div className='recipe-list'>
        {recipesCat.map((recipe) => {
          return (
            <Link to={`/${recipe.index}`} key={recipe.index}>
              <section className='one-recipe'>
                <div className='one-recipe__img'>
                  <img src={recipe.imagePath} alt='...' />
                </div>
                <div className='one-recipe__content'>
                  <div className='one-recipe__heading'>
                    <small className='one-recipe__category'>
                      {recipe.recipeCatName}
                    </small>
                    <h4 className='one-recipe__title'>{recipe.recipeName}</h4>
                  </div>
                  <div className='one-recipe__data'>
                    <p className='one-recipe__time'>
                      <i class='bx bx-time-five'></i> {recipe.recipePreperTime}
                    </p>
                    <p className='one-recipe__difficulty'>
                      {recipe.DegreeOfDifficulty.toUpperCase()}
                    </p>
                  </div>
                </div>
              </section>
            </Link>
          )
        })}
        <div></div>
      </div>
    </div>
  )
}
