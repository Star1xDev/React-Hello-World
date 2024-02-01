import { useState } from "react";

const Colorizer = () => {

    const getRandomColor = () => {
        const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        return random;
    }

    const changeColor = () => {
        const randomColor = getRandomColor();
        setColor(randomColor);
    }
    const [color, setColor] = useState("#CD0E0E")
    
    return ( 
        <div className="colorizer">
            <div className="box" style={{backgroundColor: color}}>
                {color}
            </div>
            <button onClick={changeColor}>Change Color</button>
        </div>
     );
}
 
export default Colorizer;