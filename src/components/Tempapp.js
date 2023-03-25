import React, { useEffect, useState } from 'react';
// import { useState } from 'react';
import "./css/style.css";
const Tempapp = () =>{
    
    const[city,setCity] = useState(null);
    const[search,setSearch] =useState("delhi")

    useEffect( () =>{
        const fetchApi = async()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=15ea8f1c8f1d6b2e748c274bc1a39a8b`
            const response = await fetch(url);
            // console.log(response);
            const jsonRes = await response.json()
            console.log(jsonRes);
            setCity(jsonRes.main);
            console.log(search);
        };
        fetchApi();
    }, [search] )
    return(
        <>
            <div className="box">
                <div className="inputData">
                   <input 
                     type="search"
                     className="inputFeild"
                     value={search}
                     onChange ={ (event)=> {
                        setSearch(event.target.value);
                     }}/>
                </div>
            {
                !city ? (
                    <p> No Data Found</p>
                ) : (
                    <div>
                    <div className="info">
            <h2 className="location">
               <i className="fas fa-street-view"></i>{search}</h2>
               <h1 className="temp">
               {city.temp}
               </h1>

               <h2 className="temp_min_max"> Min temp {city.temp_min} | Max temp {city.temp_max}
               </h2>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            </div>
          )
               
         }
         </div>
        </>
    )
}

export default Tempapp