
import state from './state'
import {
    CHANGE_USER_INFO
} from './const'

const reducer = (previousState = state, action) => {
    let new_state = { ...previousState }
    
    switch ( action.type ) {
        
        case CHANGE_USER_INFO:
            new_state.user_info = { username: action.username };
            break;

        default: break;
    }

    return new_state
}

export default reducer