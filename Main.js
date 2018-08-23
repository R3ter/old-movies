import Top from './Top';
import {Link} from 'react-router-dom';
import Movie from './Movie';

const array=[
    {name:'batman',
    img:'batman.jpg',
    actors:['waleed','fadi']},
    {name:'superman',
    img:'',
    actors:['mohamad','ibrahem']
 },{name:'R3ter',img:'R3ter.jpg'},
 {name:'waleed',img:'waleed.jpg'},
 {name:'waleedras',img:'waleedras.jpg'},
 {name:'avengers'},{name:'wad'},{name:'dawd'},{name:'dwada'}
]
const seartcharray1=array.map((name)=>{
    return name.name
})
const Main=()=>{
    
    
    return (    <div className='all'>
    
    {seartcharray1.map((name)=>(
        <div className='movies' >
        <Movie name={name} src={name+".jpg"}/>
        </div>
    ))}
    </div>
)
}

export {seartcharray1};
export default Main;