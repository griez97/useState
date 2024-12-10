import { useState } from "react";

const Counter = () => {
    const[count, setCount] = useState<number>(0)

    return ( 
        <section>
            <button onClick={() => setCount(count + 1)}>+</button>
            <p>{count}</p>
            <button onClick={() => setCount(count - 1)}>-</button>
        </section>
     );
}
 
export default Counter;