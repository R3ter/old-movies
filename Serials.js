import Serial from './Serial.js';

const serials=[{name:'mario'},{name:'shob3rfne'},
{name:'waleedras'},{name:'peaky blinders'}]

const serialnames=serials.map((name)=>{
    return name.name;
})
const Serials=()=>{
    return(
    serialnames.map((name)=>(
        <Serial name={name} src={name+'.mp3'} ></Serial>

    )))
}
export default Serials;