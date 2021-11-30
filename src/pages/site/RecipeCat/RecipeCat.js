import React from 'react'
import { useLocation, useParams } from 'react-router'
import { db, app } from '../../../firebase'
import { useEffect ,useState} from 'react';
import {
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore'



export default function RecipeCat() {
    const nameCat =useParams()
    const  location =useLocation()
    // const recipeId = search.split("=")[1]
    const recipeCatId= location.search.slice(1).split("&")[0].split("=")[1]
    const [recipesCat,setRecipeCat]=useState([]);

   
const TestQuery = async (id) => {
    console.log('call test query', id)
    const q = query(
      collection(db, 'recipes'),
      where('categoryRecipeId', '==', `${id}`)
    )
    const querySnapshot = await getDocs(q)
    let list = [{  }]

    querySnapshot.forEach((recipe) => {
      let item = {
        ...recipe.data(),
      }
      list.push(item)
    })
    console.log('list', list)
    setRecipeCat(list)
   
  }
    
    
      TestQuery(recipeCatId)
    return (
        <div>
            {recipesCat.map((recipe)=>{
                return(
                 <div>
                    <div>
                        { <img
                    src={recipe.imagePath}
                    alt='...'
                    width='100'
                    height='100'
                  />}
                  </div>
               </div>
                )
            })}
           <div>

           </div>
          
        </div>
    )
}
