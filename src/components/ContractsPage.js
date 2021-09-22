import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import ContractsList from '../components/ContractsList';

console.log(`🚀 ~ MISC WORDS`)
class ContractsPage extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     contracts: []
        // }
    }
    
    render() {
      console.log(`CONTRACTS-PAGE => line 15 ~ props`, this.props)
            return (
                <>
                <Container maxWidth="lg" id="component-contracts-page">
               <div id='container-all-contracts'>
                    {
                        this.props.contracts 
                        ?
                            <Container maxWidth="lg" id="contracts-list">
                                <ContractsList contracts={this.props.contracts} 
                                />
                            </Container>
                        : null
                    }
               </div>
                </Container>
            </>
            );
    }
}
export default ContractsPage;