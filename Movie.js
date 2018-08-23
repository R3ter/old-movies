import React from 'react'
import {Link} from 'react-router-dom'
let name;
const Movie=(pre)=>{
   const click=()=>{
       
   }
    return(
        <div className='movies'>
        <Link to={'watch'+pre.name}>
        <form onClick={click}>
        <img  className='img' src={pre.src} ></img>
        <p className='moviename'>{pre.name}</p>
        </form>
        </Link>
        </div>
    )
}
export default Movie;
export {name};