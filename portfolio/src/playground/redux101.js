import { createStore } from 'redux';

// action generators: functions that create action object
const increementCount = ({ increementBy : addingValue = 1}) => ({
    type: 'INCREEMENT',
    addingValue
})        

const decreementCount = ({ decreementBy: result = 1 }) => ({
    type: 'DECREEMENT',
    result
})

const reset = () =>({
    type: 'RESET'
})

const set = ({count: number = 1}) => ({
    type: 'SET',
    number
})

const store = createStore((state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREEMENT':
            return {
                count: state.count + action.addingValue
            };
        case 'DECREEMENT':
            return {
                count: state.count - action.result
            }
        case 'RESET': 
         return {
             count: 0
         }
         case 'SET':
         return {
             count: action.number
         }
        default:
            return state;
        }
    });

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

/* store.dispatch({
    type: 'INCREEMENT',
    increementBy: 5
});
 */

store.dispatch(increementCount({ increementBy: 5 }));
store.dispatch(decreementCount({ decreementBy: 10 }));
store.dispatch(reset());
store.dispatch(set({count: 101}));
/* store.dispatch({
    type: 'DECREEMENT',
    decreementBy: 10
}); */

/* store.dispatch({
    type: 'RESET'
}); */
/* store.dispatch({
    type:'SET',
    count: 101
})
 */