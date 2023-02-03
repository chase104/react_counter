import {useState, useEffect} from 'react'


const Counter = () => {
    const [count, setCount] = useState(0);
    // first select element
    // addEventListener(click, () => {})

    // useEffect(() => {
    //     // make that call to database
    // }, [count])

    const handleIncrement = () => {
        console.log("running increment");
        // logic to change count
        let newCount = count+1;
        setCount(newCount)
    }
    const handleDecrement = () => {
        console.log("running decrement");
        // count--
        // count = count -1
        setCount(count - 1)
    }
    
  return (
    <div style={{marginTop: "40px"}}>
        <span>Current Count: {count}</span>
        <section>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </section>
    </div>
  )
};

export default Counter