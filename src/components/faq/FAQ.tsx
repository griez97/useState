import { useState } from "react";
import "./FAQ.css"

const FAQ = () => {
    const [hide, setHide] = useState<boolean>(true)

    const show = () => {
        setHide(!hide)
    }

    return ( 
        <div className="bg">
            <p onClick={show}>Why is React cool to learn? (Click to find out)</p>
            <hr />
            <p className={`${hide && "showIt"}`}>Because :D</p>
        </div>
     );
}
 
export default FAQ;