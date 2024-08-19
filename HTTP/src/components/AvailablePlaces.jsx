import { useState,useEffect } from 'react';
import Places from './Places.jsx';
import { sortPlacesByDistance } from '../loc.js';

export default function AvailablePlaces({ onSelectPlace }) {

  console.log('AvailablePlaces component rendered');
  const [loading, setLoading] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(()=>{
    console.log('UseEffect component rendered');
    setLoading(true);
    async function getAvailablePlaces(){
      
      try{
        const response = await fetch('http://localhost:3000/places');
      const  data = await response.json();
        if(!response.ok){
         throw Error('An Error Occurred');
        }

        navigator.geolocation.getCurrentPosition((position)=>{
          const sortedPlaces = sortPlacesByDistance(data.places, position.coords.latitude, position.coords.longitude);
          setAvailablePlaces(sortedPlaces);
          setLoading(false);
        }) 
      }
      catch(error){
        setError(error.message);
      }
      setLoading(false);
    }
   
    getAvailablePlaces();
   
  },[]);

  if(error){
    return <p> It Error Occurred</p>
  }

  return (
   
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={loading}
      loadingText="Loading available places..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
