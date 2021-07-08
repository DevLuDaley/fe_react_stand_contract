import React, {useState} from 'react'
// import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const Contract = (props) => {
    console.log("CLG from Contracts Component");
    const [name, setName] = useState("Lu");
    // render () {
        console.log("Console.log - contracts props => ",props);
        return(
            <div>
                <Container>
                    <h1>{name}, Welcome to your Contracts Page</h1>
                    {/* <h1>click below for more details</h1> */}
                        {/* <Button variant="contained" color="primary">
                         Hello World
                        </Button> */}
                </Container>
            </div>)
        // }
    
}

export default Contract
