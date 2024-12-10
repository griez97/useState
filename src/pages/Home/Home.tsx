import { useState } from "react";
import Counter from "../../components/counter/Counter";
import FAQ from "../../components/faq/FAQ";
import Form from "../../components/form/Form";
import "./Home.css"

const Home = () => {


    return ( 
        <>
        <Form />
        <hr />
        <Counter/>
        <hr />
        <FAQ/>
        <hr />
        </>
     );
}
 
export default Home;