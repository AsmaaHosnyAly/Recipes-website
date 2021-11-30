// import Nav from '../../../components/site/nav/nav'
import './profile.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { useEffect, useState } from 'react'
import { db } from '../../../firebase'
import { useDispatch, useSelector } from "react-redux";
import { updateWishlist, removeItemWishlist } from "../../../redux/actions/wishlist"
import { Link } from 'react-router-dom'
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  deleteDoc,
} from 'firebase/firestore'



function Profile() {

  const [recipes, setRecipes] = useState([])
  const _recipes  = useSelector((state) => state.wishlist.recipes);
  const dispatch = useDispatch();
  // console.log(recipes);
  useEffect(
    () =>
      onSnapshot(collection(db, 'recipes'), (snapshot) =>
        setRecipes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  )

  const removeItemFromWishList = index => {

    dispatch(removeItemWishlist(index)
    );
  };

  return (
    // <section className='profile'>
    //   <div className='profile__tabs'>
    //     <div className='profile__tab'>
    //       <input
    //         type='radio'
    //         id='shoppingList'
    //         name='profile'
    //         className='profile__input'
    //       />
    //       <label className='profile__label' for='shoppingList'>
    //         Shopping List
    //       </label>
    //       <div className='profile__content'>
    //         <h3>Your Shopping List</h3>
    //         <p>that is shpping list tap</p>
    //       </div>
    //     </div>
    //     <div className='profile__tab'>
    //       <input
    //         type='radio'
    //         id='emailPrefrences'
    //         name='profile'
    //         className='profile__input'
    //       />
    //       <label className='profile__label' for='emailPrefrences'>
    //         Email Prefrences
    //       </label>
    //       <div className='profile__content'>
    //         <h3>Your Email Prefrences</h3>
    //         <p>that is email tap</p>
    //       </div>
    //     </div>
    //     <div className='profile__tab'>
    //       <input
    //         type='radio'
    //         id='mySettings'
    //         name='profile'
    //         className='profile__input'
    //       />
    //       <label className='profile__label' for='mySettings'>
    //         My Settings
    //       </label>
    //       <div className='profile__content'>
    //         <h3>Your My Settings</h3>
    //         <p>that is my Settings tap</p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className='profile'>
      <div className='profile__tabs'>
        <Tabs>
          <TabList>
            <Tab>Shopping List</Tab>
            <Tab>Favorite Recipes</Tab>
            <Tab>My settings</Tab>
          </TabList>

          <TabPanel>
            <h2>shopping list content</h2>
            <p>User shopping list goes here</p>

            <ul>
            {_recipes.map((recipe) => {
            return (
              <>
              <li
                key={recipe.id} scope="row">
                  {recipe.id}
               </li>
               <li><img src={recipe.imagePath} width="100" height="100"/></li>
               <li></li>
               <span onClick={() => removeItemFromWishList(recipe)} type="button" className="btn btn-danger btn-sm rounded-0" >Remove</span>
              <li> </li>
               
                </>   
               
            );
          })}
            </ul>
          </TabPanel>
          <TabPanel>
            <h2>Favotite Recipes content</h2>
            <p>User Favorite Recipes goes here</p>
          </TabPanel>
          <TabPanel>
            <h2>My settings content</h2>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  )
}

export default Profile
