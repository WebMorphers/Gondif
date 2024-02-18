import React, { useEffect, useState } from 'react'

function AutoCompleteAdress() {
  



  const [source,setSource] = useState<any>();

  const [AdressList,setAdressList] = useState<any>([]);

  useEffect(()=> {
      const DelayedRequest = setTimeout(()=>{
      getAdressList()
      console.log(AdressList);
    },1000)
    return ()=> clearTimeout(DelayedRequest)  //reset timeout

  },[source])

  const getAdressList = async () => {
    const res = await fetch(`/api/search-adress?q=`+source,{
      headers: { 'Content-Type': 'application/json',}
    })
    const data = await res.json()
    setAdressList(data);
    console.log(data);
  }

  return (
    <div >
        <label>Your Adress</label>
        <input type="text" className='bg-white p-1 border w-full rounded-md outline-none ' value={source} onChange={(e)=>{setSource(e.target.value); console.log("targeted")}}></input>
        {AdressList?.suggestions ? 
        <div className='bg-black h-full '>
        {AdressList?.suggestions.map((item:any,index:number)=>(
          <h2>{item[index].full_adress}</h2>
        
          ))}
        </div>:null}
    </div>
  )
}

export default AutoCompleteAdress