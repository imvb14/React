import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue){
    const [isFetching, setIsFetching]  = useState();
    const [error, setError] = useState();
    const [fetcheddata, setfetcheddata] = useState(initialValue);

    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const data = await fetchFn();
            setfetcheddata(data);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch user places.' });
          }
    
          setIsFetching(false);
        }
    
        fetchData();
      }, [fetchFn]);

      return {isFetching, error, fetcheddata,setfetcheddata};
}

