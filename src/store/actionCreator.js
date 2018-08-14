
import { CHANGE_USER_INFO } from './const'
const actionCreator = {
    login (username) {
        let action = {
            type: CHANGE_USER_INFO,
            username
        }
        return action
    }
}

export default actionCreator