import { createStore } from 'redux';

// action generators:

const increementCount = () => ({
    type: 'INCREEMENT'
})        
    

const store = createStore((state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREEMENT':
            const increementBy = typeof action.increementBy === 'number' ? action.increementBy : 1;
            return {
                count: state.count + increementBy
            };
        case 'DECREEMENT':
            const decreementBy = typeof action.decreementBy === 'number' ? action.decreementBy : 1;
            return {
                count: state.count - decreementBy
            }
        case 'RESET': 
         return {
             count: 0
         }
         case 'SET':
         return {
             count: action.count
         }
        default:
            return state;
        }
    });

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({
    type: 'INCREMENT',
    increementBy: 5
});
store.dispatch(increementCount());
store.dispatch({
    type: 'DECREEMENT'
});
store.dispatch({
    type: 'DECREEMENT',
    decreementBy: 10
});
store.dispatch({
    type: 'RESET'
});
store.dispatch({
    type:'SET',
    count: 101
})
