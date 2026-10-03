import {useState} from 'react';

//custom hook to manage the counter state
function useCounter(){
    //state to hold the counter value
    const [count,setCount]=useState(0);

    //increment the counter
    const increment=()=>{
        setCount(count+1);//state will be updated
    }

    //decrement the counter
    const decrement=()=>{
        setCount(count-1);
    }

    //reset the counter
    const reset=()=>{
        setCount(0);
    }

    //return the counter state and functions    
    return {count, increment, decrement, reset};
}

export default useCounter;