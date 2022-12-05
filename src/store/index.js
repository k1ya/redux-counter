import{legacy_createStore as createStore} from 'redux';

const reducerFn=(state={counter:0},action)=> {
    
    if(action.type ==="INC"){
        return {counter: state.counter++}
    }else{
        return{counter: state.counter--}
    }
    
    return state
}

const store = createStore(reducerFn)