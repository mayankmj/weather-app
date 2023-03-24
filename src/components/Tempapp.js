import React, { useEffect, useState } from 'react';
// import { useState } from 'react';
import "./css/style.css";
const Tempapp = () =>{
    
    const[city,setCity] = useState(null);
    const[search,setSearch] =useState("Mumbai")

    useEffect( ( ) =>{
        const fetchApi = async()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=15ea8f1c8f1d6b2e748c274bc1a39a8b`
            const response = await fetch(url);
            // console.log(response);
            const jsonRes = await response.json()
            // console.log(jsonRes);
            setCity(jsonRes.main);
        }
        
        
        fetchApi();
    },[setSearch])
    return(
        <>
            <div className="box">
                <div className="inputData">
                   <input 
                     type="search"
                     className="inputFeild"
                     onChange ={ (e)=>{
                        setSearch(e.target.value);
                     }}

                     />
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

               </h1>

               <h3 className="temp_min_max">
                {city.temp}
               </h3>
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