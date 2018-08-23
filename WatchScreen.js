const Watch=(pre)=>{
    return(
        <div className='watching'>
        <h1>{pre.pre}</h1>
        <video controls
        src={pre.url}>
        <track src={"Movies/"+pre.pre+".srt"}
         kind="subtitles" srcLang="ar" 
         
         label="Arabic" default />
    
        </video>
         </div>
    )
}
export default Watch;