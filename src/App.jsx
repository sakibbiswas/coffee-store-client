
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffeecard from './components/Coffeecard'
import { useState } from 'react'

function App() {
  const Loadedcoffees = useLoaderData()
  const [coffees, setcoffes] = useState(Loadedcoffees)
  return (
    <div className='m-20 '>
      <h1 className='text-6xl text-center'>coffe store : {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-5  mt-10'>
        {
          coffees.map(coffee => <Coffeecard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setcoffes={setcoffes}
          ></Coffeecard>)
        }
      </div>
    </div>
  )
}

export default App
