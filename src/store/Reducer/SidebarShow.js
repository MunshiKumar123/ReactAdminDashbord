const initialState = {
    sidebarShow: false,
}


export default (state = initialState, { type, ...rest }) => {
    switch (type) {
        case 'set':
            return { ...state, ...rest }
        default:
            return state
    }

}