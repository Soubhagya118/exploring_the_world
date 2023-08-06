import React,{useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import ResturantCard from './ResturantCard';
import Shimmer from './Shimmer';
import { GET_RESTAURANTS_LIST } from './data';




const Body =()=>{
    const [allresturant,setAllresturant] = useState([]);
    const [filteredresturant , setFilteredresturant]= useState([]);
    const [searchText, setSearchText]=useState("");

    useEffect(()=>{
        getDataFromServer();
    }, []);

    async function getDataFromServer(){
    const datas = await fetch(GET_RESTAURANTS_LIST);

    const jSon = await datas.json();
    //console.log("jSon",jSon)
    
    const resturantsfindFromApi=jSon.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setFilteredresturant(resturantsfindFromApi);
    setAllresturant(resturantsfindFromApi);
console.log(resturantsfindFromApi)
    console.log(typeof resturantsfindFromApi)
    }

    const filterFn=(searchText,allresturant)=>{
        const data = allresturant.filter((resturant)=>resturant?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
        console.log("find",data)
       return data;
}
console.log("render");
// conditional rendering (if, &&, ?.)
// if my resturant is empty => Shimmer UI
// if resturant has data => actual data UI

    return (allresturant.length == 0)? <Shimmer/> : (
        <>
         <div className='search'>
        <input placeholder='search' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
        <button onClick={(e)=>{
           // e.preventDefault();
          
           const show=filterFn(searchText,allresturant);
           setFilteredresturant(show);
        }}>search {searchText}</button>
        </div>

        <div className="resturantList">
       { (filteredresturant.length ==0 )? <h1>No Resturant Found</h1>:
        filteredresturant.map((resturant)=>{
            return (
                
                <Link to={"/resturant/"+resturant?.info?.id} key={resturant?.info?.id} className='each_Card'><ResturantCard {...resturant?.info}/></Link>
                )
            })
            }
       </div> 

    </>
    )
}



export default Body;
