import React, { useEffect, useState } from 'react'

function AutoCompleteAdress() {
  


  const [source,setSource] = useState<any>();

  const [AdressList,setAdressList] = useState<any>([]);

  useEffect(()=> {
    getAdressList()
  },[])

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
        <label>Adress</label>
        <input type="text" className='bg-white p-1 border w-full rounded-md outline' onChange={(e)=>{e.target}}></input>
    </div>
  )
}

export default AutoCompleteAdress