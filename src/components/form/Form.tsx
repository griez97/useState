import { useState } from "react"
import "./Form.css"

const Form = () => {
    const [name, setName] = useState<string>("")
    const [surname, setSurname] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    const getName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const getSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSurname(event.target.value)
    }

    const getEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    return ( 
        <div>
        <section>
            <input onChange={getName} value={name} type="text" placeholder="Enter your Name"/>
            <input onChange={getSurname} value={surname} type="text" placeholder="Enter your Surname"/>
            <input onChange={getEmail} value={email} type="email" placeholder="Enter your Email Address"/>
        </section>
        <section>
            
            <p>Name: {name}</p>
            <p>Surname: {surname}</p>
            <p>E-Mail: {email}</p>
            
        </section>
        </div>
     );
}
 
export default Form;