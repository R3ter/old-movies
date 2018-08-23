
import React from 'react'
import ReactDOM from 'react-dom'
import Window from 'react-modal'
import Top from '../Top'
import Movie from '../Movie'
import 'normalize.css/normalize.css';
import '.././css.scss'
import {result} from '../Top'
class All extends React.Component{
    constructor(pre){
        super(pre);
       this.state={movies:result}
    }
    render(){
        return(
        <div>
            <Top array={this.state.movies}/>
            {this.state.movies.map((name)=>{
                return <Movie name={name}
                src={name+".jpg"}
                />})}
        </div>)

    }
}
// console.log(result);
ReactDOM.render(<All/>,document.getElementById('app'))