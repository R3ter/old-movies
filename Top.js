import {Link} from 'react-router-dom';
import {seartcharray1} from './Main';

const Top=()=>{
    const search=(e)=>{

        e.preventDefault();
        const text= e.target.elements.text.value;
        if(text.trim()){
        location.href=('/search='+text)}
    }
return(
    <div className='top'>
    <Link to='/'>
    <h1>Movies.com</h1>
    </Link>
    <form onSubmit={search}>
    <input name='text' type='text' />
    <button>Search</button>
    </form>
    
    <Link to="/">
    <button>Movies</button>
    </Link>
    <Link to='/serials'>
    <button>serials</button>
    </Link>
    </div>
)}
export default Top;