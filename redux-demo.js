const redux = require('redux');

const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === 'Increment') {
        return{
            counter: state.counter+1
        };
    }
    if (action.type === 'Decrement') {
        return{
            counter: state.counter-1
        }
    }
};

const store = redux.createStore(counterReducer);

console.log(store.getState())

const counterSubscriber = () =>{
    const latestState =  store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({type:'Increment'});
store.dispatch({type:'Increment'});
store.dispatch({type:'Increment'});
store.dispatch({type:'Increment'});
store.dispatch({type:'Increment'});

store.dispatch({type : 'Decrement'});
store.dispatch({type : 'Decrement'});