import React, {useState} from 'react'


const Contracts = (props) => {
    console.log("CLG from Contracts Component");
    const [name, setName] = useState("Lu");
    // render () {
        console.log("CLG- contracts props",props);
        return(
            <div>
                <h1>{name}, Welcome to your Contracts Page</h1>            
            </div>)
        // }
    
}

export default Contracts
