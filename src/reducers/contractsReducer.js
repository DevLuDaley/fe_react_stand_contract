import {_, set, update, flow} from 'lodash/fp';

// const intialState = {contracts: [], contract: {}}
const intialState = [{"contracts": [], "workouts": []}]

export default function contractsReducer(state = intialState, action) {
// console.log('🚀 ~ file: contractsReducer.js ~ line 4 ~ contractsReducer ~ action', action);
// debugger;
    switch (action.type) {
        case 'FETCH_CONTRACTS':        // debugger;
            return {contracts: action.payload}

        case 'ADD_CONTRACT':
            let newContract = action.payload
            return {...state.contracts, contracts: state.contracts.concat(newContract)}

        case 'UPDATE_CONTRACT':
            const payloadId = action.payload.id
            const updatedContract = action.payload
            const selectedContract = state.contracts.filter(contract => 
                        contract.id == payloadId)
                        // console.log('🚀 ~~line 17 ~ ~ UPDATED-CONTRACT', updatedContract);
                        // console.log('🚀 ~~ line 16 ~ ~ PAYLOAD-ID', payloadId);
                        // console.log('🚀 ~~ line 20 ~ ~  state.contracts.FILTER', state.contracts.filter(contract => contract.id == payloadId))
                        // console.log('🚀 ~ file: contractsReducer.js ~ line 19 ~ contractsReducer ~ selectedContract', selectedContract);
                        // console.log('STATE', state);
            return {
                    contracts: state.contracts.map(contract => contract.id == payloadId ? action.payload : contract)
            }

        case 'DELETE_CONTRACT':
            const filteredContracts = state.contracts.filter(contract => contract.id !== action.payload.contractId);
            return {...state, contracts: filteredContracts}

        // case 'ADD_CONTRACT_WORKOUT':
        //     let newWorkout = action.payload.workout

        //     let creatorContractId = action.payload.contractId
        //     let creatorContract = state.contracts.find(contract => contract.id == creatorContractId)
        //     let creatorContractWorkoutsList = creatorContract.workouts

        //     const newCreatorContractWorkoutsList = creatorContractWorkoutsList.concat(newWorkout) 

        //     return {...state, contracts: state.contracts.map(r => r), contract: creatorContract.workouts = newCreatorContractWorkoutsList }


        // case 'DELETE_CONTRACT_WORKOUT':
        //     let contractId = action.payload.contractId
        //     let workoutId = action.payload.workoutId

        //     const contract = state.contracts.find( r => r.id == contractId)
        //     const workout = contract.workouts.find( w => w.id == workoutId)
        //     let workoutsList = contract.workouts
        //     const filteredWorkoutsList = workoutsList.filter(w => w.id !== workoutId)

        //     return {...state, contracts: state.contracts.map(r => r), contract: contract.workouts = filteredWorkoutsList }
        //     // return {...state, contracts: state.contracts, workouts: filteresWorkoutsList} //, workout: workout}

        // case 'UPDATE_WORKOUT':
        //         const updateWorkoutPayload = action.payload
        //         const updateWorkoutPayloadId = action.payload.id

        //         let updateContractPayloadId = updateWorkoutPayload.contracts[0].id
        //         let updateableContract = state.contracts.find(contract => contract.id == updateContractPayloadId)

        //         let updateableContractWorkoutsList = updateableContract.workouts
        //         const filteredUpdateWorkoutsList = updateableContractWorkoutsList.map(w => w.id == updateWorkoutPayloadId ? updateWorkoutPayload : w)

        //         return {...state, contracts: state.contracts.map(r => r), contract: updateableContract.workouts = filteredUpdateWorkoutsList 

        //         }

                default:
            // return {...state}
            return state
    }

}