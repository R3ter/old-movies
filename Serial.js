import {Link} from 'react-router-dom';
const Serial=(pre)=>{

    return(
        <div>
        <Link to={'/Serialwatch'+pre.name}>
        <img src={pre.name+".jpg"}></img>
        <p>{pre.name}</p>
        </Link>
        </div>
    )
}

export default Serial;