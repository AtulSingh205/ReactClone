import React, { useEffect, useState } from 'react'


function App() {
  const [api, setApi] = useState(null)
  const [Search, setSearch] = useState("")
  const API_KEY = "7300bf62711c45b49e0145036251609"
  async function fetchData() {
    let ressult = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${Search}`)
    let Store = await ressult.json()
    setApi(Store)
    // console.log(api)
  }
  // useEffect(() => {
  //   fetchData()
  // }, [])
  return (
    <div>
      <div>
        <input value={Search} className='border-2' type='text ' placeholder='enter city' onChange={(e) => setSearch(e.target.value.toLowerCase())}></input>
        <button onClick={()=>fetchData()}>Search</button>
        {console.log(api)}
      </div>
        {api &&  
        <div className='h-[200px] w-[200px] rounded-2xl bg-blue-400 flex items-center flex-col justify-center text-amber-50'>
          <h1>Country:{api.location.country}</h1>
          <h1>City:{api.location.name}</h1>
         <h1>State:{api.location.region}</h1>
          <h1>temp:{api.current.temp_c}degC</h1>
          <h1>{api.current.condition.icon}</h1>
        </div>
        }
      </div>

  )
}

export default App