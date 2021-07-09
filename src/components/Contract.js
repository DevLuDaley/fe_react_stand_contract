import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const Contract = (props) => {
    console.log("CLG from Contracts Component");
    // const [name, setName] = useState("");
    const [name, setName] = useState("Lu");
    
    var nameSet1 = () =>  {
        setName("LH")
    }
    
    var nameSet2 = () =>  {
        setName("Lu")
    }
    // render () {
        console.log("Console.log - contracts props => ",props);
        // setName("Lu")
        return(
            <div>
                <Container>
                    <h1> Hey {name}, Welcome to your Contracts Page</h1>
                    {/* <h1>click below for more details</h1> */}
                        <Button variant="contained" color="primary" onClick={() => nameSet1()}>
                         Name 1
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => nameSet2()}>
                         name 2
                        </Button>
                </Container>
            </div>)
        // }
    
}

export default Contract
