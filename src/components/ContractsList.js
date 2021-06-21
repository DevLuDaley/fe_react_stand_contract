//! react/redux imports
import React, { Fragment, useState } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'

//! Material-ui imports
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

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
         {props.contracts ?
            props.contracts.map(contract =>
              <ul key={"ul-key-" + contract.id} className='contracts-list workout-names' style={{listStyleType: 'none'}}>

                    <li key={"li-key-" + contract.id}>
                      <div key={"div-key-" + contract.id} className='contract-name-wrapper'>
                            <Link key={"contract-url-key-" + contract.id} to={`/contracts/${contract.id}` } className='contract-names'>
                        <h1 key={"h1-" + contract.id} id='contract-names'>
                              {contract.contract_name}
</h1>
</Link>
<Link key={contract.id} to={`/contracts/${contract.id}`}>
<h1>
                                  {contract.workouts && contract.workouts.length != 0 ?
                            <button key={"delete-btn-" + contract.id} id='btn-contract-workout-count'>
                                  {contract.workouts.length }
                           </button>
                      : null}

                          </h1>
                        </Link>
                                {/* <button key={"delete-contract-btn-key-" + contract.id} onClick={handleDeleteContract} id={`btn-delete-contract-${contract.id}`} className="btn-delete-contractslist-contract"> */}
                            {/* <button onClick={deleteContract} id={contract.id} className='btn-delete-contract'> */}
                                Delete
                            {/* </button> */}
                            
                      </div>
                      {
                        contract.workouts ?
                        <Box key={"workouts-section-key-" + contract.id} id={`contract-${contract.contract_name} + "" + ${contract.id}-workouts`} className='contract-workout-list'>
                            {contract.workouts.map(workout =>
                            <div key={"section-div-key-" + workout.id} className='contract-workout-name-block'>

                                 <Link key={"contract-url-key-" + contract.id} to={`/contracts/${contract.id}/workouts/${workout.id}`}>
                                 <button className="edit-btns"> edit </button>
                                 </Link>
                                {/* {workout.workout_name}  */}
                                {/* <button className="delete-btns" onClick={handleDeleteWorkout} id={`contract-${contract.id}-btn-delete-workout-${workout.id}`}> delete </button> */}
{/* <ConfirmDialog/> */}
  {/* <ConfirmDialog
    title="Delete Post?"
    open={confirmOpen}
    setOpen={setConfirmOpen}
    onConfirm={deletePost}
  >
    Are you sure you want to delete this post?
  </ConfirmDialog> */}
                                <Box key={"nested-section-key-" + workout.id} className='contract-workout-details'>
                                </Box>
                            </div>
                            )}
                        </Box>
                      : null}
                  </li>
                            {/* <button onClick={handleDeletecontract} id={`btn-delete-contract-${contract.id}`} className='btn-delete-contract'> */}
                            {/* <button onClick={deletecontract} id={contract.id} className='btn-delete-contract'> */}
                                {/* Delete
                            </button> */}
            </ul>

            ) : "nothing"
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