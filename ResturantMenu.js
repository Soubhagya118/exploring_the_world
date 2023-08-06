import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { GET_RESTAURANT_MENU, RES_IMG_CDN } from './data';
import Shimmer from './Shimmer';






const ResturantMenu = () => {
const [resturant,setResturant] =useState([]);
const [resturantName,setResturantName] =useState("");
const {id}=useParams();

useEffect(()=>{
  getData()
},[]);

async function getData(){
const data =await fetch(`${GET_RESTAURANT_MENU}${id}`)
const jsonData = await data.json();
setResturant(jsonData.data.cards[2]);
setResturantName(jsonData.data.cards[0])

//console.log("fromResturantMenu:-", jsonData.data.cards)


}


console.log(id)
  return (resturant.length == 0) ? <Shimmer/>: (<div className='menulist'>
    <div>
    <h6>Resturant ID: {id}</h6>
  <h1>{resturantName?.card?.card?.info?.name}</h1>
    <img className='menuimg' src={RES_IMG_CDN+resturantName?.card?.card?.info?.cloudinaryImageId}/>
    <h3>Place:- {resturantName?.card?.card?.info?.areaName}</h3>
    <h3>City:- {resturantName?.card?.card?.info?.city}</h3>
    <h3>Ratings:- {resturantName?.card?.card?.info?.avgRating}</h3>
    <h3>Cost for Two:- {resturantName?.card?.card?.info?.costForTwoMessage}</h3>
    </div>
    <div >

      <h1 style={{marginLeft:'60px'}}>Menu</h1>
      <ul style={{listStyle:'none'}}>
      {console.log(resturant?.groupedCard?.cardGroupMap?.REGULAR?.cards)}
        {resturant?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((e,index)=>{
          const dataindata= e?.card?.card?.itemCards
          return(<li key={index}>
          <div>
             <ul >
             <h2>{e?.card?.card?.title}</h2>
                             {/* {console.log("dataindata",e.card.card.itemCards)} */}
                             {(dataindata != undefined) ? (dataindata.map((ele,ind)=>{
                              const infodetail= ele?.card?.info;
                              return (<li key={ind}>
                                <p>{infodetail?.name} {(infodetail?.price !=undefined)?(`price:- ${infodetail.price}`):''}
                                
                                 
                                 </p> 
                             </li>)}
                             )
                             ):''}
                             {/* {(e?.card?.card?.itemCards.length !=0) } */}
         
        
            
            </ul>
         </div>
         </li>
        )}
        )
        }
      </ul>

    </div>
  </div>

  )
}

export default ResturantMenu
