import React from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const CallProtectedApibtn = () => {
    const { getAccessTokenSilently } = useAuth0();
   async function callProtectedApi(){
       try {
        const token = await getAccessTokenSilently();
        const response = await axios.get("http://localhost:5000/protected" , {
            headers : {
                authorization : `Bearer ${token}`
            }
        });
        console.log(response.data)
       } 
       catch (error) {
           console.log(error.message)
       }
       
        // axios.get("http://localhost:5000/protected")
        // .then(response=> console.log(response.data))
        // .catch(error=>console.log(error.message));
    }
    return (
        <button onClick={callProtectedApi}>
            Call Protected Api
        </button>
    )
}

export default CallProtectedApibtn