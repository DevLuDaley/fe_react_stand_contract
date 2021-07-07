import React, { Component } from 'react'

import Container from '@material-ui/core/Container';


import ContractsList from '../components/ContractsList';
// import NewContractForm from '../forms/NewContractForm';
// // import Popup from 'reactjs-popup';
// import ModalNewContractForm from '../forms/ModalNewContractForm'
// import 'reactjs-popup/dist/index.css';


class ContractsPage extends Component {
    constructor(props) {
        // console.log('🚀 ~ file: ContractsPage.js ~ line 11 ~ ContractsPage ~ constructor ~ props', props);
        super(props)
        this.state = {contracts: []
            // , workouts: []
        }
    }

//   render() {
  render() {
            return (
                <>
                {/* {console.log("PROPs from ContractsPage", this.props)} */}
                {/* {console.log("PROPs from ContractsPage")} */}
                    {/* <OldContractForm contracts={this.props.contracts}/> */}
                <Container maxWidth="lg" id="component-contracts-page">
                    {/* <ModalNewContractForm/> */}
                    {/* <Popup
                    trigger={
                        <button> Trigger</button>
                        }
                    position="left center"
                    >
                        <div>
                        <NewContractForm contracts={this.props.contracts}/>
                        </div>
                    </Popup> */}

                    {/* <NewContractForm contracts={this.props.contracts}/> */}

               <div id='container-all-contracts'>
                    {
                        this.props.contracts 
                        ?
                            <Container maxWidth="lg" id="contracts-list">
                                <ContractsList contracts={this.props.contracts} 
                                // workouts={this.props.workouts}

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