
import { useState } from 'react'
import './App.css'
import Card from './Components/Card/Card'
import { useEffect } from 'react';
import Calculation from './Components/Calculation/Calculation';

function App() {

  const [cardInfo, setCardInfo] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);

  // console.log(typeof selectedActors)
  // console.log(selectedActors)

  // console.log({selectedActors})

  useEffect( () => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCardInfo(data))
  }, []) ;

  const handleHireActor = (actor) => {
    const isExist = selectedActors.find(item => item.id === actor.id)

    let count = actor.salary ;

    if(isExist){
     return alert('already booked')
    }
    else{
      selectedActors.forEach(item => {
        count = count + item.salary ;
       
      })
      console.log(count)
      const newSelectedActors = [...selectedActors,actor];
      setSelectedActors(newSelectedActors);

    }

  }
 

  return (
    <>
      <h1 className='text-5xl text-center font-bold'> React Practice Task</h1>
     <div className='container mx-auto flex justify-between'>
     <div className='grid grid-cols-3 w-[1000px]'>
       {
        cardInfo.map(cardInfo => <Card key={cardInfo.id}
          handleHireActor={handleHireActor}
          cardInfo={cardInfo}></Card>)
       }
      </div>

      <div>
        <Calculation selectedActors={selectedActors}></Calculation>
      </div>
     </div>
      
    </>
  )
}

export default App
