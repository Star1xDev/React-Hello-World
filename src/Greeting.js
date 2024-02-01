import { useState, useEffect } from "react";

const Greeting = ({randomMax}) => {

    const [randomNumber, setRandomNumber] = 
    useState(Math.floor(Math.random() * randomMax) + 1 );
    const [greeting, setGreeting] = useState();

    useEffect(() => {
        window.localStorage.setItem("randomNum", randomNumber);
        if (randomMax === randomNumber) {
            window.localStorage.setItem('jackpot', true);
        } else {
            window.localStorage.setItem("jackpot", false);
        }
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
            case 6:
                setGreeting("Holo");
                break;
            case 7:
                setGreeting("hallo");
                break;
            case 8:
                setGreeting("Czercs");
                break;
            default:
                setGreeting("Hello");         
        };

        return () => {
            console.log("clean up ");
            window.localStorage.removeItem("randomNum");
            window.localStorage.removeItem('jackpot');
        }

    }, [randomNumber, randomMax]);

    return ( 
        <h1 className="Greeting">{greeting}</h1>
     );
}
 
export default Greeting;