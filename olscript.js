import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './css.scss';
import Top from './Top';
import WatchMovie from './WatchScreen';
import Main from './Main'
import Movie from './Movie';
import {seartcharray1} from './Main';
import Serials from './Serials';
import WatchSerialscreen from './WatchSerialScreen';
// require('./server/server.js')



const main=()=>(
    <Main/>
)
const Watch=(pre)=>(
    <div>
    <WatchMovie pre={pre.match.params.id} 
    url={'../Movies/'+pre.match.params.id+'.mp4'}/>
  
    </div>
)
const Notfind=()=>(
    <p>404 page is not found</p>
)
const Search=(t)=>{
    
    const result=seartcharray1.filter((name)=>{
        return name.includes(t.match.params.search);
    })
    if(result.length===0){
        return(<h1 className='noresult'>No Results</h1>)
    }else{
    return(result.map((name)=>{
        return <Movie src={name+".jpg"} name={name} ></Movie>
    })
    
    )}
}
const Serialspage=()=>(
    <Serials/>
)
const WatchSerial=()=>(
    <WatchSerialscreen />
)



const Routes=()=>(
        <BrowserRouter>
        <div>
        <Top/>
        <Switch>
        <Route path='/' component={main} exact={true}/>
        <Route path='/watch:id' component={Watch} exact={true}/>
        <Route path='/search=:search' component={Search} />
        <Route path='/serials' component={Serialspage}/>
        <Route path='/Serialwatch:id' component={WatchSerial}/>
        <Route component={Notfind}/>
        </Switch>
        </div>
        </BrowserRouter>
    )

ReactDOM.render(<Routes/> ,document.getElementById('app'))

