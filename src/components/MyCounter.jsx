// import useCounter from './hooks/useCounter';

import useCounter from "../hooks/useCounter";



function MyCounter() {

    const {count, increment, decrement, reset} = useCounter(); //calling the custom hook to get the counter state and functions

    return (
        <div>
            <h1>Custom Hook Component Counter</h1>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

}

export default MyCounter;