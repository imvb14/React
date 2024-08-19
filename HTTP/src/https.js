export async function updateUserPlaces(places){

    const res = await fetch('http://localhost:3000/user-places',{
        method: 'PUT',
        body: JSON.stringify({places}),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    const resData = await res.json();
    console.log(resData)
    if(!res.ok){
        throw new Error('An error occurred while updating the user places');
    }

    return resData.message;
}