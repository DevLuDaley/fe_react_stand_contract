import React, {useState} from 'react'

const Contract = (props) => {
  console.log("CLG from Contract Component");

  const [name, setName] = useState("Lu");
    // render () {
        console.log("CLG- contract props",props);
        return(
            <div>
                <h1>{name}, Welcome to your Contract Page</h1>            
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const Contract = (props) => {
    console.log("CLG from Contracts Component");
    const [name, setName] = useState("Lu");
    // render () {
        console.log("CLG- contracts props",props);
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
