//! react/redux imports
import React from 'react'
// import React, { Fragment, useState } from 'react'
// import {Link} from 'react-router-dom';
import { connect } from 'react-redux'

//! Material-ui imports
import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';

//! local file imports
// import deleteContract from '../actions/deleteContract'
// import deleteContractWorkout from '../actions/deleteContractWorkout'

const ContractsList = (props) =>  {
  
//   const handleDeleteContract = (e) => {
//     if (props.contracts){
//       // console.log(e.target);
//       const targetId = e.target.id.replace("btn-delete-contract-", "")
//       const clickedContract = props.contracts.find(contract => contract.id == targetId)
//       var shouldDelete = confirm('To delete this contract press \'OK\'. Otherwise press \'Cancel\'');
//       // setConfirmOpen(true)  
//       if (shouldDelete) {
//   // deleteArticle();
//   props.deleteContract(clickedContract)
// }
//         }
//     }

    // const handleDeleteWorkout = (e) => {
    //   if (props.contracts && props.workouts){
    //     let targetId = e.target.id

    //     let contractString = (/\d{1,5}/.exec(targetId))
    //     let workoutString = (/\d{1,5}$/.exec(targetId))
    //     let workoutIdString = workoutString[0] //.toString()
    //     let workoutId = parseInt(workoutIdString) //.toString()
    //     let contractId = contractString[0].toString()

    //     const clickedContract = props.contracts.find(contract => contract.id == contractId) 
    //     const outgoingPayload = {
    //       "id": clickedContract.id,
    //       "workout_id_to_delete": workoutId
    //   }
    //   var shouldDelete = confirm('To delete this workout press \'OK\'. Otherwise press \'Cancel\'');
    //   // setConfirmOpen(true)  
    //   if (shouldDelete) {
    //   props.deleteContractWorkout(outgoingPayload)
    //     }
    //     }
    // }
    
  return (
    <Container maxWidth="lg">
          {
            props.contracts ?
            props.contracts.map(contract =>
              <ul
                key={"ul-key-" + contract.id} className='contracts-list'
                style={{listStyleType: 'none'}}
                >
                contract: {contract.id}
                <br/>
                {/* contract-date: {contract.date}
                <br/> */}

                {
                  contract.posts.length !== 0 ?
                    contract.posts.map(post =>
                       <p> {post.title} </p>
                    )
                : null
                }
              </ul>
                )
              : null
          }
    </Container>
  )
}

function mapStateToProps(state) {
  
  return {
    contracts: state.contractsReducer.contracts
    //  ,
    //  workouts: state.workoutsReducer.workouts
  }
}

// export default connect(mapStateToProps, {deleteContract, deleteContractWorkout}) (ContractsList);
export default connect(mapStateToProps) (ContractsList);
