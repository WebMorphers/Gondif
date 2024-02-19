import React, { useEffect, useState } from 'react'

function AutoCompleteAdress() {
  



  const [source,setSource] = useState<any>();

  const [AdressList,setAdressList] = useState<any>(null);

  useEffect(()=> {
    if (source) {
      const DelayedRequest = setTimeout(()=>{
      getAdressList()
      console.log(AdressList);
    },1000)
    return ()=> clearTimeout(DelayedRequest)  //reset timeout
  }
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
    <div className='relative'>
        <label>The Cars's Address</label>
        <input type="text"
         className='bg-white p-1 border w-full rounded-md outline-none '
         value={source}
         onChange={(e)=>setSource(e.target.value)}></input>

        {AdressList?.data?.suggestions? 
        <div className=' h-full text-black z-10 shadow-lg absolute w-full'>
        {AdressList?.data?.suggestions.map((item:any,index:number)=>(
          <div           
          className='bg-gray-100 hover:bg-gray-200 p-2 cursor-pointer'
          onClick={()=>{
            setSource(item.name);
            setAdressList([]);
          }}          >
          <h2>{item.name}</h2>
            <span className='font-light text-xs'>{item.full_address}</span>
            </div>
        
          ))}
        </div>:null}
    </div>
  )
}

export default AutoCompleteAdress