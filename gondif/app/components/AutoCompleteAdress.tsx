import React, { useEffect, useState } from 'react'

function AutoCompleteAdress() {
  


  const [source,setSource] = useState<any>();

  const [AdressList,setAdressList] = useState<any>([]);

  useEffect(()=> {
    
      getAdressList()
      console.log(AdressList);
    

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
    <div>
              
        <div className='bg-black'>
        {AdressList?.suggestions?.map((adress:any,index:number)=>(
          <h2>{adress.suggestions.name}</h2>
        ))
      }
        </div>
              

        <label>Your Adress</label>
        <input type="text" className='bg-white p-1 border w-full rounded-md outline-none ' value={source? source : null} onChange={(e)=>{setSource(e.target.value); console.log("targeted")}}></input>
    </div>
  )
}

export default AutoCompleteAdress