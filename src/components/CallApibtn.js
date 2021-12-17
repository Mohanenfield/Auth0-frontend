import React from 'react';
import axios from 'axios';

const CallApibtn = () => {
    function callApi(){
        axios.get("http://localhost:5000/")
        .then(response=> console.log(response.data))
        .catch(error=>console.log(error.message));
    }
    return (
        <button onClick={callApi}>
            Call Api
        </button>
    )
}

export default CallApibtn
