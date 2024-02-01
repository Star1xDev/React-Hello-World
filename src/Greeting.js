import { useState, useEffect } from "react";

const Greeting = () => {

    const [randomNumber, setRandomNumber] = 
    useState(Math.floor(Math.random() * 5) + 1 );
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        window.localStorage.setItem("randomNum", randomNumber);
        console.log(randomNumber);
        switch(randomNumber) {
            case 1:
                setGreeting("Hello");
                break;
            case 2:
                setGreeting("Bonjour");
                break;
            case 3:
                setGreeting("Hola");
                break;
            case 4:
                setGreeting("Goten Tag");
                break;
            case 5:
                setGreeting("Ciao");
                break;
            default:
                setGreeting("Hello");         
        };

    }, [randomNumber]);

    return ( 
        <h1 className="Greeting">{greeting}</h1>
     );
}
 
export default Greeting;