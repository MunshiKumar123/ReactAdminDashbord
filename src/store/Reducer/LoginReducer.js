import { LOGIN_FORM_DATA } from "../type/type"

const INITIAL_STATE = {
    email: '',
    password: "",
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case LOGIN_FORM_DATA:
            return {
                ...state, [action.payload.prop]: action.payload.value
            }

        default:
            return state
    }

}

