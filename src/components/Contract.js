import React, {useState} from 'react'


const Contract = (props) => {
    console.log("CLG from Contract Component");
    const [name, setName] = useState("Lu");
    // render () {
        console.log("CLG- contract props",props);
        return(
            <div>
                <h1>{name}, Welcome to your Contract Page</h1>            
            </div>)
        // }
    
}

export default Contract
