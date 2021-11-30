
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

export default function SearchRecipe() {

    const  location =useLocation()
    const [searchTxt,setSearchTxt]=useState([]);

    // const recipeId = search.split("=")[1]
    const recipeCatId= location.pathname.split("=")[1]
    console.log(recipeCatId)
    const [recipesCat,setRecipeCat]=useState([]);

    const TestQuery = async (search) => {
        //console.log('call test query',search)
        const q = query(
          collection(db, 'recipes'),
          where('recipeName', '==', `${search}`)
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
        setSearchTxt(list)
      
      }
     
      TestQuery(recipeCatId)
    
    return (
        <div>
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
        </div>
    )
}
